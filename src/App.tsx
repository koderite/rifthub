import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Agentation } from 'agentation';

import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import StatsSection from './sections/StatsSection';
import AboutSection from './sections/AboutSection';
import ManifestoSection from './sections/ManifestoSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactFormSection from './sections/ServicesPackagesSection';
import FAQSection from './sections/FAQSection';
import Footer from './sections/Footer';
import ContactWidgets from './components/ContactWidgets';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerCallback);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'var(--paper)',
        minHeight: '100vh',
      }}
    >
      {process.env.NODE_ENV === 'development' && <Agentation />}
      <CustomCursor />
      <Navigation />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Stats / Metrics */}
        <StatsSection />

        {/* 3. About - Who We Are */}
        <AboutSection />

        {/* 5. Manifesto - Big statement */}
        <ManifestoSection />

        {/* 6. Portfolio grid */}
        <div className="content-visibility-auto">
          <PortfolioSection />
        </div>

        {/* 6. Contact Form */}
        <div className="content-visibility-auto">
          <ContactFormSection />
        </div>

        {/* 8. FAQ */}
        <div className="content-visibility-auto">
          <FAQSection />
        </div>

        {/* 9. Footer / Contact */}
        <div className="content-visibility-auto">
          <Footer />
        </div>
      </main>

      <ContactWidgets />
    </div>
  );
}

export default App;
