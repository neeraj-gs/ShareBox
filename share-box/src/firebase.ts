import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA-l-9ACEaLLkP-gB2Y_0KZBV1To4gbu4o",
    authDomain: "sharebox-3c4d2.firebaseapp.com",
    projectId: "sharebox-3c4d2",
    storageBucket: "sharebox-3c4d2.appspot.com",
    messagingSenderId: "914120536614",
    appId: "1:914120536614:web:c2d510ba9e8ebbaeaa2ce7"
  };


  const app = getApps().length? getApp():initializeApp(firebaseConfig) //if already initlaised a value is present , tehn we get an app ,lese we need to intlaise 
  //we initlaise only once
  const db = getFirestore(app)
  const storage = getStorage(app)

  export {db,storage};