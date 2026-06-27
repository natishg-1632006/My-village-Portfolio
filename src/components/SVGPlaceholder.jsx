import React from "react";

/**
 * SVGPlaceholder Component
 * Renders high-quality, custom-themed SVG illustrations to act as visual placeholders.
 * 
 * TO REPLACE WITH A REAL IMAGE LATER:
 * Simply replace the usage of <SVGPlaceholder ... /> in the parent component with a standard <img> tag, e.g.:
 * <img 
 *   src="/assets/images/temples/vinayagar.jpg" 
 *   alt="Sri Vinayagar Temple" 
 *   className="w-full h-full object-cover rounded-xl"
 * />
 */
const SVGPlaceholder = ({ type, title = "Village View", className = "w-full h-48" }) => {
  // Define themes with gradients and vector elements
  const getTheme = () => {
    switch (type) {
      // Temples
      case "vinayagar":
        return {
          gradient: ["#FF7B00", "#FF4500", "#C62828"], // Saffron to Deep Red
          icon: (
            <path
              d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 7.8 8.1 9 9 9.8V12C9 13.7 10.3 15 12 15C13.7 15 15 13.7 15 12V9.8C15.9 9 16.5 7.8 16.5 6.5C16.5 4 14.5 2 12 2ZM12 13.5C11.2 13.5 10.5 12.8 10.5 12V10.5H13.5V12C13.5 12.8 12.8 13.5 12 13.5ZM13.5 9H10.5C9.7 9 9 8.3 9 7.5C9 6.7 9.7 6 10.5 6C10.7 6 10.9 6.1 11.1 6.2C11.5 5.5 12.2 5 13 5C14.1 5 15 5.9 15 7C15 8.1 14.1 9 13.5 9Z"
              fill="currentColor"
            />
          ),
          art: (
            <>
              {/* Elephant outline / Vinayagar shape silhouette */}
              <circle cx="120" cy="90" r="45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
              <path d="M120 45 C140 45, 155 60, 155 80 C155 105, 120 120, 120 135" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="6" strokeLinecap="round" />
              <circle cx="110" cy="75" r="4" fill="white" />
              <circle cx="130" cy="75" r="4" fill="white" />
              <path d="M120 70 L120 90" stroke="#FFD700" strokeWidth="4" /> {/* Tilak */}
              {/* Lotus flower at base */}
              <path d="M90 135 C100 125, 115 125, 120 135 C125 125, 140 125, 150 135 C135 145, 105 145, 90 135 Z" fill="rgba(255, 105, 180, 0.6)" />
            </>
          ),
          label: "Vinayagar Temple"
        };
      case "mariamman":
        return {
          gradient: ["#FF512F", "#DD2476", "#9B00E8"], // Deep pink/purple sacred aura
          icon: (
            <path
              d="M12 2L4 9V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V9L12 2ZM12 5.5L18 10.7V20H6V10.7L12 5.5ZM12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9Z"
              fill="currentColor"
            />
          ),
          art: (
            <>
              {/* Sacred Gopuram / Temple Tower Silhouette */}
              <path d="M95 140 L105 70 L135 70 L145 140 Z" fill="rgba(0,0,0,0.25)" />
              <path d="M100 140 L107 85 L133 85 L140 140 Z" fill="rgba(255,255,255,0.15)" />
              {/* Kalasams on top */}
              <circle cx="120" cy="62" r="6" fill="#FFD700" />
              <circle cx="110" cy="65" r="4" fill="#FFD700" />
              <circle cx="130" cy="65" r="4" fill="#FFD700" />
              {/* Trident (Trishul) silhouette */}
              <path d="M120 140 L120 85 M114 90 C114 100, 126 100, 126 90 M114 93 L126 93" stroke="#FFD700" strokeWidth="2" fill="none" />
            </>
          ),
          label: "Mariamman Temple"
        };
      case "kalliamman":
        return {
          gradient: ["#800808", "#C62828", "#E53935"], // Fierce Crimson Red
          icon: <path d="M12 2L2 22H22L12 2ZM12 6L19.5 19H4.5L12 6ZM12 10V14M12 16H12.01" fill="currentColor" strokeWidth="2" />,
          art: (
            <>
              {/* Trishula / Trident & Aura */}
              <circle cx="120" cy="90" r="40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8" />
              <path d="M120 50 L120 130" stroke="white" strokeWidth="4" />
              <path d="M105 65 C105 85, 135 85, 135 65" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M110 50 L130 50" stroke="#FF9933" strokeWidth="2" />
              <circle cx="120" cy="45" r="5" fill="#FF9933" />
            </>
          ),
          label: "Om Kalli Amman Temple"
        };
      case "perumal":
        return {
          gradient: ["#0F2027", "#203A43", "#2C5364"], // Divine Peacock Blue
          icon: <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor" />,
          art: (
            <>
              {/* Shanka (Conch) & Chakra (Wheel) silhouettes */}
              <circle cx="95" cy="85" r="22" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
              <path d="M95 63 L95 107 M73 85 L117 85 M79 70 L111 100 M79 100 L111 70" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              <path d="M130 90 C130 75, 150 75, 150 90 C150 100, 135 105, 140 112 C145 110, 155 95, 150 85" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
              {/* Namam (Vaishnavite Tilak) in middle */}
              <path d="M115 70 L120 90 L125 70 L122 70 L120 78 L118 70 Z" fill="white" />
              <path d="M120 70 L120 85" stroke="#C62828" strokeWidth="2" />
            </>
          ),
          label: "Srinivasa Perumal Temple"
        };
      case "selliamman":
        return {
          gradient: ["#FF8008", "#FFC837", "#2E7D32"], // Warm Amber to Forest Green
          icon: <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 18.5C8.41 18.5 5.5 15.59 5.5 12C5.5 8.41 8.41 5.5 12 5.5C15.59 5.5 18.5 8.41 18.5 12C18.5 15.59 15.59 18.5 12 18.5Z" fill="currentColor" />,
          art: (
            <>
              {/* Border Guardian / Neem Leaf silhouettes */}
              <path d="M70 120 C80 90, 100 95, 110 120 Z" fill="rgba(255,255,255,0.15)" />
              <path d="M130 120 C140 90, 160 95, 170 120 Z" fill="rgba(255,255,255,0.15)" />
              {/* Sacred Tree / Pot with leaves */}
              <path d="M105 130 C105 110, 135 110, 135 130 Z" fill="none" stroke="white" strokeWidth="3" />
              <circle cx="120" cy="100" r="10" fill="rgba(255,255,255,0.3)" />
              <path d="M120 110 L120 90" stroke="white" strokeWidth="2" />
            </>
          ),
          label: "Selliamman Temple"
        };

      // Agriculture
      case "farming":
        return {
          gradient: ["#11998e", "#38ef7d"], // Bright Green
          art: (
            <>
              {/* Glowing sun and plow/sprouts */}
              <circle cx="190" cy="50" r="20" fill="rgba(255,255,255,0.3)" />
              <circle cx="190" cy="50" r="12" fill="#FFEB3B" />
              <path d="M40 140 Q 90 120, 140 140 T 240 140" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="6" />
              <path d="M80 130 C 80 110, 95 105, 95 95 C 95 105, 110 110, 110 130 Z" fill="white" opacity="0.8" />
              <path d="M140 130 C 140 100, 155 95, 155 85 C 155 95, 170 100, 170 130 Z" fill="white" opacity="0.8" />
            </>
          ),
          label: "Farming Practices"
        };
      case "fields":
        return {
          gradient: ["#134E5E", "#71B280"], // Emerald Fields
          art: (
            <>
              {/* Rolling hills / fields lines */}
              <path d="M0 110 Q 60 80, 120 110 T 240 110 L240 150 L0 150 Z" fill="rgba(255,255,255,0.15)" />
              <path d="M0 130 Q 80 110, 160 130 T 240 130 L240 150 L0 150 Z" fill="rgba(255,255,255,0.25)" />
              {/* Palm trees silhouettes */}
              <path d="M40 135 L43 85" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
              <path d="M43 85 Q30 75, 20 80 M43 85 Q40 68, 43 65 M43 85 Q58 75, 65 83 M43 85 Q30 90, 25 95 M43 85 Q55 90, 60 98" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" />
            </>
          ),
          label: "Green Fields"
        };
      case "water":
        return {
          gradient: ["#00c6ff", "#0072ff"], // Water/River Blue
          art: (
            <>
              {/* Waves and reflection */}
              <path d="M0 100 Q 60 115, 120 100 T 240 100" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
              <path d="M0 115 Q 60 130, 120 115 T 240 115" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
              <path d="M0 130 Q 60 145, 120 130 T 240 130" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
              {/* Lotus flower */}
              <circle cx="120" cy="95" r="6" fill="#E91E63" />
              <path d="M105 95 Q120 70, 135 95 Z" fill="rgba(233, 30, 99, 0.6)" />
            </>
          ),
          label: "Water Resources"
        };
      case "harvest":
        return {
          gradient: ["#F3904F", "#3B4371"], // Sunset Harvest Dusk
          art: (
            <>
              {/* Sun rising and wheat/crops stalks */}
              <circle cx="120" cy="110" r="35" fill="rgba(255, 235, 59, 0.4)" />
              <path d="M70 140 L70 90 Q70 80, 60 80 M70 100 Q80 90, 85 90" stroke="rgba(255,255,255,0.6)" strokeWidth="3" fill="none" />
              <path d="M100 140 L100 75 Q100 65, 90 65 M100 90 Q110 80, 115 80" stroke="rgba(255,255,255,0.6)" strokeWidth="3" fill="none" />
              <path d="M170 140 L170 95 Q170 85, 160 85" stroke="rgba(255,255,255,0.6)" strokeWidth="3" fill="none" />
            </>
          ),
          label: "Harvest Festival"
        };

      // Places
      case "place_school":
        return {
          gradient: ["#005C97", "#363795"], // Study blue
          art: (
            <>
              <path d="M70 120 L70 80 L120 60 L170 80 L170 120 Z" fill="rgba(255,255,255,0.1)" />
              <path d="M60 120 L180 120" stroke="white" strokeWidth="4" />
              <path d="M120 60 L120 40" stroke="#FF9933" strokeWidth="2" /> {/* Flag pole */}
              <path d="M120 40 L135 45 L120 50 Z" fill="#C62828" /> {/* Flag */}
              <circle cx="120" cy="85" r="8" fill="rgba(255,255,255,0.3)" /> {/* School clock */}
            </>
          ),
          label: "Government School"
        };
      case "place_panchayat":
        return {
          gradient: ["#3A6073", "#3A7BD5"], // Civic Teal
          art: (
            <>
              <path d="M60 120 L60 80 L180 80 L180 120 Z" fill="rgba(255,255,255,0.15)" />
              <path d="M50 80 L190 80" stroke="white" strokeWidth="5" /> {/* Roof */}
              {/* Pillars */}
              <rect x="80" y="80" width="10" height="40" fill="white" opacity="0.8" />
              <rect x="115" y="80" width="10" height="40" fill="white" opacity="0.8" />
              <rect x="150" y="80" width="10" height="40" fill="white" opacity="0.8" />
            </>
          ),
          label: "Panchayat Office"
        };
      case "place_busstop":
        return {
          gradient: ["#485563", "#29323c"], // Asphalt Grey
          art: (
            <>
              <path d="M70 120 L70 80 L170 80 L170 120" fill="none" stroke="white" strokeWidth="4" />
              <path d="M60 80 L180 75" stroke="#FF9933" strokeWidth="6" /> {/* Canopy */}
              <rect x="90" y="100" width="60" height="20" fill="rgba(255,255,255,0.2)" /> {/* Bench */}
            </>
          ),
          label: "Bus Stop"
        };
      case "place_lake":
        return {
          gradient: ["#2193b0", "#6dd5ed"], // Lake waters
          art: (
            <>
              <ellipse cx="120" cy="110" rx="90" ry="25" fill="rgba(255,255,255,0.15)" />
              <path d="M60 110 Q120 125, 180 110" stroke="white" strokeWidth="2" fill="none" />
              {/* Trees framing the lake */}
              <path d="M30 110 L30 85" stroke="#8B4513" strokeWidth="4" />
              <circle cx="30" cy="75" r="18" fill="#2E7D32" opacity="0.8" />
            </>
          ),
          label: "Village Lake"
        };
      case "place_playground":
        return {
          gradient: ["#56ab2f", "#a8ff78"], // Grassy playground
          art: (
            <>
              <rect x="40" y="70" width="140" height="70" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
              <circle cx="110" cy="105" r="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
              {/* Stumps / Cricket wickets */}
              <line x1="60" y1="95" x2="60" y2="115" stroke="white" strokeWidth="3" />
              <line x1="65" y1="95" x2="65" y2="115" stroke="white" strokeWidth="3" />
              <line x1="70" y1="95" x2="70" y2="115" stroke="white" strokeWidth="3" />
            </>
          ),
          label: "Community Playground"
        };
      case "place_watertank":
        return {
          gradient: ["#0052D4", "#4364F7", "#6FB1FC"], // Blue plumbing tower
          art: (
            <>
              {/* Water tank columns */}
              <line x1="90" y1="130" x2="105" y2="80" stroke="white" strokeWidth="4" />
              <line x1="150" y1="130" x2="135" y2="80" stroke="white" strokeWidth="4" />
              <line x1="120" y1="130" x2="120" y2="80" stroke="white" strokeWidth="3" />
              <line x1="95" y1="105" x2="145" y2="105" stroke="white" strokeWidth="2" />
              {/* Cylindrical tank */}
              <rect x="95" y="55" width="50" height="30" rx="5" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="3" />
              <path d="M95 65 H145" stroke="white" strokeWidth="2" />
            </>
          ),
          label: "Water Tank"
        };

      // Sunset/Sunrise
      case "gallery_sunrise_fields":
        return {
          gradient: ["#FF4E50", "#F9D423"], // Sunrise Yellow-Orange
          art: (
            <>
              <circle cx="120" cy="110" r="35" fill="white" opacity="0.9" />
              <path d="M0 110 Q 60 90, 120 110 T 240 110 L240 150 L0 150 Z" fill="rgba(46,125,50,0.4)" />
            </>
          )
        };
      case "gallery_sunset_lake":
        return {
          gradient: ["#4B1248", "#F0C27B"], // Velvet Sunset Purple-Orange
          art: (
            <>
              <circle cx="120" cy="80" r="28" fill="#FF5722" />
              <path d="M0 95 Q 60 110, 120 95 T 240 95 L240 150 L0 150 Z" fill="rgba(0,188,212,0.3)" />
            </>
          )
        };

      // Default fallback
      default:
        return {
          gradient: ["#2E7D32", "#FF9933"], // Primary theme colors
          art: (
            <>
              <path d="M50 120 Q120 70, 190 120" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="5" />
              <circle cx="120" cy="80" r="15" fill="rgba(255,255,255,0.2)" />
            </>
          ),
          label: "Namma Thathaiyangarpatti"
        };
    }
  };

  const theme = getTheme();

  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center text-white ${className}`}
      style={{
        background: `linear-gradient(135deg, ${theme.gradient.join(", ")})`
      }}
    >
      {/* Decorative grid pattern background overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `radial-gradient(circle, white 10%, transparent 11%)`,
          backgroundSize: '12px 12px'
        }}
      />

      {/* Custom Vector Art */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 240 150"
        preserveAspectRatio="none"
      >
        {theme.art}
      </svg>

      {/* Floating text description */}
      <div className="absolute bottom-3 left-3 right-3 bg-black/45 backdrop-blur-xs p-2 rounded-md border border-white/10 text-center">
        <span className="block text-xs font-semibold tracking-wide uppercase text-secondary-saffron">
          {theme.label || title}
        </span>
        <span className="block text-[10px] text-white/70 italic mt-0.5">
          [Image Placeholder - Replaceable]
        </span>
      </div>
    </div>
  );
};

export default SVGPlaceholder;
