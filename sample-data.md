# Sample Firestore Data for Cosmos Holiday

## Collection: `packages`

Add these documents to your Firestore `packages` collection:

### Latest Packages

```javascript
// Document 1
{
  name: "SUN SIYAM IRU FUSHI - MALDIVES",
  description: "Luxury beach resort with overwater villas",
  price: 69000,
  duration: "4 Days",
  category: "Maldives",
  type: "international",
  featured: "latest",
  discount: 15,
  image: "https://via.placeholder.com/400x250/00CED1/FFFFFF?text=Maldives"
}

// Document 2
{
  name: "FIHALHOHI ISLAND RESORT - MALDIVES",
  description: "Paradise island getaway with crystal waters",
  price: 60500,
  duration: "4 Days",
  category: "Maldives",
  type: "international",
  featured: "latest",
  discount: 20,
  image: "https://via.placeholder.com/400x250/1E90FF/FFFFFF?text=Maldives+Resort"
}

// Document 3
{
  name: "BANGKOK - PATTAYA TOUR",
  description: "Explore Thailand's vibrant cities",
  price: 45000,
  duration: "5 Days",
  category: "Thailand",
  type: "international",
  featured: "latest",
  discount: 10,
  image: "https://via.placeholder.com/400x250/FF6347/FFFFFF?text=Bangkok"
}

// Document 4
{
  name: "DUBAI SHOPPING FESTIVAL",
  description: "Shop till you drop in Dubai",
  price: 85000,
  duration: "6 Days",
  category: "UAE",
  type: "international",
  featured: "latest",
  discount: 12,
  image: "https://via.placeholder.com/400x250/FFD700/000000?text=Dubai"
}
```

### Recommended Packages

```javascript
// Document 5
{
  name: "KUNMING, BEIJING & SHANGHAI - CHINA",
  description: "Discover ancient and modern China",
  price: 112000,
  duration: "8 Days",
  category: "China",
  type: "international",
  featured: "recommended",
  discount: 8,
  image: "https://via.placeholder.com/400x250/DC143C/FFFFFF?text=China+Tour"
}

// Document 6
{
  name: "LONDON-SCOTLAND TOUR",
  description: "Historic UK adventure",
  price: 270990,
  duration: "6 Nights / 12 Days",
  category: "UK",
  type: "international",
  featured: "recommended",
  discount: 5,
  image: "https://via.placeholder.com/400x250/4B0082/FFFFFF?text=London"
}

// Document 7
{
  name: "SINGAPORE CITY TOUR",
  description: "Modern city-state exploration",
  price: 55000,
  duration: "4 Days",
  category: "Singapore",
  type: "international",
  featured: "recommended",
  discount: 10,
  image: "https://via.placeholder.com/400x250/FF1493/FFFFFF?text=Singapore"
}

// Document 8
{
  name: "BALI PARADISE PACKAGE",
  description: "Tropical Indonesian getaway",
  price: 68000,
  duration: "5 Days",
  category: "Indonesia",
  type: "international",
  featured: "recommended",
  discount: 15,
  image: "https://via.placeholder.com/400x250/32CD32/FFFFFF?text=Bali"
}
```

### Additional Packages (Regular/Group/Eid)

```javascript
// Document 9 - Regular Package
{
  name: "COX'S BAZAR BEACH RESORT",
  description: "Bangladesh's longest beach",
  price: 15000,
  duration: "3 Days",
  category: "Domestic",
  type: "domestic",
  featured: "regular",
  packageType: "regular",
  discount: 0,
  image: "https://via.placeholder.com/400x250/20B2AA/FFFFFF?text=Cox's+Bazar"
}

// Document 10 - Group Package
{
  name: "TURKEY HISTORICAL TOUR",
  description: "Group tour of Istanbul & Cappadocia",
  price: 95000,
  duration: "7 Days",
  category: "Turkey",
  type: "international",
  featured: "regular",
  packageType: "group",
  discount: 18,
  image: "https://via.placeholder.com/400x250/FF4500/FFFFFF?text=Turkey"
}

// Document 11 - Eid Package
{
  name: "MAKKAH & MADINAH UMRAH",
  description: "Special Eid Umrah package",
  price: 125000,
  duration: "10 Days",
  category: "Saudi Arabia",
  type: "international",
  featured: "recommended",
  packageType: "eid",
  discount: 0,
  image: "https://via.placeholder.com/400x250/228B22/FFFFFF?text=Umrah"
}
```

## How to Add Data to Firestore

1. Go to Firebase Console > Firestore Database
2. Click "Start Collection"
3. Collection ID: `packages`
4. Add documents with the data above
5. Each document will auto-generate an ID

## Price Note

Prices are in BDT (Bangladeshi Taka). For reference:
- 1 USD ≈ 110 BDT
- Student-friendly packages: 15,000 - 50,000 BDT
- Premium packages: 50,000 - 150,000 BDT
- Luxury packages: 150,000+ BDT
