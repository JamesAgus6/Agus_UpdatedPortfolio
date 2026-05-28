import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Get these values from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAuhl7FVhvGdH4Zn75T2vxFKLzNvNJTfAI",
  authDomain: "agusportfolio-bea18.firebaseapp.com",
  projectId: "agusportfolio-bea18",
  storageBucket: "agusportfolio-bea18.firebasestorage.app",
  messagingSenderId: "427797252824",
  appId: "1:427797252824:web:76bb26e81c483984d365ad",
  measurementId: "G-FLJ57Y3ZYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth (optional, for user authentication)
export const auth = getAuth(app);
