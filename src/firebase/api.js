import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "./config";

const collectionName = "turns";

export const saveTurn = (hora, turn, user) =>
  addDoc(collection(db, collectionName), {hora, turn, user});


export const onGetLinks = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName), callback);
  return unsub;
};

export const getTurns = () => getDocs(collection(db, collectionName));

export const deleteTurn = (id) => deleteDoc(doc(db, collectionName, id));

export const getTurnId = (id) => getDoc(doc(db, collectionName, id));