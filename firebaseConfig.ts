import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2eNkvDybBwwqXQWxk_JqCDLiDBsTbqpk",
  authDomain: "expensetracker-ccfce.firebaseapp.com",
  projectId: "expensetracker-ccfce",
  storageBucket: "expensetracker-ccfce.firebasestorage.app",
  messagingSenderId: "861471973113",
  appId: "1:861471973113:web:d18b53cc7af89602900c28",
  measurementId: "G-8FE2TYM15V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };