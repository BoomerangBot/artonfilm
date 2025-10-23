import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const subjects = [
    'Founding Patron 2025',
    'Corporate Partnership 2025',
    'Embassy / Institute Support',
    'Press / Media Inquiry',
    'General Inquiry'
  ];

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setFormData(prev => ({ ...prev, subject: subjectParam }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be replaced with actual backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll respond within 48 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Mail size={48} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-gray-400">
            Contact us to discuss partnership opportunities, patron membership, or media inquiries.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-400 mb-2">Email us directly at</p>
          <a
            href="mailto:rh@artonfilm.uk"
            className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors"
          >
            rh@artonfilm.uk
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 pb-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-2xl font-bold mb-8 text-center">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors text-white"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors text-white"
                >
                  <option value="">Select a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors text-white resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;