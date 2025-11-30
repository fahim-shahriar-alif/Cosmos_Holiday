import { db, auth } from './config.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

let currentUser = null;

onAuthStateChanged(auth, (user) => {
    currentUser = user;
});

// Fetch and display packages
async function loadPackages() {
    const latestContainer = document.getElementById('latestPackages');
    const recommendedContainer = document.getElementById('recommendedPackages');
    
    if (latestContainer) latestContainer.innerHTML = '<div class="spinner"></div>';
    if (recommendedContainer) recommendedContainer.innerHTML = '<div class="spinner"></div>';
    
    try {
        const packagesSnapshot = await getDocs(collection(db, 'packages'));
        const packages = packagesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        const latest = packages.filter(p => p.featured === 'latest').slice(0, 4);
        const recommended = packages.filter(p => p.featured === 'recommended').slice(0, 4);
        
        if (latestContainer) {
            latestContainer.innerHTML = latest.length ? 
                latest.map(createPackageCard).join('') : 
                '<p class="text-gray-500 col-span-4">No latest packages available</p>';
        }
        
        if (recommendedContainer) {
            recommendedContainer.innerHTML = recommended.length ? 
                recommended.map(createPackageCard).join('') : 
                '<p class="text-gray-500 col-span-4">No recommended packages available</p>';
        }
            
    } catch (error) {
        console.error('Error loading packages:', error);
        if (latestContainer) latestContainer.innerHTML = '<p class="text-red-500 col-span-4">Failed to load packages</p>';
        if (recommendedContainer) recommendedContainer.innerHTML = '<p class="text-red-500 col-span-4">Failed to load packages</p>';
    }
}

function createPackageCard(pkg) {
    const discount = pkg.discount || 0;
    return `
        <div class="package-card bg-white rounded-lg shadow-lg overflow-hidden relative">
            ${discount > 0 ? `<div class="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">${discount}% OFF</div>` : ''}
            <div class="relative">
                <img src="${pkg.image || 'https://via.placeholder.com/400x250/4169E1/FFFFFF?text=' + encodeURIComponent(pkg.name)}" 
                     alt="${pkg.name}" class="w-full h-48 object-cover">
                <div class="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">
                    ${pkg.category || 'Package'}
                </div>
            </div>
            <div class="p-4">
                <h4 class="text-lg font-bold mb-2 truncate">${pkg.name}</h4>
                <p class="text-sm text-gray-500 mb-2">⏱️ ${pkg.duration || '4 Days'}</p>
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-2xl font-bold text-blue-600">BDT ${pkg.price.toLocaleString()}</p>
                    </div>
                    <button onclick="bookPackage('${pkg.id}')" class="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-500 font-semibold text-sm">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `;
}

window.filterPackages = function(category) {
    alert(`Filtering ${category} packages - Feature coming soon!`);
};

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
