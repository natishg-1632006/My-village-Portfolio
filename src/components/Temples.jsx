import React from "react";
import { motion } from "framer-motion";
import { templesData } from "../data/temples";
import TempleCard from "./TempleCard";

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

const Temples = () => {
  return (
    <section id="temples" className="py-20 bg-white overflow-hidden">
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
            Spiritual Centers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-serif text-text-dark font-bold relative inline-block"
          >
            Our Temples
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-1 bg-primary-green rounded-full" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            The temples of Namma Thathaiyangarpatti are not just places of worship, but the 
            living heart of our cultural heritage. They stand as centers of spirituality, community gathering, and centuries-old rituals.
          </motion.p>
        </div>

        {/* Temple Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {templesData.map((temple) => (
            <motion.div key={temple.id} variants={itemVariants}>
              <TempleCard temple={temple} />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-bg-warm border border-secondary-saffron/20 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto"
        >
          <span className="block text-secondary-saffron text-2xl font-serif mb-2">“ஒன்றே குலம் ஒருவனே தேவன்”</span>
          <p className="text-gray-500 text-xs sm:text-sm font-sans italic">
            "Mankind is one, and God is one." — Our temples foster a sense of unity, peace, and spiritual strength for all families in Namma Thathaiyangarpatti.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Temples;
