import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.ENV_FIREBASE_API_KEY,
  authDomain: import.meta.env.ENV_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.ENV_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.ENV_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.ENV_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.ENV_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};
