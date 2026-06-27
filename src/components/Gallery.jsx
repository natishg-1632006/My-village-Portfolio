import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { galleryImages } from "../data/gallery";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const IMAGES_PER_PAGE = 9;

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const indexOfLastImage = currentPage * IMAGES_PER_PAGE;
  const indexOfFirstImage = indexOfLastImage - IMAGES_PER_PAGE;
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <section id="gallery" className="py-24 bg-bg-warm relative overflow-hidden">
      {/* Subtle floral background shapes */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-secondary-saffron/5 blur-3xl pointer-events-none select-none -z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-primary-green/5 blur-2xl pointer-events-none select-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest text-primary-green uppercase block mb-2"
          >
            Visual Heritage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-serif text-text-dark font-bold relative inline-block"
          >
            Village Gallery
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-1 bg-secondary-saffron rounded-full" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            A visual showcase of Namma Thathaiyangarpatti. Click any photograph to view it in full screen.
          </motion.p>
        </div>

        {/* Masonry Image Grid - Editorial spacing with page change animation */}
        <motion.div 
          key={currentPage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6"
        >
          {currentImages.map((imagePath, index) => (
            <motion.div
              key={imagePath}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="break-inside-avoid mb-6 overflow-hidden rounded-3xl shadow-md hover:shadow-2xl cursor-pointer transition-all duration-500 hover:-translate-y-1 relative group border border-gray-100/50"
              onClick={() => setSelectedImage(imagePath)}
            >
              <img 
                src={imagePath} 
                alt={`Village scene ${indexOfFirstImage + index + 1}`}
                className="w-full h-auto block transform group-hover:scale-[1.06] transition-transform duration-700 ease-out" 
                loading="lazy"
              />
              {/* Subtle vignette/overlay on hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center space-x-2 relative z-10">
            {/* Previous Button */}
            <button
              onClick={() => {
                setCurrentPage(prev => Math.max(prev - 1, 1));
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-1 border cursor-pointer ${
                currentPage === 1
                  ? "border-gray-200 text-gray-400 bg-gray-50/50 cursor-not-allowed opacity-50"
                  : "border-primary-green/20 text-primary-green hover:bg-primary-green hover:text-white bg-white shadow-xs hover:shadow-md"
              }`}
            >
              <span>Prev</span>
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-10 h-10 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer shadow-xs ${
                  currentPage === page
                    ? "bg-primary-green text-white shadow-md shadow-primary-green/20"
                    : "bg-white border border-primary-green/10 text-primary-green hover:bg-primary-green/5 hover:border-primary-green/20"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => {
                setCurrentPage(prev => Math.min(prev + 1, totalPages));
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-1 border cursor-pointer ${
                currentPage === totalPages
                  ? "border-gray-200 text-gray-400 bg-gray-50/50 cursor-not-allowed opacity-50"
                  : "border-primary-green/20 text-primary-green hover:bg-primary-green hover:text-white bg-white shadow-xs hover:shadow-md"
              }`}
            >
              <span>Next</span>
            </button>
          </div>
        )}

        {/* Fullscreen Lightbox Modal - Premium Focus */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              {/* Frosted Glass Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3.5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer focus:outline-none z-10 shadow-lg"
                aria-label="Close lightbox view"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              {/* Lightbox Image Container - Museum Frame */}
              <motion.div
                initial={{ scale: 0.9, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="relative max-w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage} 
                  alt="Lightbox view" 
                  className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg p-2 sm:p-3 bg-white border border-secondary-saffron/40 shadow-2xl" 
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gallery;
