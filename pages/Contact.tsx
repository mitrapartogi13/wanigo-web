import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    // Simulate submission
    setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert("Message sent successfully!");
        setStatus('idle');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-blue-50 py-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-xl font-medium max-w-2xl mx-auto"
          >
            Have an innovative idea or a question? We are ready to listen and collaborate.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-20 mb-24 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden grid lg:grid-cols-2 border border-slate-100"
        >
          
          {/* Form Section */}
          <div className="p-10 md:p-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-blue-100 focus:border-[#0A5AEB] outline-none transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-blue-100 focus:border-[#0A5AEB] outline-none transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange} 
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-blue-100 focus:border-[#0A5AEB] outline-none transition-all font-medium"
                  placeholder="Partnership Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-blue-100 focus:border-[#0A5AEB] outline-none transition-all font-medium resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#0A5AEB] text-white font-bold py-4 rounded-xl hover:bg-[#031E4E] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:scale-[1.01]"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="bg-slate-900 p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A5AEB] rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                Visit our HQ or reach out via our official channels for a greener future collaboration.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-3.5 rounded-2xl text-[#0A5AEB] backdrop-blur-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Office</h5>
                    <p className="text-slate-400 font-medium leading-relaxed">Jl. Teknik Kimia, Keputih,<br/>Kec. Sukolilo, Surabaya,<br/>Jawa Timur 60111</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-3.5 rounded-2xl text-[#0A5AEB] backdrop-blur-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Email</h5>
                    <p className="text-slate-400 font-medium">wanigosurabaya@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-3.5 rounded-2xl text-[#0A5AEB] backdrop-blur-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Phone</h5>
                    <p className="text-slate-400 font-medium">+62 811-4000-660</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-56 w-full bg-slate-800 rounded-2xl overflow-hidden relative group cursor-pointer border border-slate-700 hover:border-[#0A5AEB] transition-colors">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-bold border border-white/20 flex items-center gap-2 group-hover:bg-white group-hover:text-[#0A5AEB] transition-all">
                  Open Google Maps <ArrowRight size={14} />
                </span>
              </div>
              <img 
                src="https://picsum.photos/600/300?grayscale&blur=2" 
                alt="Map Preview" 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;