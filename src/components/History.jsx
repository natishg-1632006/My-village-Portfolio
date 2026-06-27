import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaSeedling, FaSchool, FaBus, FaGlobe, FaPrayingHands } from "react-icons/fa";
import { historyData } from "../data/history";

// Icon mapping helper
const getHistoryIcon = (iconName) => {
  switch (iconName) {
    case "village":
      return <FaHome className="w-5 h-5 text-primary-green" />;
    case "farm":
      return <FaSeedling className="w-5 h-5 text-primary-green" />;
    case "temple":
      return <FaPrayingHands className="w-5 h-5 text-secondary-saffron" />;
    case "school":
      return <FaSchool className="w-5 h-5 text-primary-green" />;
    case "road":
      return <FaBus className="w-5 h-5 text-primary-green" />;
    case "globe":
      return <FaGlobe className="w-5 h-5 text-secondary-saffron" />;
    default:
      return <FaHome className="w-5 h-5 text-primary-green" />;
  }
};

const History = () => {
  return (
    <section id="history" className="py-20 bg-bg-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest text-primary-green uppercase block mb-2"
          >
            Our Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-serif text-text-dark font-bold relative inline-block"
          >
            Our Village History
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-1 bg-secondary-saffron rounded-full" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            A look back at the milestone years that shaped the structure, agriculture, 
            spirituality, and modern growth of Namma Thathaiyangarpatti.
          </motion.p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-2 bottom-2 w-1 bg-gradient-to-b from-primary-green via-secondary-saffron to-primary-green opacity-30 rounded-full" />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {historyData.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left / Right spacer (Desktop only) */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Icon Node Pin */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
                      className="bg-white p-3 rounded-full shadow-md border-2 border-secondary-saffron hover:border-primary-green transition-colors duration-300"
                    >
                      {getHistoryIcon(milestone.icon)}
                    </motion.div>
                  </div>

                  {/* Content Box */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className={`pl-16 pr-4 md:px-12 w-full md:w-1/2`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative">
                      {/* Decorative small pointer arrow */}
                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-t border-l border-gray-100 transform rotate-45 ${
                          isEven
                            ? "left-[-8px] border-r-0 border-b-0 rotate-[-135deg]"
                            : "right-[-8px] rotate-[45deg]"
                        }`}
                      />

                      {/* Year Indicator */}
                      <span className="inline-block bg-primary-green/10 text-primary-green text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                        {milestone.year}
                      </span>

                      {/* Milestone Title */}
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-text-dark">
                        {milestone.title}
                      </h3>

                      {/* Milestone Description */}
                      <p className="text-gray-500 text-sm mt-3 leading-relaxed font-sans">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default History;
