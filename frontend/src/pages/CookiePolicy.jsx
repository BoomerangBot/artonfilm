import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="film-grain"></div>
      
      <section className="py-24 relative">
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 font-serif">Cookie Policy</h1>
          <p className="text-gray-400 mb-12">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit our website. They are widely used 
                to make websites work more efficiently and to provide information to website owners.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing cookies:</strong> Track your browsing habits to show relevant advertisements</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Session Cookies</h3>
                  <p>These are temporary cookies that expire when you close your browser.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Persistent Cookies</h3>
                  <p>These remain on your device for a set period or until you delete them.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">First-Party Cookies</h3>
                  <p>Set by our website directly.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Third-Party Cookies</h3>
                  <p>Set by external services we use on our website.</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>View what cookies are stored and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies from specific websites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
              <p className="mt-4">
                Please note that deleting or blocking cookies may impact your experience on our website.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p>
                We may use third-party services that set cookies on your device. These include analytics services, 
                social media platforms, and advertising networks. These third parties have their own privacy policies.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Consent</h2>
              <p>
                By continuing to use our website, you consent to our use of cookies as described in this policy. 
                You can withdraw your consent at any time by adjusting your browser settings.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
                <br/>
                <a href="mailto:rh@artonfilm.uk" className="text-amber-400 hover:text-amber-300 transition-colors">
                  rh@artonfilm.uk
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;