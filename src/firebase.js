import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDd-Scr6VM4LEEXo_mpyujEkWlM6mYG0XM",
    authDomain: "fir-react-a131f.firebaseapp.com",
    databaseURL: "https://fir-react-a131f.firebaseio.com",
    projectId: "fir-react-a131f",
    storageBucket: "fir-react-a131f.appspot.com",
    messagingSenderId: "1025364087897",
    appId: "1:1025364087897:web:e651fc76b8199539204d48"
}

firebase.initializeApp(config)
export default firebase;