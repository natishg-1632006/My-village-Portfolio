import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaArrowRight, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const handleScrollToNext = () => {
    const element = document.getElementById("about");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToGallery = (e) => {
    e.preventDefault();
    const element = document.getElementById("gallery");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.610, 0.355, 1] } 
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#1B3B2B]"
    >
      {/* 
        PREMIUM ILLUSTRATED LANDSCAPE BACKGROUND
        Beautiful vector elements of a peaceful Tamil village landscape (rolling green hills, coconut palms, temple silhouette, and sun)
      */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Sky Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A1E] via-[#2D5A27] to-[#1E3A1E]" />

        {/* Sunrise/Saffron Glow Aura */}
        <motion.div 
          animate={{  
            scale: [1, 1.05, 1],
            opacity: [0.7, 0.85, 0.7],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[80%] bg-radial from-[#FF9933]/25 to-transparent rounded-t-[100%] blur-3xl" 
        />

        {/* Custom SVG Village Landscape Art */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[60%] opacity-25"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Back Hills */}
          <path
            d="M0,450 Q250,300 600,420 T1440,400 L1440,600 L0,600 Z"
            fill="#14331C"
          />
          {/* Mid Hills */}
          <path
            d="M0,500 Q400,380 900,480 T1440,490 L1440,600 L0,600 Z"
            fill="#0E2815"
          />

          {/* Temple Tower (Gopuram) Silhouette on a hill */}
          <g transform="translate(680, 290) scale(0.9)">
            <path
              d="M40,150 L45,60 C45,55 55,55 55,60 L60,150 Z"
              fill="#FF9933"
              opacity="0.5"
            />
            {/* Gopuram levels */}
            <path d="M25,150 L35,80 L65,80 L75,150 Z" fill="#0A1F10" />
            <path d="M30,120 L37,80 L63,80 L70,120 Z" fill="#0A1F10" stroke="rgba(255,255,255,0.05)" />
            <path d="M33,95 L39,80 L61,80 L67,95 Z" fill="#0A1F10" stroke="rgba(255,255,255,0.05)" />
            <circle cx="50" cy="72" r="5" fill="#FF9933" />
          </g>

          {/* Palm Trees Left */}
          <g transform="translate(100, 320) scale(1.2)">
            <path d="M30,200 Q20,130 10,80" fill="none" stroke="#0A1F10" strokeWidth="6" />
            {/* Leaves */}
            <path d="M10,80 Q-20,70 -30,80" fill="none" stroke="#123B1E" strokeWidth="4" />
            <path d="M10,80 Q-15,55 -20,50" fill="none" stroke="#123B1E" strokeWidth="4" />
            <path d="M10,80 Q10,40 15,35" fill="none" stroke="#123B1E" strokeWidth="4" />
            <path d="M10,80 Q35,60 40,65" fill="none" stroke="#123B1E" strokeWidth="4" />
            <path d="M10,80 Q40,90 45,95" fill="none" stroke="#123B1E" strokeWidth="4" />
          </g>
          <g transform="translate(180, 360) scale(1.0)">
            <path d="M30,200 Q25,140 20,90" fill="none" stroke="#0A1F10" strokeWidth="5" />
            <path d="M20,90 Q-10,85 -20,95" fill="none" stroke="#123B1E" strokeWidth="3" />
            <path d="M20,90 Q5,65 0,60" fill="none" stroke="#123B1E" strokeWidth="3" />
            <path d="M20,90 Q20,50 25,45" fill="none" stroke="#123B1E" strokeWidth="3" />
            <path d="M20,90 Q45,70 50,75" fill="none" stroke="#123B1E" strokeWidth="3" />
          </g>

          {/* Palm Trees Right */}
          <g transform="translate(1250, 340) scale(1.3)">
            <path d="M10,200 Q15,130 25,80" fill="none" stroke="#0A1F10" strokeWidth="6" />
            <path d="M25,80 Q-5,85 -10,95" fill="none" stroke="#123B1E" strokeWidth="4" />
            <path d="M25,80 Q10,55 5,50" fill="none" stroke="#123B1E" strokeWidth="4" />
            <path d="M25,80 Q25,40 30,35" fill="none" stroke="#123B1E" strokeWidth="4" />
            <path d="M25,80 Q50,60 55,65" fill="none" stroke="#123B1E" strokeWidth="4" />
          </g>
        </svg>

        {/* Readability Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Floating Decorative Leaf/Particle Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-10 opacity-30">
          <motion.div
            animate={{
              y: [0, -35, 0],
              x: [0, 15, 0],
              rotate: [0, 15, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-[15%] text-secondary-saffron"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L7.91,16.5C12.3,15.17 16.3,11.67 17,8M4.26,3C4.26,3 5.1,6.5 8,8.5C11.5,11 16.5,8 20.25,5C16.5,5 11,3 8,6C5.5,8.5 5.5,3 4.26,3Z" />
            </svg>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -45, 0],
              x: [0, -20, 0],
              rotate: [0, -25, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute top-1/3 right-[12%] text-primary-green"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L7.91,16.5C12.3,15.17 16.3,11.67 17,8M4.26,3C4.26,3 5.1,6.5 8,8.5C11.5,11 16.5,8 20.25,5C16.5,5 11,3 8,6C5.5,8.5 5.5,3 4.26,3Z" />
            </svg>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute bottom-1/4 left-[30%] w-2 h-2 rounded-full bg-secondary-saffron/40"
          />

          <motion.div
            animate={{
              y: [0, -35, 0],
              x: [0, -15, 0]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute bottom-1/3 right-[35%] w-1.5 h-1.5 rounded-full bg-[#FFC837]/40"
          />
        </div>
      </div>

      {/* Hero Content Panel */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Decorative Top Accent */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center space-x-2 bg-secondary-saffron/10 border border-secondary-saffron/30 px-4 py-1.5 rounded-full text-secondary-saffron text-xs font-semibold uppercase tracking-wider"
        >
          <span>Spirituality</span>
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-saffron" />
          <span>Heritage</span>
          <span className="w-1.5 h-1.5 rounded-full bg-secondary-saffron" />
          <span>Nature</span>
        </motion.div>

        {/* Primary Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-serif text-white font-bold leading-tight"
        >
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-saffron via-[#FFC837] to-white drop-shadow-lg">
            Namma Thathaiyangarpatti
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 font-normal max-w-3xl leading-relaxed font-sans"
        >
          A peaceful Tamil village rich in long-standing traditions, spiritual devotion, 
          heritage, agriculture, and natural beauty. Preserve our culture, celebrate our fields.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScrollToNext()}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-green via-[#234e2c] to-[#14301a] hover:from-secondary-saffron hover:to-secondary-saffron/90 hover:text-primary-green border border-primary-green/10 hover:border-secondary-saffron text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-secondary-saffron/20 transition-all duration-500 transform hover:-translate-y-1 ease-out cursor-pointer"
          >
            <span>Explore Village</span>
            <FaArrowRight className="w-4 h-4" />
          </button>
          
          <a
            href="#gallery"
            onClick={handleScrollToGallery}
            className="w-full sm:w-auto flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-secondary-saffron backdrop-blur-md px-8 py-3.5 rounded-full font-semibold hover:text-secondary-saffron transition-all duration-500 transform hover:-translate-y-1 ease-out cursor-pointer shadow-md hover:shadow-lg"
          >
            View Gallery
          </a>
        </motion.div>

        {/* Instagram Link */}
        <motion.div variants={itemVariants} className="mt-8 z-10">
          <a
            href="https://www.instagram.com/namma_thathaiyangarpatti/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white/70 hover:text-secondary-saffron transition-all duration-300 text-sm font-sans transform hover:scale-[1.02] group"
          >
            <FaInstagram className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12 text-secondary-saffron" />
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-secondary-saffron after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left pb-0.5">
              @namma_thathaiyangarpatti
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Premium Scroll Down Indicator */}
      <div 
        onClick={handleScrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
      >
        <motion.span 
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[10px] text-white/50 tracking-[0.2em] uppercase font-bold mb-3"
        >
          Scroll Down
        </motion.span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1.5 backdrop-blur-xs">
          <motion.div 
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-secondary-saffron rounded-full"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
