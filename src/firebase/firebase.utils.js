import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAhDxKD9m2V5ov0vLggXpSlRuLeGe8zSnI",
  authDomain: "crwn-db-abce1.firebaseapp.com",
  databaseURL: "https://crwn-db-abce1.firebaseio.com",
  projectId: "crwn-db-abce1",
  storageBucket: "crwn-db-abce1.appspot.com",
  messagingSenderId: "532683223406",
  appId: "1:532683223406:web:ed00e7210ba94c584f917f",
  measurementId: "G-FD3DP4N7H6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;