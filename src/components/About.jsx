import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaUsers, FaHeart, FaPrayingHands } from "react-icons/fa";

const keypoints = [
  {
    id: 1,
    icon: <FaLeaf className="w-5 h-5 text-primary-green" />,
    title: "Agriculture",
    description: "Fields of sugarcane, coconut palms, and organic paddy form the agricultural heart of our community."
  },
  {
    id: 2,
    icon: <FaPrayingHands className="w-5 h-5 text-secondary-saffron" />,
    title: "Sacred Temples",
    description: "Centuries-old festivals and daily temple pujas sustain our deep spiritual connection and heritage."
  },
  {
    id: 3,
    icon: <FaUsers className="w-5 h-5 text-primary-green" />,
    title: "Rich Heritage",
    description: "A close-knit community bound by hospitality, mutual support, and joint festive celebrations."
  },
  {
    id: 4,
    icon: <FaHeart className="w-5 h-5 text-accent-red" />,
    title: "Peaceful Environment",
    description: "A calm, slow-paced village life shielded from city bustle, in tune with seasonal monsoons."
  }
];

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-28 lg:py-32 bg-gradient-to-br from-[#FAF7F0] via-[#FAF8F5] to-[#F3EDE2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Two-Column Grid container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Column (45%): Large prominent image card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 w-full flex flex-col relative group"
          >
            <div className="w-full h-[320px] sm:h-[400px] lg:h-[450px] overflow-hidden rounded-3xl shadow-xl border border-gray-100/50 bg-white p-1">
              <img
                src="/G18.jpeg"
                alt="Serene Oor Kulam (Village Lake)"
                className="w-full h-full object-cover rounded-[20px] transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[20px] m-1" />
            </div>
          </motion.div>

          {/* Right Column (55%): Vertically Centered Content Area */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-6 lg:space-y-8"
          >
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-secondary-saffron uppercase block">
                ABOUT OUR VILLAGE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-green leading-tight">
                Namma Thathaiyangarpatti
              </h2>
            </div>

            {/* Paragraph Descriptions */}
            <div className="text-gray-600 leading-relaxed sm:leading-loose text-sm sm:text-base font-sans space-y-4">
              <p>
                Nestled amidst beautiful green surroundings, Namma Thathaiyangarpatti is a peaceful village in Tamil Nadu that serves as a testament to traditional rural life. Our community is defined by its deep spiritual devotion, centuries-old heritage, cooperative agricultural practices, and friendly people who live in absolute harmony with nature.
              </p>
              <p>
                For generations, our families have tilled these soils, celebrating the cycles of monsoon and harvest with deep gratitude. From the early morning chanting in the temples to the cool evening breeze blowing across the village lake, every moment here connects you to the soulful heritage of Tamil culture.
              </p>
            </div>

            {/* Keypoints Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100/80">
              {keypoints.map((point) => (
                <div
                  key={point.id}
                  className="flex space-x-3.5 items-start p-2 rounded-2xl hover:bg-white/50 border border-transparent hover:border-gray-100 transition-all duration-300 group"
                >
                  <div className="bg-bg-warm p-2.5 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-xs text-primary-green">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark text-xs sm:text-sm font-sans">
                      {point.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 bg-white/70 backdrop-blur-xs border border-gray-100/60 py-4 px-3 rounded-2xl text-center gap-1.5 max-w-lg shadow-xs">
              <div>
                <span className="block text-base sm:text-lg font-serif font-bold text-primary-green">5+</span>
                <span className="text-[8px] sm:text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Temples</span>
              </div>
              <div className="border-x border-gray-200/50">
                <span className="block text-base sm:text-lg font-serif font-bold text-secondary-saffron">300+</span>
                <span className="text-[8px] sm:text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Acres Fields</span>
              </div>
              <div>
                <span className="block text-base sm:text-lg font-serif font-bold text-accent-red">100%</span>
                <span className="text-[8px] sm:text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Peaceful</span>
              </div>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
