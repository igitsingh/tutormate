import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ⚠️ Replace these with your real Firebase config from the Firebase Console
const firebaseConfig = {
  apiKey: "XXXX",
  authDomain: "XXXX",
  projectId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
