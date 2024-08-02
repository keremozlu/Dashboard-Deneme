

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// Firebase yapılandırmanız
const firebaseConfig = {
  apiKey: "",
  authDomain: "dashboard-fb831.firebaseapp.com",
  projectId: "dashboard-fb831",
  storageBucket: "dashboard-fb831.appspot.com",
  messagingSenderId: "220511683386",
  appId: "1:220511683386:web:8f5964a2a6e2280ae44603",
  measurementId: "G-MZQTLK3RGF"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
