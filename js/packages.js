import { db, auth } from './config.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

let currentUser = null;

onAuthStateChanged(auth, (user) => {
    currentUser = user;
});

// Fetch and display packages
async function loadPackages() {
    const domesticContainer = document.getElementById('domesticPackages');
    const internationalContainer = document.getElementById('internationalPackages');
    
    domesticContainer.innerHTML = '<div class="spinner"></div>';
    internationalContainer.innerHTML = '<div class="spinner"></div>';
    
    try {
        const packagesSnapshot = await getDocs(collection(db, 'packages'));
        const packages = packagesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        const domestic = packages.filter(p => p.type === 'domestic');
        const international = packages.filter(p => p.type === 'international');
        
        domesticContainer.innerHTML = domestic.length ? 
            domestic.map(createPackageCard).join('') : 
            '<p class="text-gray-500">No domestic packages available</p>';
        
        internationalContainer.innerHTML = international.length ? 
            international.map(createPackageCard).join('') : 
            '<p class="text-gray-500">No international packages available</p>';
            
    } catch (error) {
        console.error('Error loading packages:', error);
        domesticContainer.innerHTML = '<p class="text-red-500">Failed to load packages</p>';
        internationalContainer.innerHTML = '<p class="text-red-500">Failed to load packages</p>';
    }
}

function createPackageCard(pkg) {
    return `
        <div class="package-card bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
                <h4 class="text-xl font-bold mb-2">${pkg.name}</h4>
                <p class="text-gray-600 mb-4">${pkg.description}</p>
                <div class="mb-4">
                    <p class="text-sm text-gray-500">📅 ${pkg.dates}</p>
                    <p class="text-2xl font-bold text-blue-600 mt-2">$${pkg.price}</p>
                </div>
                <button onclick="bookPackage('${pkg.id}')" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Book Now
                </button>
            </div>
        </div>
    `;
}

window.bookPackage = function(packageId) {
    if (!currentUser) {
        alert('Please login to book a package');
        window.location.href = 'auth.html';
        return;
    }
    window.location.href = `booking.html?package=${packageId}`;
};

// Load packages on page load
if (document.getElementById('domesticPackages')) {
    loadPackages();
}
