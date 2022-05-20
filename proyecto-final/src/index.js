import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj7kDeaBlt6UUwnqO8HebG7TX8F-1XJxw",
  authDomain: "proyecto-final-tripputi.firebaseapp.com",
  projectId: "proyecto-final-tripputi",
  storageBucket: "proyecto-final-tripputi.appspot.com",
  messagingSenderId: "308478091997",
  appId: "1:308478091997:web:1d5db10206dd3493ef3134"
};

// Initialize Firebase
initializeApp(firebaseConfig);

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
