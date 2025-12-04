// Firebase Configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdj4hBMQ0lXBd3J-Mq7r4BgOdZeuca9aY",
    authDomain: "cosmos-holiday-563eb.firebaseapp.com",
    projectId: "cosmos-holiday-563eb",
    storageBucket: "cosmos-holiday-563eb.firebasestorage.app",
    messagingSenderId: "176431895536",
    appId: "1:176431895536:web:4746ef3299b77e043a0335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// EmailJS Configuration
export const EMAILJS_CONFIG = {
    publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID'
};
