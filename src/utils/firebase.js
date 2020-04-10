import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const getCollectionReference = collectionName => {
  return firestore.collection(collectionName);
};

export const getDocumentReference = (collectionName, documentId) => {
  return firestore.doc(`${collectionName}/${documentId}`);
};

export const getCollectionSnapshot = async collectionRef => {
  return await collectionRef.get();
};

export const getDocumentSnapshot = async documentRef => {
  const snapshot = await documentRef.get();

  if (!snapshot.exists) {
    return false;
  }

  return snapshot;
};

export const getDocumentData = documentSnap => {
  return documentSnap.data();
};

export const getCollectionData = (collectionSnap, callback) => {
  return collectionSnap.docs.map(doc => callback(doc, getDocumentData(doc)));
};

export const createDocumentsForCollection = async (collectionName, data) => {
  const collectionRef = getCollectionReference(collectionName);

  const batch = firestore.batch();

  data.forEach(obj => {
    const newDocumentRef = collectionRef.doc();
    batch.set(newDocumentRef, obj);
  });

  return await batch.commit();
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = getDocumentReference('users', userAuth.uid);
  const snapshot = getDocumentSnapshot(userRef);

  if (!snapshot) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error(`Error creating user - ${error.message}`);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = collectionsSnap => {
  const collectionData = getCollectionData(collectionsSnap, (doc, data) => {
    const {title, items} = data;

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return collectionData.reduce((accumulator, collection) => {
    //TODO: improve for camel case in case of spaces etc
    accumulator[collection.title.toLowerCase()] = collection;

    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
