import React from 'react';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Programs from '@/components/Programs/Programs';
import Features from '@/components/Features/Features';
import Pricing from '@/components/Pricing/Pricing';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

const Home: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Programs />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
