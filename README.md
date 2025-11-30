# 🌍 Cosmos Holiday - Student Tourism Platform

A dynamic student-focused travel booking platform with Firebase authentication, Firestore database, and EmailJS integration.

## 🚀 Features

- **Firebase Authentication**: Email/Password and Anonymous login
- **Dynamic Package Display**: Domestic and International travel packages from Firestore
- **Booking Inquiry System**: Authenticated users can submit booking inquiries
- **EmailJS Contact Form**: Direct email communication
- **Responsive Design**: Mobile-first with Tailwind CSS

## 📋 Setup Instructions

### 1. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Email/Password and Anonymous)
4. Create a Firestore database
5. Copy your Firebase config and update `js/config.js`

### 2. Firestore Database Structure

Create a `packages` collection with documents like:

```javascript
{
  name: "Beach Paradise - Goa",
  description: "5 days of sun, sand, and adventure",
  price: 299,
  dates: "Dec 20-25, 2024",
  type: "domestic"
}
```

The `bookings` collection will be created automatically when users submit inquiries.

### 3. EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template with variables: `from_name`, `from_email`, `message`
4. Update EmailJS credentials in `index.html` and `js/config.js`

### 4. Run the Project

Simply open `index.html` in a browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## 📁 Project Structure

```
cosmos-holiday/
├── index.html          # Main landing page
├── auth.html           # Login/Signup page
├── booking.html        # Booking inquiry form
├── css/
│   └── styles.css      # Custom styles
├── js/
│   ├── config.js       # Firebase & EmailJS config
│   ├── auth.js         # Authentication logic
│   ├── packages.js     # Package display logic
│   └── booking.js      # Booking submission logic
└── README.md
```

## 🎓 University Demo Notes

- Demonstrates NoSQL database integration (Firestore)
- Secure authentication with Firebase
- Real-time data fetching
- Modern responsive design
- Email integration for customer communication

## 🔧 Configuration Checklist

- [ ] Update Firebase config in `js/config.js`
- [ ] Enable Firebase Authentication methods
- [ ] Create Firestore database and add sample packages
- [ ] Configure EmailJS credentials
- [ ] Test authentication flow
- [ ] Test booking inquiry submission
- [ ] Test contact form email delivery

## 📝 Sample Package Data

Add these to your Firestore `packages` collection:

**Domestic:**
- Goa Beach Retreat ($299, Dec 20-25)
- Himalayan Adventure ($399, Jan 10-15)
- Kerala Backwaters ($349, Dec 28-Jan 2)

**International:**
- Thailand Explorer ($799, Dec 22-30)
- Dubai Luxury ($999, Jan 5-12)
- Bali Paradise ($899, Dec 26-Jan 3)

## 🎯 Key Technologies

- HTML5, Tailwind CSS, Vanilla JavaScript
- Firebase Authentication & Firestore
- EmailJS for email integration
- Responsive design principles
