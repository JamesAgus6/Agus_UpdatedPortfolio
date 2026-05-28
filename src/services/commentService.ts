import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../config/firebase';

export interface Comment {
  id?: string;
  name: string;
  email: string;
  message: string;
  profilePhoto?: string; // Base64 encoded image
  timestamp: Timestamp;
  projectId?: string;
  read?: boolean;
}

// Add a new comment
export const addComment = async (comment: Omit<Comment, 'id' | 'timestamp'>) => {
  try {
    const docRef = await addDoc(collection(db, 'comments'), {
      ...comment,
      timestamp: Timestamp.now(),
      read: false,
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};

// Real-time listener for comments - with fallback for index issues
export const subscribeToComments = (
  callback: (comments: Comment[]) => void,
  projectId?: string
) => {
  try {
    let q;
    
    // Try with timestamp ordering first
    try {
      if (projectId) {
        q = query(
          collection(db, 'comments'),
          where('projectId', '==', projectId),
          orderBy('timestamp', 'desc')
        );
      } else {
        // When no projectId, just fetch all comments ordered by timestamp
        q = query(
          collection(db, 'comments'),
          orderBy('timestamp', 'desc')
        );
      }
    } catch (e) {
      // Fallback: query without ordering
      console.warn('Falling back to query without timestamp ordering');
      if (projectId) {
        q = query(
          collection(db, 'comments'),
          where('projectId', '==', projectId)
        );
      } else {
        q = query(collection(db, 'comments'));
      }
    }

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const comments: Comment[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          comments.push({ 
            id: doc.id, 
            ...data,
            timestamp: data.timestamp
          } as Comment);
        });
        
        // Sort by timestamp in JavaScript if not sorted by database
        comments.sort((a, b) => {
          const aTime = a.timestamp?.seconds || 0;
          const bTime = b.timestamp?.seconds || 0;
          return bTime - aTime;
        });
        
        console.log('Comments fetched:', comments.length);
        callback(comments);
      },
      (error) => {
        console.error('Error listening to comments:', error);
        // Try fallback without ordering
        const fallbackQ = query(collection(db, 'comments'));
        const fallbackUnsub = onSnapshot(
          fallbackQ,
          (snapshot) => {
            const comments: Comment[] = [];
            snapshot.forEach((doc) => {
              const data = doc.data();
              comments.push({ 
                id: doc.id, 
                ...data,
                timestamp: data.timestamp
              } as Comment);
            });
            
            // Sort by timestamp in JavaScript
            comments.sort((a, b) => {
              const aTime = a.timestamp?.seconds || 0;
              const bTime = b.timestamp?.seconds || 0;
              return bTime - aTime;
            });
            
            console.log('Comments fetched (fallback):', comments.length);
            callback(comments);
          },
          (fallbackError) => {
            console.error('Fallback listener also failed:', fallbackError);
            callback([]);
          }
        );
        
        return fallbackUnsub;
      }
    );

    return unsubscribe;
  } catch (error) {
    console.error('Error setting up comments listener:', error);
    // Return a no-op unsubscribe function if setup fails
    return () => {};
  }
};

// Get all comments (one-time fetch)
export const getComments = async (projectId?: string): Promise<Comment[]> => {
  try {
    let q;
    if (projectId) {
      q = query(
        collection(db, 'comments'),
        where('projectId', '==', projectId),
        orderBy('timestamp', 'desc')
      );
    } else {
      q = query(
        collection(db, 'comments'),
        orderBy('timestamp', 'desc')
      );
    }

    const snapshot = await getDocs(q);
    const comments: Comment[] = [];
    snapshot.forEach((doc) => {
      comments.push({ id: doc.id, ...doc.data() } as Comment);
    });
    return comments;
  } catch (error) {
    console.error('Error getting comments:', error);
    throw error;
  }
};
