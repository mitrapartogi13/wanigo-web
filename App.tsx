import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Mail, MapPin, Phone, Recycle, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from './constants';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import MembersPage from './pages/Members';
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';

// ScrollToTop Helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout Components
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Bold White on Gradient Badge */}
          <Link to="/" className="group relative z-50">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#0A5AEB] to-[#031E4E] text-white px-6 py-2.5 rounded-2xl shadow-lg shadow-brand-light/30 transform group-hover:scale-[1.02] transition-all duration-300">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Recycle className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tight">WANIGO!</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 p-1 bg-white/60 backdrop-blur-md rounded-full border border-white/50 shadow-sm">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#0A5AEB] to-[#031E4E] text-white shadow-md' 
                      : 'text-slate-500 hover:text-brand-light hover:bg-white/80'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Link to="/contact" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-brand-light transition-colors group">
              <span>Get in Touch</span>
              <div className="bg-primary-50 p-1.5 rounded-full group-hover:bg-brand-light group-hover:text-white transition-colors">
                <ChevronRight size={14} />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600 hover:text-brand-light bg-white/50 rounded-xl backdrop-blur-sm" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-bold py-3 px-4 rounded-xl transition-colors flex justify-between items-center ${
                  location.pathname === link.path 
                    ? 'bg-gradient-to-r from-[#0A5AEB] to-[#031E4E] text-white' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {link.name}
                {location.pathname === link.path && <ChevronRight size={16} />}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800 text-slate-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-br from-[#0A5AEB] to-[#031E4E] p-2 rounded-xl">
                 <Recycle className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">WANIGO!</span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md">
              Pioneering the future of waste management with Artificial Intelligence. 
              We turn environmental challenges into sustainable economic opportunities.
            </p>
            <div className="flex space-x-3">
              <a href="https://instagram.com/wanigo.sby" target="_blank" rel="noreferrer" className="bg-slate-800 p-3 rounded-full text-slate-400 shadow-sm hover:bg-[#0A5AEB] hover:text-white transition-all hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-slate-800 p-3 rounded-full text-slate-400 shadow-sm hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-[#0A5AEB] transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-[#0A5AEB] transition-colors text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Email</p>
                  <span className="text-slate-300 font-medium group-hover:text-white transition-colors">wanigosurabaya@gmail.com</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-[#0A5AEB] transition-colors text-white">
                   <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Phone</p>
                  <span className="text-slate-300 font-medium group-hover:text-white transition-colors">+62 811-4000-660</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-[#0A5AEB] transition-colors text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                 <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Office</p>
                  <span className="text-slate-300 font-medium text-sm leading-snug group-hover:text-white transition-colors">Jl. Teknik Kimia, Keputih, Kec. Sukolilo, Surabaya, Jawa Timur 60111</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">© 2025 WANIGO! Corporation. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-white selection:bg-[#0A5AEB] selection:text-white">
        <Header />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;