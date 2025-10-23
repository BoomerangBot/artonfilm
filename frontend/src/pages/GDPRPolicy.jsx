import React from 'react';

const GDPRPolicy = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="film-grain"></div>
      
      <section className="py-24 relative">
        <div className="absolute inset-0 soft-light-center"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 font-serif">GDPR Compliance Statement</h1>
          <p className="text-gray-400 mb-12">Effective Date: 1 January 2025</p>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                ArtOnFilm LTD ("we", "our", "us") is committed to ensuring full compliance with the UK General Data Protection 
                Regulation (UK GDPR) and the EU General Data Protection Regulation (EU GDPR). This statement outlines how we 
                process personal data in accordance with these regulations.
              </p>
              <p>
                <strong>Data Controller:</strong><br/>
                ArtOnFilm LTD<br/>
                12 Acorn Business Park<br/>
                Northarbour Road, Portsmouth<br/>
                England, PO6 3TH<br/>
                Company Number: [TBC]
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. GDPR Principles</h2>
              <p className="mb-4">We process personal data in accordance with the following GDPR principles:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Lawfulness, fairness and transparency</strong> - We process data lawfully, fairly and in a transparent manner</li>
                <li><strong>Purpose limitation</strong> - We collect data for specified, explicit and legitimate purposes only</li>
                <li><strong>Data minimisation</strong> - We only collect data that is adequate, relevant and limited to what is necessary</li>
                <li><strong>Accuracy</strong> - We ensure personal data is accurate and kept up to date</li>
                <li><strong>Storage limitation</strong> - We keep data only for as long as necessary for the purposes</li>
                <li><strong>Integrity and confidentiality</strong> - We process data securely with appropriate technical and 
                organisational measures</li>
                <li><strong>Accountability</strong> - We are responsible for and can demonstrate compliance with these principles</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Lawful Basis for Processing</h2>
              <p className="mb-4">We process personal data under the following lawful bases:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Consent:</strong> You have given clear consent for us to process your personal data</li>
                <li><strong>Contract:</strong> Processing is necessary for a contract we have with you</li>
                <li><strong>Legal obligation:</strong> Processing is necessary to comply with the law</li>
                <li><strong>Legitimate interests:</strong> Processing is necessary for our legitimate interests</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Subject Rights</h2>
              <p className="mb-4">Under GDPR, you have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Right to be informed:</strong> About the collection and use of your personal data</li>
                <li><strong>Right of access:</strong> To request copies of your personal data</li>
                <li><strong>Right to rectification:</strong> To request correction of inaccurate data</li>
                <li><strong>Right to erasure:</strong> To request deletion of your personal data</li>
                <li><strong>Right to restrict processing:</strong> To request limiting the processing of your data</li>
                <li><strong>Right to data portability:</strong> To request transfer of your data</li>
                <li><strong>Right to object:</strong> To object to the processing of your data</li>
                <li><strong>Rights related to automated decision making:</strong> Including profiling</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Protection Officer</h2>
              <p>
                For questions regarding GDPR compliance or to exercise your rights, please contact our Data Protection Officer:
                <br/>
                <a href="mailto:rh@artonfilm.uk" className="text-amber-400 hover:text-amber-300 transition-colors">
                  rh@artonfilm.uk
                </a>
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">International Transfers</h2>
              <p>
                We may transfer your personal data outside the EU. When we do, we ensure appropriate safeguards are in place 
                to protect your data in accordance with GDPR requirements.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
                including for legal, accounting, or reporting requirements.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GDPRPolicy;