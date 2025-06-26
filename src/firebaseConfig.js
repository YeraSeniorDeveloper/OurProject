import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBUZe01jWLsVlzjWO4B-HEAUymH7L6G6Lo",
  authDomain: "job-board-project-yerassyl.firebaseapp.com",
  databaseURL: "https://job-board-project-yerassyl-default-rtdb.firebaseio.com",
  projectId: "job-board-project-yerassyl",
  storageBucket: "job-board-project-yerassyl.firebasestorage.app",
  messagingSenderId: "602341950494",
  appId: "1:602341950494:web:16ad8928364735bd8f9a0f",
  measurementId: "G-J51L502SGX"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
