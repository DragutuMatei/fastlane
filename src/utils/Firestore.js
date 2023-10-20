import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "firebase/firestore";
import {
  addDoc,
  collection,
  deleteDoc,
  Timestamp,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

export default class Firestore {
  constructor() {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_APIKEY,
      authDomain: process.env.REACT_APP_AUTHDOMAIN,
      projectId: process.env.REACT_APP_PROJECTID,
      storageBucket: process.env.REACT_APP_STORAGEBUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
      appId: process.env.REACT_APP_APPID,
    };

    const app = initializeApp(firebaseConfig);
    this.db = getFirestore();
    this.auth = getAuth(app);
  }

  getDb() {
    return this.db;
  }

  async addItem(collectionName, user) {
    const db = getFirestore();
    const sRef = collection(db, collectionName);

    const docs = await getDocs(
      query(
        collection(this.db, "users"),
        where("username", "==", user.username)
      )
    );
    let rasp;
    if (docs.docs.length == 0) {
      await addDoc(sRef, user)
        .then((docRef) => {
          rasp = true;
        })
        .catch((res) => {
          rasp = false;
        });
    } else {
      rasp = false;
    }

    return rasp;
  }
}
