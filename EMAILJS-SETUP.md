# EmailJS Setup Guide

## ✅ Configuration Complete

Your EmailJS contact form is now fully configured and ready to use!

## 📋 Your Credentials

- **Service ID:** `service_2w5vla8`
- **Template ID:** `template_zehekwd`
- **Public Key:** `g7xciPnY3vOO067MSzoki`

## 🎯 What's Implemented

### 1. EmailJS SDK Integration
- Added EmailJS CDN script in the `<head>` section
- Initialized with your public key

### 2. Contact Form Handler
- Form submission sends email via EmailJS
- Loading state with "Sending..." animation
- Success message with green checkmark
- Error handling with red error message
- Button disabled during submission
- Form resets after successful submission

### 3. User Experience
- Visual feedback during sending
- Beautiful success/error messages with icons
- Smooth animations and transitions
- Multi-language support ready

## 🧪 Testing Your Contact Form

1. Open `index.html` in your browser
2. Scroll to the Contact section
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. Click "Send Message"
5. You should see "Sending..." then a success message
6. Check your email inbox for the message!

## 📧 Email Template Variables

Your template uses these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content

## 🔧 Customization Options

### Change Receiving Email
1. Go to EmailJS dashboard
2. Navigate to Email Templates
3. Edit `template_zehekwd`
4. Update the "To Email" field

### Modify Email Template
1. Go to Email Templates
2. Edit your template
3. Customize the HTML/text content
4. Save changes

### Add Auto-Reply
1. Create a new template for auto-reply
2. Set "To Email" to `{{from_email}}`
3. Add a second `emailjs.sendForm()` call in the code

## 📊 Usage Limits

**Free Plan:**
- 200 emails per month
- 2 email services
- 3 email templates

**Upgrade if needed:**
- Visit EmailJS dashboard → Pricing

## 🛠️ Troubleshooting

### Emails Not Sending?
1. Check browser console for errors
2. Verify credentials are correct
3. Check EmailJS dashboard for quota limits
4. Ensure email service is connected

### Emails Going to Spam?
1. Add your domain to EmailJS
2. Use a professional email service
3. Ask recipients to whitelist your email

### Form Not Resetting?
- Check browser console for JavaScript errors
- Ensure form fields have correct `name` attributes

## 🔐 Security Notes

- Public key is safe to expose in frontend code
- Never share your private API key
- EmailJS handles rate limiting automatically
- Consider adding reCAPTCHA for production

## 📱 Mobile Responsive

The contact form is fully responsive and works on:
- Desktop browsers
- Tablets
- Mobile phones

## 🌐 Multi-Language Support

The form integrates with your i18n system:
- Success/error messages translate automatically
- Form labels use translation keys
- Works with English/Bengali toggle

## ✨ Next Steps

Your contact form is ready to use! Consider:
1. Test thoroughly before going live
2. Monitor your EmailJS dashboard for usage
3. Set up email notifications
4. Add reCAPTCHA if you get spam
5. Upgrade plan if you exceed 200 emails/month

---

**Need Help?**
- EmailJS Docs: https://www.emailjs.com/docs/
- Support: support@emailjs.com
