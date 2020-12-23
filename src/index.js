import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase'

const config = {
    apiKey: "AIzaSyDqB_KMmQhuzjOnJ7YdqiQH_5WzTCepB_k",
    authDomain: "eliasen-netflix-clone.firebaseapp.com",
    databaseURL: '',
    projectId: "eliasen-netflix-clone",
    storageBucket: "eliasen-netflix-clone.appspot.com",
    messagingSenderId: "458917441040",
    appId: "1:458917441040:web:607d94592c3f05442f6495"
}

const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>, 
    document.getElementById('root')
);