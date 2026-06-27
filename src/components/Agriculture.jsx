import React from "react";
import { motion } from "framer-motion";
import { FaSeedling, FaTree, FaTint, FaSun, FaCheckCircle } from "react-icons/fa";
import { agricultureData } from "../data/agriculture";
import SVGPlaceholder from "./SVGPlaceholder";

// Icon mapping helper
const getAgriIcon = (imageName) => {
  switch (imageName) {
    case "farming":
      return <FaSeedling className="w-6 h-6 text-primary-green" />;
    case "fields":
      return <FaTree className="w-6 h-6 text-primary-green" />;
    case "water":
      return <FaTint className="w-6 h-6 text-primary-green" />;
    case "harvest":
      return <FaSun className="w-6 h-6 text-secondary-saffron" />;
    default:
      return <FaSeedling className="w-6 h-6 text-primary-green" />;
  }
};

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

const Agriculture = () => {
  return (
    <section id="agriculture" className="py-20 bg-white overflow-hidden">
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
            Livelihood & Nature
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-serif text-text-dark font-bold relative inline-block"
          >
            Agriculture
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-1 bg-secondary-saffron rounded-full" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Agriculture is the lifeblood of Namma Thathaiyangarpatti. Our fertile fields, 
            natural reservoirs, and hard-working farmers sustain our traditional way of life.
          </motion.p>
        </div>

        {/* 2x2 Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {agricultureData.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              className="bg-bg-warm rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-100 hover:border-primary-green/10 transition-all duration-500 group flex flex-col md:flex-row h-full"
            >
              {/* Image side */}
              <div className="w-full md:w-1/2 h-56 md:h-full relative overflow-hidden shrink-0">
                <SVGPlaceholder
                  type={card.image}
                  title={card.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content side */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-3">
                  {/* Category Header */}
                  <div className="flex items-center space-x-2">
                    <div className="bg-white p-2 rounded-lg shadow-inner">
                      {getAgriIcon(card.image)}
                    </div>
                    <span className="text-xs font-bold tracking-widest text-primary-green uppercase">
                      {card.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-text-dark">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>

                {/* Bullets/Details */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {card.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-1.5 text-xs text-gray-600">
                      <FaCheckCircle className="w-3.5 h-3.5 text-primary-green/80 shrink-0" />
                      <span className="truncate">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Agriculture;
