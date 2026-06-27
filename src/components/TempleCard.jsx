import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaPray, FaInfoCircle, FaCalendarAlt } from "react-icons/fa";

const TempleCard = ({ temple }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-[0_20px_40px_rgba(212,175,55,0.08)] border-t-4 border-t-secondary-saffron border border-gray-100/60 hover:border-secondary-saffron/20 transition-all duration-500 flex flex-col h-full group"
      whileHover={{ y: -6 }}
    >
      {/* Temple Image */}
      <div className="relative overflow-hidden h-56 shrink-0 border-b border-gray-100">
        <img
          src={temple.image}
          alt={temple.templeName}
          className="w-full h-full object-cover transform group-hover:scale-[1.07] transition-transform duration-[1000ms] ease-out"
        />
        <div className="absolute top-4 right-4 bg-secondary-saffron/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md z-10">
          {temple.keyDeity.split("/")[0].trim()}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div className="space-y-3">
          <h3 className="text-xl font-serif font-bold text-text-dark group-hover:text-primary-green transition-colors duration-300">
            {temple.templeName}
          </h3>
          
        </div>

        {/* Expandable details button */}
        {/*
        <div className="mt-6 pt-4 border-t border-gray-50 flex flex-col">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center justify-between text-xs font-bold text-primary-green hover:text-secondary-saffron transition-all duration-300 uppercase tracking-wider focus:outline-none cursor-pointer py-2 px-3.5 rounded-lg bg-bg-warm/50 border border-gray-100/50 hover:bg-secondary-saffron/10 hover:border-secondary-saffron/20"
          >
            <span className="flex items-center space-x-1.5">
              <FaInfoCircle className="w-3.5 h-3.5" />
              <span>{showDetails ? "Hide Details" : "View Rituals & Festivals"}</span>
            </span>
            <motion.div
              animate={{ rotate: showDetails ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="w-3.5 h-3.5" />
            </motion.div>
          </button>

      
          <AnimatePresence initial={false}>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-5 space-y-4 text-xs text-gray-600 font-sans">
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="flex items-start space-x-2.5"
                  >
                    <FaPray className="w-4 h-4 text-secondary-saffron shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-text-dark block mb-0.5">Primary Deity</span>
                      <span>{temple.keyDeity}</span>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start space-x-2.5"
                  >
                    <FaInfoCircle className="w-4 h-4 text-primary-green shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-text-dark block mb-0.5">Daily Rituals</span>
                      <span>{temple.rituals}</span>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="flex items-start space-x-2.5"
                  >
                    <FaCalendarAlt className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-text-dark block mb-0.5">Main Festival</span>
                      <span>{temple.festival}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div> */}
      </div>
    </motion.div>
  );
};

export default TempleCard;
