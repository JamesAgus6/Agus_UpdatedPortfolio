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

// Real-time listener for comments
export const subscribeToComments = (
  callback: (comments: Comment[]) => void,
  projectId?: string
) => {
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

  return onSnapshot(q, (snapshot) => {
    const comments: Comment[] = [];
    snapshot.forEach((doc) => {
      comments.push({ id: doc.id, ...doc.data() } as Comment);
    });
    callback(comments);
  });
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
