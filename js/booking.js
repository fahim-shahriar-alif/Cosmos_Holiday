import { db, auth } from './config.js';
import { doc, getDoc, addDoc, collection, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

let currentUser = null;
let currentPackage = null;

onAuthStateChanged(auth, async (user) => {
    if (!user) {
        alert('Please login to book a package');
        window.location.href = 'auth.html';
        return;
    }
    currentUser = user;
    await loadPackageInfo();
});

async function loadPackageInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const packageId = urlParams.get('package');
    
    if (!packageId) {
        document.getElementById('packageInfo').innerHTML = '<p class="text-red-500">Invalid package</p>';
        return;
    }
    
    try {
        const packageDoc = await getDoc(doc(db, 'packages', packageId));
        if (packageDoc.exists()) {
            currentPackage = { id: packageDoc.id, ...packageDoc.data() };
            document.getElementById('packageInfo').innerHTML = `
                <h3 class="text-2xl font-bold mb-2">${currentPackage.name}</h3>
                <p class="text-gray-600 mb-2">${currentPackage.description}</p>
                <p class="text-sm text-gray-500">📅 ${currentPackage.dates}</p>
                <p class="text-2xl font-bold text-blue-600 mt-2">$${currentPackage.price}</p>
            `;
        } else {
            document.getElementById('packageInfo').innerHTML = '<p class="text-red-500">Package not found</p>';
        }
    } catch (error) {
        console.error('Error loading package:', error);
        document.getElementById('packageInfo').innerHTML = '<p class="text-red-500">Failed to load package</p>';
    }
}

document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('bookingStatus');
    
    if (!currentUser || !currentPackage) {
        status.innerHTML = '<p class="text-red-600 font-semibold">Error: Missing user or package information</p>';
        return;
    }
    
    const bookingData = {
        userId: currentUser.uid,
        userEmail: currentUser.email || 'anonymous',
        packageId: currentPackage.id,
        packageName: currentPackage.name,
        fullName: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value,
        travelers: parseInt(document.getElementById('travelers').value),
        specialRequests: document.getElementById('requests').value,
        totalPrice: currentPackage.price * parseInt(document.getElementById('travelers').value),
        status: 'pending',
        createdAt: serverTimestamp()
    };
    
    try {
        await addDoc(collection(db, 'bookings'), bookingData);
        status.innerHTML = '<p class="text-green-600 font-semibold">Booking inquiry submitted successfully! We will contact you soon.</p>';
        setTimeout(() => window.location.href = 'index.html', 2000);
    } catch (error) {
        console.error('Error submitting booking:', error);
        status.innerHTML = '<p class="text-red-600 font-semibold">Failed to submit inquiry. Please try again.</p>';
    }
});
