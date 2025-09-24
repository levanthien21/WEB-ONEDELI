import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Programs from '@/components/Programs/Programs';
import Features from '@/components/Features/Features';
import Pricing from '@/components/Pricing/Pricing';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import QuoteModal from '@/components/QuoteModal/QuoteModal';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
      <button
        className="btn btn-accent"
        style={{ position: 'fixed', bottom: 24, left: 24, zIndex: 1100 }}
        onClick={() => setIsModalOpen(true)}
      >
        Báo giá & Dùng thử
      </button>
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
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
