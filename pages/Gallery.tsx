import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../constants';
import { X, ExternalLink, ZoomIn } from 'lucide-react';

const GalleryPage = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'branding'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'branding', label: 'Branding' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Project Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-xl font-medium"
          >
            Explore the digital solutions we've crafted.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === cat.id 
                  ? 'bg-gradient-to-r from-[#0A5AEB] to-[#031E4E] text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer border border-slate-100"
                onClick={() => setSelectedImage(item.imageUrl)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#031E4E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-md border border-white/30 text-white">
                       <ZoomIn size={32} />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-[#0A5AEB] uppercase tracking-wider bg-blue-50 px-3 py-1.5 rounded-lg mb-4 inline-block">
                    {item.category === 'web' ? 'Web Design' : item.category === 'mobile' ? 'Mobile App' : 'Branding'}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0A5AEB] transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage} 
            alt="Preview" 
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;