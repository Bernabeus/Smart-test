// Import the functions you need from the SDKs you need
import { initializeApp, applicationDefault, cert } from 'firebase/app';
import { getDatabase, ref, set, push, child, onValue } from 'firebase/database';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://test-chaside-smart-default-rtdb.firebaseio.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/*
const db = getFirestore();

export async function writeFireData(
  lastN,
  names,
  colegio,
  curso,
  paralelo,
  numEs,
  numRep,
  carre,
  email,
  cIn,
  hIn,
  aIn,
  sIn,
  iIn,
  dIn,
  eIn,
  cAp,
  hAp,
  aAp,
  sAp,
  iAp,
  dAp,
  eAp
) {
  try {
    const docRef = await addDoc(collection(db, 'usersCHASIDE'), {
      apellidos: lastN,
      nombres: names,
      colegio: colegio,
      curso: curso,
      paralelo: paralelo,
      numEstudiante: numEs,
      numRepresentante: numRep,
      carreras: carre,
      email: email,
      CIntereses: cIn,
      HIntereses: hIn,
      AIntereses: aIn,
      SIntereses: sIn,
      IIntereses: iIn,
      DIntereses: dIn,
      EIntereses: eIn,
      CAptitudes: cAp,
      HAptitudes: hAp,
      AAptitudes: aAp,
      SAptitudes: sAp,
      IAptitudes: iAp,
      DAptitudes: dAp,
      EAptitudes: eAp,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}*/

export async function writeUserData(
  lastN,
  names,
  colegio,
  curso,
  paralelo,
  numEs,
  numRep,
  carre,
  email,
  maxIn,
  maxAp,
  cIn,
  hIn,
  aIn,
  sIn,
  iIn,
  dIn,
  eIn,
  cAp,
  hAp,
  aAp,
  sAp,
  iAp,
  dAp,
  eAp
) {
  try {
    const db = getDatabase();
    const postListRef = ref(db, 'usersCHASIDE');
    const newPostRef = push(postListRef);
    set(newPostRef, {
      apellidos: lastN,
      nombres: names,
      colegio: colegio,
      curso: curso,
      paralelo: paralelo,
      numEstudiante: numEs,
      numRepresentante: numRep,
      carreras: carre,
      email: email,
      maxIntereses: maxIn,
      maxAptitudes: maxAp,
      CIntereses: cIn,
      HIntereses: hIn,
      AIntereses: aIn,
      SIntereses: sIn,
      IIntereses: iIn,
      DIntereses: dIn,
      EIntereses: eIn,
      CAptitudes: cAp,
      HAptitudes: hAp,
      AAptitudes: aAp,
      SAptitudes: sAp,
      IAptitudes: iAp,
      DAptitudes: dAp,
      EAptitudes: eAp,
    });
  } catch (error) {
    console.log(error);
  }
}

export const readData = () => {
  const db = getDatabase();
  const starCountRef = ref(db, 'usersCHASIDE/');
  var dataU;
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    dataU = data;
  });
  return dataU;
};

/*
export async function readFireData() {
  const querySnapshot = await getDocs(collection(db, 'usersCHASIDE'));
  var dataU = [];
  querySnapshot.forEach((doc) => {
    dataU.push(doc.data());
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, ' => ', doc.data());
  });
  //console.log(dataU);
  return dataU;
}
*/
