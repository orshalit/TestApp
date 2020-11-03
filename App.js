import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDhuzs-h0KJllvKT3RnusuRfMP0Nt3Ml0o",
  authDomain: "reactbootcamp-725b2.firebaseapp.com",
  databaseURL: "https://reactbootcamp-725b2.firebaseio.com",
  projectId: "reactbootcamp-725b2",
  storageBucket: "reactbootcamp-725b2.appspot.com",
  messagingSenderId: "717745421324",
  appId: "1:717745421324:web:aef219a955876c06d0c229",
  measurementId: "G-Q6Y8HJS5E9"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


export default function App() {
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
