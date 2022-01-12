import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD2o7RhZKailQupMZXsP1l3pirIag793qs",
  authDomain: "e-drink-2109d.firebaseapp.com",
  projectId: "e-drink-2109d",
  storageBucket: "e-drink-2109d.appspot.com",
  messagingSenderId: "449349100323",
  appId: "1:449349100323:web:02a392ea975f9c230fe296",
  measurementId: "G-VRKVD8KMV2"
};

initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
