import React from "react";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

const leaves = [
  { id: 1, top: "10%", left: "12%", size: 24, delay: 0, duration: 9, x: [0, 20, 0], y: [0, 40, 0] },
  { id: 2, top: "25%", left: "82%", size: 30, delay: 1, duration: 11, x: [0, -25, 0], y: [0, 45, 0] },
  { id: 3, top: "68%", left: "15%", size: 28, delay: 1.5, duration: 10, x: [0, 25, 0], y: [0, -35, 0] },
  { id: 4, top: "80%", left: "76%", size: 22, delay: 0.5, duration: 8, x: [0, -18, 0], y: [0, -30, 0] },
];

const Loader = () => {
  // Animation Variants
  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    animate: {
      y: [-6, 6, -6],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut"
      }
    },
    exit: {
      scale: 1.08,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const leafProgressVariants = {
    initial: { left: "0%" },
    animate: {
      left: "100%",
      transition: {
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#FAF7F0] via-[#FAF8F5] to-[#E2ECE4] overflow-hidden"
    >
      {/* Drifting Background Leaf Particles */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-primary-green/5 pointer-events-none select-none"
          style={{ top: leaf.top, left: leaf.left }}
          animate={{
            x: leaf.x,
            y: leaf.y,
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaLeaf style={{ width: leaf.size, height: leaf.size }} />
        </motion.div>
      ))}

      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.3] pointer-events-none select-none"
        style={{
          backgroundImage: "radial-gradient(#1C3F24 0.75px, transparent 0.75px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="flex flex-col items-center max-w-md px-6 text-center space-y-6 z-10">
        
        {/* Floating circular Logo container */}
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-24 h-24 sm:w-28 sm:h-28 bg-white p-4 rounded-full border border-gray-100/50 shadow-xl flex items-center justify-center mb-2"
        >
          <img src="/logo.png" alt="Village Logo" className="w-full h-full object-contain" />
        </motion.div>

        {/* Text Area */}
        <div className="space-y-2.5">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl sm:text-3xl font-serif font-bold text-primary-green tracking-wide"
          >
            Namma Thathaiyangarpatti
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xs sm:text-sm text-gray-500 font-sans italic tracking-widest max-w-[280px] sm:max-w-[320px] leading-relaxed"
          >
            "Preserving Our Heritage, Celebrating Our Culture."
          </motion.p>
        </div>

        {/* Breeze Line Leaf Progress Indicator */}
        <div className="w-48 sm:w-56 h-[1px] bg-gray-300/40 relative mt-6 overflow-visible">
          <motion.div
            variants={leafProgressVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-primary-green flex items-center justify-center"
          >
            <FaLeaf className="w-3.5 h-3.5 transform -rotate-45" />
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default Loader;
