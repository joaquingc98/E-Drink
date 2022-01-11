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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
