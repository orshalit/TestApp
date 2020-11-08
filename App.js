import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import './App.css';
/**/
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDhuzs-h0KJllvKT3RnusuRfMP0Nt3Ml0o",
  authDomain: "reactbootcamp-725b2.firebaseapp.com",
  databaseURL: "https://reactbootcamp-725b2.firebaseio.com",
  projectId: "reactbootcamp-725b2",
  storageBucket: "reactbootcamp-725b2.appspot.com",
  messagingSenderId: "717745421324",
  appId: "1:717745421324:web:aef219a955876c06d0c229",
  measurementId: "G-Q6Y8HJS5E9"
};

  

/*firebase.initializeApp({
  apiKey: "AIzaSyDhuzs-h0KJllvKT3RnusuRfMP0Nt3Ml0o",
  authDomain: "reactbootcamp-725b2.firebaseapp.com",
  databaseURL: "https://reactbootcamp-725b2.firebaseio.com",
  projectId: "reactbootcamp-725b2",
  storageBucket: "reactbootcamp-725b2.appspot.com",
  messagingSenderId: "717745421324",
  appId: "1:717745421324:web:aef219a955876c06d0c229",
  measurementId: "G-Q6Y8HJS5E9"
})*/

/*export default !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore()*/

// Initialize Firebase

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);  
}

const auth = firebase.auth();
const firestore = firebase.firestore()

function App() {
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;
