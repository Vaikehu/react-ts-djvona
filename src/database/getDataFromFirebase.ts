// @ts-nocheck
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAEw1SGz2nnC4oUMN-ukXqjq05yeob-qq8',
  authDomain: 'pension-ananas-b5cac.firebaseapp.com',
  projectId: 'pension-ananas-b5cac',
  storageBucket: 'pension-ananas-b5cac.appspot.com',
  messagingSenderId: '679033424137',
  appId: '1:679033424137:web:3f30dcd0c680bd66426bd8',
  measurementId: 'G-FF55EJT15C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getDataFromFirebase = async (collectionName) => {
  const db = getFirestore(app);

  const dataCol = collection(db, collectionName);
  const dataSnapshot = await getDocs(dataCol);
  const dataList = dataSnapshot.docs.map((doc) => doc.data());

  return dataList;
};
