import { auth } from './config.js';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInAnonymously 
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const anonymousBtn = document.getElementById('anonymousBtn');
const authStatus = document.getElementById('authStatus');

// Tab switching
loginTab.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    loginTab.classList.add('bg-blue-600', 'text-white');
    loginTab.classList.remove('text-gray-700');
    signupTab.classList.remove('bg-blue-600', 'text-white');
    signupTab.classList.add('text-gray-700');
});

signupTab.addEventListener('click', () => {
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    signupTab.classList.add('bg-blue-600', 'text-white');
    signupTab.classList.remove('text-gray-700');
    loginTab.classList.remove('bg-blue-600', 'text-white');
    loginTab.classList.add('text-gray-700');
});

// Login
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
        authStatus.innerHTML = '<p class="text-green-600 font-semibold">Login successful!</p>';
        setTimeout(() => window.location.href = 'index.html', 1000);
    } catch (error) {
        authStatus.innerHTML = `<p class="text-red-600 font-semibold">${error.message}</p>`;
    }
});

// Signup
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        authStatus.innerHTML = '<p class="text-green-600 font-semibold">Account created successfully!</p>';
        setTimeout(() => window.location.href = 'index.html', 1000);
    } catch (error) {
        authStatus.innerHTML = `<p class="text-red-600 font-semibold">${error.message}</p>`;
    }
});

// Anonymous login
anonymousBtn.addEventListener('click', async () => {
    try {
        await signInAnonymously(auth);
        authStatus.innerHTML = '<p class="text-green-600 font-semibold">Signed in as guest!</p>';
        setTimeout(() => window.location.href = 'index.html', 1000);
    } catch (error) {
        authStatus.innerHTML = `<p class="text-red-600 font-semibold">${error.message}</p>`;
    }
});
