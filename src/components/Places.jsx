import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaBuilding, FaBus, FaWater, FaRunning, FaTint, FaMapPin } from "react-icons/fa";
import { placesData } from "../data/places";
import SVGPlaceholder from "./SVGPlaceholder";

// Icon mapping helper
const getPlaceIcon = (iconName) => {
  switch (iconName) {
    case "FaSchool":
      return <FaSchool className="w-5 h-5 text-primary-green" />;
    case "FaBuilding":
      return <FaBuilding className="w-5 h-5 text-primary-green" />;
    case "FaBus":
      return <FaBus className="w-5 h-5 text-primary-green" />;
    case "FaWater":
      return <FaWater className="w-5 h-5 text-primary-green" />;
    case "FaRunning":
      return <FaRunning className="w-5 h-5 text-primary-green" />;
    case "FaTint":
      return <FaTint className="w-5 h-5 text-primary-green" />;
    default:
      return <FaMapPin className="w-5 h-5 text-primary-green" />;
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const Places = () => {
  return (
    <section id="places" className="py-20 bg-bg-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest text-primary-green uppercase block mb-2"
          >
            Village Landmarks
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-serif text-text-dark font-bold relative inline-block"
          >
            Places in Our Village
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-1 bg-secondary-saffron rounded-full" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Explore the essential educational, administrative, and natural spots 
            that support daily life and community development in Namma Thathaiyangarpatti.
          </motion.p>
        </div>

        {/* Landmarks Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {placesData.map((place) => (
            <motion.div
              key={place.id}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary-green/10 transition-all duration-300 flex flex-col group h-full"
            >
              {/* Image Header with styled category tag overlay */}
              <div className="h-48 relative overflow-hidden shrink-0 border-b border-gray-50">
                <SVGPlaceholder
                  type={place.image}
                  title={place.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[10px] font-bold px-3 py-1 rounded-full text-primary-green uppercase tracking-wider border border-gray-100 shadow-sm">
                  {place.type}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="bg-bg-warm p-2 rounded-lg">
                      {getPlaceIcon(place.icon)}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-text-dark group-hover:text-primary-green transition-colors duration-300">
                      {place.name}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed font-sans pt-2">
                    {place.description}
                  </p>
                </div>

                {/* Subtext info bar */}
                <div className="pt-3 border-t border-gray-50 text-[11px] text-gray-400 font-sans italic">
                  {place.details}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Places;
