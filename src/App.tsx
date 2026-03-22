import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyComments from './components/WhyComments';
import WarmupLoop from './components/WarmupLoop';
import HowItWorks from './components/HowItWorks';
import CaseStudy from './components/CaseStudy';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  // Initialize scroll observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <WhyComments />
        <WarmupLoop />
        <HowItWorks />
        <CaseStudy />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
