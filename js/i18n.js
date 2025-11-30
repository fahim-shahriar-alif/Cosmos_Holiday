// Internationalization (i18n) for English and Bengali
const translations = {
    en: {
        nav: {
            home: "HOME",
            query: "QUERY",
            gallery: "GALLERY",
            about: "ABOUT US",
            contact: "CONTACT US",
            login: "Login"
        },
        hero: {
            title: "Enjoy<br>YOUR HOLIDAY",
            subtitle: "WITH YOUR FAMILY AND FRIENDS",
            button: "Explore Packages"
        },
        filter: {
            title: "Filter by University",
            all: "All Universities"
        },
        packages: {
            inside: "📍 Inside Bangladesh",
            outside: "✈️ Outside Bangladesh",
            price: "Starting From",
            currency: "BDT",
            book: "Book Now",
            seats: "Seats",
            discount: "OFF"
        },
        contact: {
            title: "Send Us a Message",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message",
            success: "Message sent successfully!",
            error: "Failed to send message. Please try again."
        },
        footer: {
            copyright: "Your Trusted Partner for Student Travel & Tourism"
        }
    },
    bn: {
        nav: {
            home: "হোম",
            query: "কুয়েরি",
            gallery: "গ্যালারি",
            about: "আমাদের সম্পর্কে",
            contact: "যোগাযোগ",
            login: "লগইন"
        },
        hero: {
            title: "উপভোগ করুন<br>আপনার ছুটির দিন",
            subtitle: "আপনার পরিবার এবং বন্ধুদের সাথে",
            button: "প্যাকেজ দেখুন"
        },
        filter: {
            title: "বিশ্ববিদ্যালয় অনুযায়ী ফিল্টার করুন",
            all: "সকল বিশ্ববিদ্যালয়"
        },
        packages: {
            inside: "📍 বাংলাদেশের ভিতরে",
            outside: "✈️ বাংলাদেশের বাইরে",
            price: "মূল্য",
            currency: "টাকা",
            book: "বুক করুন",
            seats: "সিট",
            discount: "ছাড়"
        },
        contact: {
            title: "আমাদের একটি বার্তা পাঠান",
            name: "নাম",
            email: "ইমেইল",
            message: "বার্তা",
            send: "বার্তা পাঠান",
            success: "বার্তা সফলভাবে পাঠানো হয়েছে!",
            error: "বার্তা পাঠাতে ব্যর্থ। আবার চেষ্টা করুন।"
        },
        footer: {
            copyright: "শিক্ষার্থী ভ্রমণ ও পর্যটনের জন্য আপনার বিশ্বস্ত অংশীদার"
        }
    }
};

let currentLang = 'en';

// Initialize language
function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (const k of keys) {
            translation = translation[k];
        }
        
        if (translation) {
            element.innerHTML = translation;
        }
    });
    
    // Update language toggle button
    const langIcon = document.getElementById('langIcon');
    const langText = document.getElementById('langText');
    
    if (langIcon && langText) {
        if (lang === 'en') {
            langIcon.textContent = '🇬🇧';
            langText.textContent = 'EN';
        } else {
            langIcon.textContent = '🇧🇩';
            langText.textContent = 'বাং';
        }
    }
    
    // Reload packages with new language (for UI elements only)
    if (typeof loadPackages === 'function' && typeof currentUniversityFilter !== 'undefined') {
        loadPackages(currentUniversityFilter);
    }
}

// Toggle language
function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'bn' : 'en';
    setLanguage(newLang);
}

// Get translation
function t(key) {
    const keys = key.split('.');
    let translation = translations[currentLang];
    
    for (const k of keys) {
        translation = translation[k];
    }
    
    return translation || key;
}

// Export functions
window.initLanguage = initLanguage;
window.toggleLanguage = toggleLanguage;
window.t = t;
window.getCurrentLang = () => currentLang;
