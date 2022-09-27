import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import Recommended from './components/Recommended';
import Testimonials from './components/Testimonials';
// import CarouselHero from './components/CarouselHero';


function App() {



  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Recommended />
      <Testimonials />
      <ScrollToTop />
      {/* <CarouselHero /> */}
      <Footer />

    </div>
  );
}

export default App;
