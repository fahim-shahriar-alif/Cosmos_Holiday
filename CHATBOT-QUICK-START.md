# 🤖 AI Chatbot - Quick Start (5 Minutes)

## ⚡ Fastest Way to Add Chatbot

### Step 1: Choose Your Chatbot (2 minutes)

**Recommended: Tawk.to** (100% Free Forever)
- Go to: https://www.tawk.to
- Click "Sign Up Free"
- Enter email and create password
- Verify email

### Step 2: Get Your Code (1 minute)

1. After login, click "Add Property"
2. Name: `Cosmos Holiday`
3. Website: `https://cosmosholiday.com`
4. Click "Create"
5. Go to: Administration → Channels → Chat Widget
6. Copy the widget code

### Step 3: Add to Your Website (2 minutes)

**Option A: Manual (Recommended)**

1. Open each HTML file (index.html, gallery.html, booking.html, etc.)
2. Find the closing `</body>` tag
3. Paste the Tawk.to code just before `</body>`
4. Save all files

**Example:**
```html
  <!-- Your existing content -->
  
  <!-- Tawk.to Chatbot -->
  <script type="text/javascript">
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
  </script>
  
</body>
</html>
```

**Option B: Use Snippet File**

Copy the code from `chatbot-snippet.html` and paste before `</body>` in all pages.

### Step 4: Test (30 seconds)

1. Open your website
2. Look for chat widget in bottom-right corner
3. Click and send a test message
4. Check Tawk.to dashboard for the message

---

## 🎨 Quick Customization

### Match Your Brand Colors

1. In Tawk.to dashboard: Administration → Chat Widget → Widget Appearance
2. Set these values:
   - **Primary Color**: `#2563EB` (your blue)
   - **Widget Position**: Bottom right
   - **Bubble Text**: "Need help? 💬"
   - **Offline Message**: "We're offline. Leave a message!"

### Add Welcome Message

1. Go to: Administration → Chat Widget → Triggers
2. Click "Add Trigger"
3. Settings:
   - **Name**: Welcome Message
   - **Condition**: Time on page > 5 seconds
   - **Message**: 
   ```
   Hi! 👋 Welcome to Cosmos Holiday!
   
   Looking for student travel packages? I'm here to help!
   
   🎒 Browse Packages
   📅 Check Availability
   💰 Pricing Info
   📞 Contact Us
   ```

---

## 📱 Mobile App (Optional)

Download Tawk.to app to respond on mobile:
- **iOS**: https://apps.apple.com/app/tawk-to/id1037653422
- **Android**: https://play.google.com/store/apps/details?id=to.tawk.app

---

## 💬 Sample Responses

Copy these to your Tawk.to shortcuts:

### /packages
```
We offer amazing travel packages! 🌟

📍 Domestic:
• Cox's Bazar Beach Tour
• Sylhet Tea Garden
• Sundarbans Adventure
• Rangamati Hills

✈️ International:
• Thailand Tour
• Malaysia Tour
• Nepal Tour

Which interests you?
```

### /booking
```
Booking is easy! 📝

1. Browse packages
2. Click "Book Now"
3. Fill details
4. Submit
5. Get confirmation in 24hrs

Need help?
```

### /payment
```
Payment Methods: 💳

✅ bKash
✅ Nagad
✅ Rocket
✅ Bank Transfer

Instructions sent after booking confirmation.
```

### /contact
```
📞 Contact Us:

📧 support@cosmosholiday.com
📱 +880 1234-567890
🏢 House #123, Road #4, Dhanmondi, Dhaka

⏰ Sat-Thu: 9 AM - 6 PM
```

---

## ✅ Files to Update

Add chatbot code to these files:
- [ ] index.html
- [ ] gallery.html
- [ ] booking.html
- [ ] profile.html
- [ ] auth.html
- [ ] package-details.html
- [ ] admin/index.html (optional)

---

## 🎯 That's It!

Your AI chatbot is now live! 🎉

**What you get:**
- ✅ 24/7 customer support
- ✅ Instant responses
- ✅ Increased bookings
- ✅ Better customer satisfaction
- ✅ Mobile app for responses
- ✅ 100% FREE!

---

## 🆘 Need Help?

See detailed guide: `CHATBOT-SETUP.md`

Or contact:
- Tawk.to Support: https://help.tawk.to
- Email: support@tawk.to
