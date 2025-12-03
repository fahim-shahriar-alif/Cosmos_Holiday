// Static packages data (no database needed for now)
const staticPackages = [
    // Inside Bangladesh (Domestic)
    {
        id: '1',
        name: "COX'S BAZAR BEACH RESORT",
        description: "World's longest natural beach with stunning sunsets",
        price: 8500,
        duration: "3 Days / 2 Nights",
        category: "Cox's Bazar",
        type: "domestic",
        discount: 10,
        seats: 30,
        university: "dhaka",
        date: "2025-12-20",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
    },
    {
        id: '2',
        name: "SUNDARBANS MANGROVE TOUR",
        description: "Explore the largest mangrove forest and Royal Bengal Tigers",
        price: 12000,
        duration: "2 Days / 1 Night",
        category: "Sundarbans",
        type: "domestic",
        discount: 0,
        seats: 20,
        university: "buet",
        date: "2025-12-15",
        image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&h=400&fit=crop"
    },
    {
        id: '3',
        name: "SYLHET TEA GARDEN TOUR",
        description: "Beautiful tea estates, Ratargul Swamp Forest & Jaflong",
        price: 9500,
        duration: "3 Days / 2 Nights",
        category: "Sylhet",
        type: "domestic",
        discount: 5,
        seats: 25,
        university: "nsu",
        date: "2026-01-10",
        image: "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=600&h=400&fit=crop"
    },
    {
        id: '4',
        name: "BANDARBAN HILL TRACTS",
        description: "Mountains, waterfalls, and tribal culture experience",
        price: 11000,
        duration: "4 Days / 3 Nights",
        category: "Bandarban",
        type: "domestic",
        discount: 8,
        seats: 22,
        university: "brac",
        date: "2026-01-05",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: '13',
        name: "2 DAYS BANDARBAN HIKING: UPOMOHADES-BISNAKANDI-JAFLONG",
        description: "Epic 2-day hiking adventure through Bandarban's scenic trails",
        price: 4000,
        duration: "2 Days / 1 Night",
        category: "Bandarban",
        type: "domestic",
        discount: 0,
        seats: 25,
        university: "dhaka",
        date: "2026-01-15",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop"
    },
    {
        id: '14',
        name: "UPOMOHADES, TURKBHUMI & BISNAKANDI HIKING TOUR",
        description: "Explore waterfalls and natural beauty of Sylhet",
        price: 2500,
        duration: "1 Day",
        category: "Sylhet",
        type: "domestic",
        discount: 5,
        seats: 30,
        university: "buet",
        date: "2026-01-15",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop"
    },
    {
        id: '15',
        name: "BISNAKANDI TREKKING & HIKING TOUR",
        description: "One day trekking adventure to Bisnakandi stone quarry",
        price: 2500,
        duration: "1 Day",
        category: "Sylhet",
        type: "domestic",
        discount: 0,
        seats: 28,
        university: "nsu",
        date: "2026-01-15",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop"
    },
    {
        id: '16',
        name: "RUMSA CHERA MELKHUM & MAYAMAYA LAKE",
        description: "Discover hidden gems of Bandarban with lake views",
        price: 3500,
        duration: "2 Days / 1 Night",
        category: "Bandarban",
        type: "domestic",
        discount: 10,
        seats: 20,
        university: "iub",
        date: "2026-01-20",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
        id: '17',
        name: "UPOMOHADES, TURKBHUMI & BISNAKANDI COMPLETE TOUR",
        description: "Full day hiking package covering all major spots",
        price: 2500,
        duration: "1 Day",
        category: "Sylhet",
        type: "domestic",
        discount: 0,
        seats: 32,
        university: "aiub",
        date: "2026-01-18",
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop"
    },
    {
        id: '18',
        name: "BISNAKANDI TREKKING ADVENTURE",
        description: "Adventurous trekking experience through rocky terrain",
        price: 2500,
        duration: "1 Day",
        category: "Sylhet",
        type: "domestic",
        discount: 0,
        seats: 35,
        university: "brac",
        date: "2026-01-22",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    // Outside Bangladesh (International)
    {
        id: '5',
        name: "SUN SIYAM IRU FUSHI - MALDIVES",
        description: "Luxury beach resort with overwater villas",
        price: 69000,
        duration: "4 Days / 3 Nights",
        category: "Maldives",
        type: "international",
        discount: 15,
        seats: 15,
        university: "iub",
        date: "2025-12-28",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop"
    },
    {
        id: '6',
        name: "BANGKOK - PATTAYA TOUR",
        description: "Explore Thailand's vibrant cities and beaches",
        price: 45000,
        duration: "5 Days / 4 Nights",
        category: "Thailand",
        type: "international",
        discount: 10,
        seats: 20,
        university: "dhaka",
        date: "2026-01-15",
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&h=400&fit=crop"
    },
    {
        id: '7',
        name: "DUBAI SHOPPING FESTIVAL",
        description: "Shop till you drop in the city of gold",
        price: 85000,
        duration: "6 Days / 5 Nights",
        category: "UAE",
        type: "international",
        discount: 12,
        seats: 18,
        university: "aiub",
        date: "2026-01-20",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop"
    },
    {
        id: '8',
        name: "SINGAPORE CITY TOUR",
        description: "Modern city-state with Gardens by the Bay",
        price: 55000,
        duration: "4 Days / 3 Nights",
        category: "Singapore",
        type: "international",
        discount: 10,
        seats: 16,
        university: "nsu",
        date: "2026-02-01",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop"
    },
    {
        id: '9',
        name: "BALI PARADISE PACKAGE",
        description: "Tropical Indonesian getaway with temples",
        price: 68000,
        duration: "5 Days / 4 Nights",
        category: "Indonesia",
        type: "international",
        discount: 15,
        seats: 14,
        university: "buet",
        date: "2026-02-10",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop"
    },
    {
        id: '10',
        name: "KUNMING, BEIJING & SHANGHAI",
        description: "Discover ancient and modern China",
        price: 112000,
        duration: "8 Days / 7 Nights",
        category: "China",
        type: "international",
        discount: 8,
        seats: 12,
        university: "brac",
        date: "2026-02-15",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop"
    },
    {
        id: '11',
        name: "LONDON-SCOTLAND TOUR",
        description: "Historic UK adventure through England & Scotland",
        price: 270990,
        duration: "12 Days / 11 Nights",
        category: "UK",
        type: "international",
        discount: 5,
        seats: 10,
        university: "iub",
        date: "2026-03-01",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop"
    },
    {
        id: '12',
        name: "TURKEY HISTORICAL TOUR",
        description: "Istanbul, Cappadocia & Pamukkale exploration",
        price: 95000,
        duration: "7 Days / 6 Nights",
        category: "Turkey",
        type: "international",
        discount: 18,
        seats: 15,
        university: "aiub",
        date: "2026-02-20",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&h=400&fit=crop"
    }
];

let currentUniversityFilter = 'all';

// Load packages from static data
function loadPackages(universityFilter = 'all') {
    const insideContainer = document.getElementById('insideBangladeshPackages');
    const outsideContainer = document.getElementById('outsideBangladeshPackages');
    
    let filteredPackages = staticPackages;
    
    // Filter by university if not 'all'
    if (universityFilter !== 'all') {
        filteredPackages = staticPackages.filter(p => p.university === universityFilter);
    }
    
    const insideBD = filteredPackages.filter(p => p.type === 'domestic');
    const outsideBD = filteredPackages.filter(p => p.type === 'international');
    
    if (insideContainer) {
        insideContainer.innerHTML = insideBD.length > 0 
            ? insideBD.map(createPackageCard).join('')
            : '<p class="col-span-4 text-center text-gray-500 py-8">No domestic packages available for this university</p>';
    }
    
    if (outsideContainer) {
        outsideContainer.innerHTML = outsideBD.length > 0 
            ? outsideBD.map(createPackageCard).join('')
            : '<p class="col-span-4 text-center text-gray-500 py-8">No international packages available for this university</p>';
    }
}

// Filter packages by university
window.filterByUniversity = function(university) {
    currentUniversityFilter = university;
    
    // Update active button
    document.querySelectorAll('.university-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-university="${university}"]`).classList.add('active');
    
    // Reload packages with filter
    loadPackages(university);
};

function createPackageCard(pkg) {
    const discount = pkg.discount || 0;
    const universityNames = {
        'dhaka': 'University of Dhaka',
        'buet': 'BUET',
        'nsu': 'NSU',
        'brac': 'BRAC University',
        'iub': 'IUB',
        'aiub': 'AIUB'
    };
    const universityName = universityNames[pkg.university] || pkg.university || 'General';
    
    // Get translations for UI elements only (not package names)
    const priceLabel = typeof t === 'function' ? t('packages.price') : 'Starting From';
    const currency = typeof t === 'function' ? t('packages.currency') : 'BDT';
    const bookText = typeof t === 'function' ? t('packages.book') : 'Book Now';
    const seatsText = typeof t === 'function' ? t('packages.seats') : 'Seats';
    const discountText = typeof t === 'function' ? t('packages.discount') : 'OFF';
    
    return `
        <div class="package-card bg-white rounded-2xl shadow-xl overflow-hidden group">
            <div class="relative h-64 overflow-hidden">
                <img src="${pkg.image || 'https://via.placeholder.com/600x400/4169E1/FFFFFF?text=' + encodeURIComponent(pkg.name)}" 
                     alt="${pkg.name}" class="w-full h-full object-cover">
                

                
                <!-- University Badge -->
                <div class="absolute top-4 left-4 z-10">
                    <span class="badge-modern bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-xs font-bold shadow-lg border border-white/50">
                        🎓 ${universityName}
                    </span>
                </div>
                
                <!-- Gradient Overlay -->
                <div class="package-overlay">
                    <h4 class="text-white text-xl font-bold mb-3 leading-tight">${pkg.name}</h4>
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="badge-modern bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/30">
                            ⏱️ ${pkg.duration || '4 Days'}
                        </span>
                        ${pkg.seats ? `<span class="badge-modern bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/30">
                            👥 ${pkg.seats} ${seatsText}
                        </span>` : ''}
                        ${pkg.date ? `<span class="badge-modern bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/30">
                            📅 ${pkg.date}
                        </span>` : ''}
                    </div>
                </div>
            </div>
            
            <!-- Card Footer -->
            <div class="p-5 bg-gradient-to-br from-white to-gray-50">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">${priceLabel}</p>
                        <p class="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            ${pkg.price.toLocaleString()}
                        </p>
                        <p class="text-xs text-gray-500">${currency}</p>
                    </div>
                    <button onclick="bookPackage('${pkg.id}')" 
                            class="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-sm group-hover:shadow-blue-500/50">
                        ${bookText} →
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
if (document.getElementById('insideBangladeshPackages') || document.getElementById('outsideBangladeshPackages')) {
    loadPackages();
}
