import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4Gvc8CP02WshKqpl5C2NRuSLSgBR4AgA",
  authDomain: "skillconnect-db2dc.firebaseapp.com",
  projectId: "skillconnect-db2dc",
  storageBucket: "skillconnect-db2dc.firebasestorage.app",
  messagingSenderId: "137601406292",
  appId: "1:137601406292:web:3a95ea8db6c9b16aeda4c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);