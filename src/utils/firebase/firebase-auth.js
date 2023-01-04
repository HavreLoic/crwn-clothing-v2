import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRVIkRLkPrcPts2WpXZuX5OpGZ9zVd3eg",
    authDomain: "crown-clothing-db-2b7ea.firebaseapp.com",
    projectId: "crown-clothing-db-2b7ea",
    storageBucket: "crown-clothing-db-2b7ea.appspot.com",
    messagingSenderId: "855963138884",
    appId: "1:855963138884:web:b192258e741e5a79373511"
};

const app = initializeApp(firebaseConfig);

// Set google provider with GoogleAuthProvider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

// Set google auth
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)


export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = await doc(db, 'user', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
          });
        } catch (error) {
            // 
        }
      }
    
      return userDocRef;
}