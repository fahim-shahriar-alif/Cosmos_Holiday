# 🔐 Cosmos Holiday Admin Panel

This is a **separate admin website** for managing Cosmos Holiday packages and users.

## 📁 Folder Structure

```
admin/
├── index.html          # Admin dashboard
├── js/
│   └── admin.js       # Admin functionality
└── README.md          # This file
```

## 🚀 How to Use

### **Option 1: Run Locally (Current Setup)**
1. Open `admin/index.html` in your browser
2. Login with:
   - **Username:** `admin`
   - **Password:** `admin`
3. Manage packages and view users

### **Option 2: Deploy Separately (Recommended)**
1. **Cut** the entire `admin` folder
2. **Deploy** to a separate hosting:
   - Netlify: `admin.cosmosholiday.com`
   - Vercel: `admin-cosmosholiday.vercel.app`
   - Firebase Hosting: `admin.cosmosholiday.web.app`
3. Same Firebase database - packages sync automatically!

---

## 🎯 Features

### **📦 Package Management**
- ✅ Add new packages
- ✅ Edit existing packages
- ✅ Delete packages
- ✅ View all packages in table format

### **👥 User Management**
- ✅ View all registered users
- ✅ See user details (name, email, phone, gender)
- ✅ Monitor user registrations

### **📊 Dashboard**
- ✅ Total packages count
- ✅ Total users count
- ✅ Total bookings (coming soon)

---

## 🔒 Security

### **Simple Login**
- **Username:** `admin`
- **Password:** `admin`
- No Firebase Authentication needed
- Session-based (logout when browser closes)

### **Firestore Rules**
Make sure your Firestore rules allow:
```javascript
match /packages/{packageId} {
  allow read: if true;  // Anyone can view
  allow write: if request.auth != null;  // Only logged-in users
}
```

---

## 🌐 How It Works

### **Same Firebase Database**
```
Main Website (cosmosholiday.com)
    ↓
Firebase Database
    ↑
Admin Panel (admin.cosmosholiday.com)
```

**When you add a package in admin:**
1. Package saved to Firebase
2. Main website loads from Firebase
3. Package appears on main website instantly!

---

## 📝 Adding a Package

1. **Login** to admin panel
2. Click **"+ Add New Package"**
3. Fill in the form:
   - Package Name
   - Price (BDT)
   - Duration (e.g., "3 Days / 2 Nights")
   - Seats
   - Type (Domestic/International)
   - University
   - Category
   - Date
   - Image URL
   - Description
   - Full Details
4. Click **"Save Package"**
5. Package appears on main website!

---

## 🔧 Deployment Options

### **Netlify (Easiest)**
```bash
# In admin folder
netlify deploy --prod
```

### **Vercel**
```bash
# In admin folder
vercel --prod
```

### **Firebase Hosting**
```bash
# In admin folder
firebase init hosting
firebase deploy
```

---

## 🆘 Troubleshooting

### **Can't Login?**
- Use username: `admin` and password: `admin`
- Make sure you type it exactly (lowercase)

### **Packages Not Showing?**
- Check Firestore rules
- Make sure you're logged in
- Check browser console for errors

### **Changes Not Appearing on Main Website?**
- Main website needs to load from Firebase (we'll update this next)
- Refresh main website
- Check if package was saved in Firebase Console

---

## 🎉 Next Steps

After setting up admin panel:
1. ✅ Update main website to load packages from Firebase
2. ✅ Migrate existing 18 packages to Firebase
3. ✅ Test adding/editing packages
4. ✅ Deploy admin panel separately (optional)

---

**Need help? Just ask!** 🚀
