import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Temples from "../components/Temples";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

// Reusable components reserved for future expansion (can be imported back when ready)
// import History from "../components/History";
// import Agriculture from "../components/Agriculture";
// import Festivals from "../components/Festivals";
// import Places from "../components/Places";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-bg-warm antialiased selection:bg-primary-green selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Welcome Banner */}
      <Hero />

      {/* Main Heritage Sections */}
      <main>
        {/* About the village */}
        <About />

        {/* Spiritual Temples */}
        <Temples />

        {/* 
          Reserved for Future Expansion:
          These sections can be reactivated by uncommenting the imports above and the components below.
          
          <History />
          <Agriculture />
        */}

        {/* Responsive Photo Gallery */}
        <Gallery />

        {/* 
          Reserved for Future Expansion:
          <Festivals />
          <Places />
        */}
      </main>

      {/* Footer information */}
      <Footer />
    </div>
  );
};

export default Home;
