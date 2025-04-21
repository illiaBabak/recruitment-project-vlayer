import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import LogRocket from 'logrocket';
import { getZoomLevel } from 'src/utils/getZoomLevel';
import { AlertProps } from 'src/components/Alert';
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

export const signInWithGoogle = async (
  setAlertProps: (props: AlertProps) => void
) => {
  try {
    const provider = new GoogleAuthProvider();

    const response = await signInWithPopup(auth, provider);

    const { user } = response;

    if (user) {
      LogRocket.identify(user.uid, {
        name: user.displayName ?? 'Unknown Name',
        email: user.email ?? 'Unknown Email',

        // Additional info
        os: navigator.userAgentData?.platform ?? 'Unknown',
        memory: navigator
          ? `At least ${navigator.deviceMemory} GB of RAM`
          : 'Unknown Memory',
        local: navigator.languages
          ? navigator.languages[0]
          : navigator.language,
        zoomLevel: getZoomLevel(),
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    }
  } catch (error) {
    LogRocket.error('Error signing in with Google:', error);
    setAlertProps({
      text: 'Failed to sign in',
      type: 'error',
      position: 'top',
    });
  }
};

export const logout = async (setAlertProps: (props: AlertProps) => void) => {
  try {
    await signOut(auth);
  } catch (error) {
    LogRocket.error('Error signing out:', error);
    setAlertProps({
      text: 'Failed to sign out',
      type: 'error',
      position: 'top',
    });
  }
};
