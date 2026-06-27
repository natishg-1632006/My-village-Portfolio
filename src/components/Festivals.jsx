import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaStar, FaMusic } from "react-icons/fa";
import { festivalsData } from "../data/festivals";
import SVGPlaceholder from "./SVGPlaceholder";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const Festivals = () => {
  return (
    <section id="festivals" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest text-secondary-saffron uppercase block mb-2"
          >
            Cultural Heritage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-serif text-text-dark font-bold relative inline-block"
          >
            Village Festivals
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-1 bg-primary-green rounded-full" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            The seasons of Namma Thathaiyangarpatti are marked by color, music, dance, 
            and community prayers. Our festivals reflect the shared unity of our village.
          </motion.p>
        </div>

        {/* Festivals Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {festivalsData.map((festival) => (
            <motion.div
              key={festival.id}
              variants={itemVariants}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-secondary-saffron/20 transition-all duration-500 flex flex-col group h-full"
            >
              {/* Image Header with Saffron accent bottom border */}
              <div className="h-56 relative overflow-hidden shrink-0 border-b-2 border-secondary-saffron/30">
                <SVGPlaceholder
                  type={festival.image}
                  title={festival.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Date Badge */}
                <div className="absolute top-4 left-4 bg-primary-green/95 backdrop-blur-xs text-white text-xs font-semibold px-4 py-1.5 rounded-full flex items-center space-x-1.5 shadow-md">
                  <FaCalendarAlt className="w-3.5 h-3.5 text-secondary-saffron" />
                  <span>{festival.month}</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-secondary-saffron uppercase tracking-widest block">
                    {festival.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-text-dark group-hover:text-primary-green transition-colors duration-300">
                    {festival.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-sans">
                    {festival.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-gray-50">
                  <h4 className="text-xs font-bold text-text-dark uppercase tracking-wider flex items-center space-x-1.5 mb-2">
                    <FaMusic className="w-3.5 h-3.5 text-primary-green" />
                    <span>Key Festival Highlights</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {festival.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-1.5 text-xs text-gray-600">
                        <FaStar className="w-3 h-3 text-secondary-saffron shrink-0" />
                        <span className="truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Festivals;
