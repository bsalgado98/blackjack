import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from './components/Game';
import AwaitingOpponents from './components/AwaitingOpponents';

import './App.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
    apiKey: "AIzaSyB_tSulELHqtuDTiSLN6O5ytJkFwEEJ_wk",
    authDomain: "bruno-blackjack.firebaseapp.com",
    databaseURL: "https://bruno-blackjack.firebaseio.com",
    projectId: "bruno-blackjack",
    storageBucket: "bruno-blackjack.appspot.com",
    messagingSenderId: "956053403189",
    appId: "1:956053403189:web:52524a0813b4f16914a37c"
};
firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var auth = firebase.auth();

export default function App() {
    const [currentUser, setCurrentUser] = useState({displayName: 'none', email: 'none'});
    const [onlineUsers, setOnlineUsers] = useState({});
    ui.start('#firebaseui-auth-container', {
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
    });
    useEffect(() => {
        if(currentUser.displayName == 'none') {
            return;
        }
        
    }, [currentUser]);
    useEffect(() => {
    }, [onlineUsers]);
    useEffect(() => {
        firebase.database().ref('users/').on('value', (snapshot) => {
            if (snapshot.val() != null) {
                setOnlineUsers(snapshot.val());
            }
        })
        console.log('online uzerz');
        console.log(onlineUsers);
        console.log('users length');
        console.log(Object.keys(onlineUsers).length);
        auth.onAuthStateChanged((user) => {
            console.log(user);
            if(user) {
                let userExists = false;
                console.log('user uid')
                    console.log(user.uid);
                for(let onlineUser in onlineUsers) {
                    if(user.uid == onlineUser.uid) {
                        userExists = true;
                    }
                }
                if(!userExists) {
                    setCurrentUser(
                        {
                            displayName: auth.currentUser.displayName,
                            email: auth.currentUser.email,
                            uid: auth.currentUser.uid,
                            score: 0,
                            handValue: 0,
                            bankrupt: false
                        }
                    );
                    firebase.database().ref('users/' + auth.currentUser.uid).set({
                        displayName: auth.currentUser.displayName,
                        email: auth.currentUser.email,
                        uid: auth.currentUser.uid,
                        score: 0,
                        handValue: 0,
                        bankrupt: false
                    })
                }
            }
        })
    }, []);
    return(
        <div>
            <div id='firebaseui-auth-container'></div>
            {
                currentUser.displayName != 'none'
                ? <h1>Logged in as: {currentUser.email}</h1>
                : null
            }
            {
                Object.keys(onlineUsers).length > 1
                ? <Game onlineUsers={onlineUsers} currentUser={currentUser}></Game>
                : <AwaitingOpponents/>
            }
        </div>
    );
}