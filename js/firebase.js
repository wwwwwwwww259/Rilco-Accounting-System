import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCAERqA2pifEX1qxOywgJ-s-3bdZUpjUVM",
  authDomain: "rilco-accounting-eb936.firebaseapp.com",
  projectId: "rilco-accounting-eb936",
  storageBucket: "rilco-accounting-eb936.firebasestorage.app",
  messagingSenderId: "478020629363",
  appId: "1:478020629363:web:c0f2705ff2e2e78d860b06"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
