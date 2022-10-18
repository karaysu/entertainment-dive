import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "entertainment-dive.firebaseapp.com",
	projectId: "entertainment-dive",
	storageBucket: "entertainment-dive.appspot.com",
	messagingSenderId: "1058045997483",
	appId: "1:1058045997483:web:56cc612276c6e0204ca2ee",
	measurementId: "G-RXDZ7RSLNS"

};

const app = initializeApp(firebaseConfig);

export default app;
