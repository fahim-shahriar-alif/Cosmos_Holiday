// Static packages data (no database needed for now)
const staticPackages = [
    // Latest Packages
    {
        id: '1',
        name: "SUN SIYAM IRU FUSHI - MALDIVES",
        description: "Luxury beach resort with overwater villas",
        price: 69000,
        duration: "4 Days",
        category: "Maldives",
        featured: "latest",
        discount: 15,
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=250&fit=crop"
    },
    {
        id: '2',
        name: "FIHALHOHI ISLAND RESORT - MALDIVES",
        description: "Paradise island getaway with crystal waters",
        price: 60500,
        duration: "4 Days",
        category: "Maldives",
        featured: "latest",
        discount: 20,
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&h=250&fit=crop"
    },
    {
        id: '3',
        name: "BANGKOK - PATTAYA TOUR",
        description: "Explore Thailand's vibrant cities",
        price: 45000,
        duration: "5 Days",
        category: "Thailand",
        featured: "latest",
        discount: 10,
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&h=250&fit=crop"
    },
    {
        id: '4',
        name: "DUBAI SHOPPING FESTIVAL",
        description: "Shop till you drop in Dubai",
        price: 85000,
        duration: "6 Days",
        category: "UAE",
        featured: "latest",
        discount: 12,
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop"
    },
    // Recommended Packages
    {
        id: '5',
        name: "KUNMING, BEIJING & SHANGHAI - CHINA",
        description: "Discover ancient and modern China",
        price: 112000,
        duration: "8 Days",
        category: "China",
        featured: "recommended",
        discount: 8,
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=250&fit=crop"
    },
    {
        id: '6',
        name: "LONDON-SCOTLAND TOUR",
        description: "Historic UK adventure",
        price: 270990,
        duration: "6 Nights / 12 Days",
        category: "UK",
        featured: "recommended",
        discount: 5,
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=250&fit=crop"
    },
    {
        id: '7',
        name: "SINGAPORE CITY TOUR",
        description: "Modern city-state exploration",
        price: 55000,
        duration: "4 Days",
        category: "Singapore",
        featured: "recommended",
        discount: 10,
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=250&fit=crop"
    },
    {
        id: '8',
        name: "BALI PARADISE PACKAGE",
        description: "Tropical Indonesian getaway",
        price: 68000,
        duration: "5 Days",
        category: "Indonesia",
        featured: "recommended",
        discount: 15,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=250&fit=crop"
    }
];

// Load packages from static data
function loadPackages() {
    const latestContainer = document.getElementById('latestPackages');
    const recommendedContainer = document.getElementById('recommendedPackages');
    
    const latest = staticPackages.filter(p => p.featured === 'latest');
    const recommended = staticPackages.filter(p => p.featured === 'recommended');
    
    if (latestContainer) {
        latestContainer.innerHTML = latest.map(createPackageCard).join('');
    }
    
    if (recommendedContainer) {
        recommendedContainer.innerHTML = recommended.map(createPackageCard).join('');
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
    // For now, just show an alert (no login required)
    const pkg = staticPackages.find(p => p.id === packageId);
    if (pkg) {
        alert(`Booking inquiry for: ${pkg.name}\n\nPrice: BDT ${pkg.price.toLocaleString()}\n\nLogin feature will be added later!`);
    }
};

window.filterPackages = function(category) {
    alert(`Filtering ${category} packages - Feature coming soon!`);
};

// Load packages on page load
if (document.getElementById('latestPackages') || document.getElementById('recommendedPackages')) {
    loadPackages();
}
