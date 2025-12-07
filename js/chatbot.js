// Cosmos Holiday - AI Chatbot Integration
// This file handles the chatbot widget integration

// Tawk.to Configuration
// Replace YOUR_PROPERTY_ID and YOUR_WIDGET_ID with your actual IDs from Tawk.to dashboard

const CHATBOT_CONFIG = {
  provider: 'tawk.to', // or 'tidio', 'crisp'
  propertyId: 'YOUR_PROPERTY_ID', // Get from Tawk.to dashboard
  widgetId: 'YOUR_WIDGET_ID', // Get from Tawk.to dashboard
  enabled: true,
};

// Initialize Chatbot
function initChatbot() {
  if (!CHATBOT_CONFIG.enabled) {
    console.log('Chatbot is disabled');
    return;
  }

  if (CHATBOT_CONFIG.provider === 'tawk.to') {
    initTawkTo();
  } else if (CHATBOT_CONFIG.provider === 'tidio') {
    initTidio();
  } else if (CHATBOT_CONFIG.provider === 'crisp') {
    initCrisp();
  }
}

// Tawk.to Integration
function initTawkTo() {
  var Tawk_API = Tawk_API || {};
  var Tawk_LoadStart = new Date();

  // Customize widget appearance
  Tawk_API.customStyle = {
    visibility: {
      desktop: {
        position: 'br', // bottom-right
        xOffset: 20,
        yOffset: 20,
      },
      mobile: {
        position: 'br',
        xOffset: 10,
        yOffset: 10,
      },
    },
  };

  // Set visitor information if user is logged in
  Tawk_API.onLoad = function () {
    // Check if user is logged in
    const user = getCurrentUser();
    if (user) {
      Tawk_API.setAttributes(
        {
          name: user.displayName || user.email,
          email: user.email,
          hash: user.uid,
        },
        function (error) {
          if (error) {
            console.error('Tawk.to error:', error);
          }
        }
      );
    }

    // Customize widget color to match brand
    Tawk_API.setAttributes({
      color: '#2563EB', // Cosmos Holiday blue
    });
  };

  // Track chat events
  Tawk_API.onChatStarted = function () {
    console.log('Chat started');
    // You can track this event in analytics
  };

  Tawk_API.onChatEnded = function () {
    console.log('Chat ended');
  };

  // Load Tawk.to script
  (function () {
    var s1 = document.createElement('script'),
      s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = `https://embed.tawk.to/${CHATBOT_CONFIG.propertyId}/${CHATBOT_CONFIG.widgetId}`;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();
}

// Tidio Integration (Alternative)
function initTidio() {
  // Replace with your Tidio public key
  const tidioKey = 'YOUR_TIDIO_KEY';

  (function () {
    var tidioScript = document.createElement('script');
    tidioScript.src = `//code.tidio.co/${tidioKey}.js`;
    tidioScript.async = true;
    document.body.appendChild(tidioScript);
  })();
}

// Crisp Integration (Alternative)
function initCrisp() {
  // Replace with your Crisp website ID
  const crispWebsiteId = 'YOUR_CRISP_WEBSITE_ID';

  window.$crisp = [];
  window.CRISP_WEBSITE_ID = crispWebsiteId;

  (function () {
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://client.crisp.chat/l.js';
    s.async = 1;
    d.getElementsByTagName('head')[0].appendChild(s);
  })();
}

// Helper function to get current user
function getCurrentUser() {
  // This assumes you have Firebase auth initialized
  if (typeof firebase !== 'undefined' && firebase.auth) {
    return firebase.auth().currentUser;
  }
  return null;
}

// Custom chatbot functions
const ChatbotHelper = {
  // Open chat widget
  open: function () {
    if (typeof Tawk_API !== 'undefined') {
      Tawk_API.maximize();
    }
  },

  // Close chat widget
  close: function () {
    if (typeof Tawk_API !== 'undefined') {
      Tawk_API.minimize();
    }
  },

  // Hide chat widget
  hide: function () {
    if (typeof Tawk_API !== 'undefined') {
      Tawk_API.hideWidget();
    }
  },

  // Show chat widget
  show: function () {
    if (typeof Tawk_API !== 'undefined') {
      Tawk_API.showWidget();
    }
  },

  // Send message programmatically
  sendMessage: function (message) {
    if (typeof Tawk_API !== 'undefined') {
      Tawk_API.addEvent('automated-message', {
        message: message,
      });
    }
  },

  // Set custom attributes
  setUserInfo: function (name, email) {
    if (typeof Tawk_API !== 'undefined') {
      Tawk_API.setAttributes(
        {
          name: name,
          email: email,
        },
        function (error) {
          if (error) {
            console.error('Error setting user info:', error);
          }
        }
      );
    }
  },
};

// Auto-initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChatbot);
} else {
  initChatbot();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ChatbotHelper;
}
