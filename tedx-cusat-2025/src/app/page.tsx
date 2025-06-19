'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import SpeakerCard from './components/SpeakerCard';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

export default function Home() {
  const [heroShrunk, setHeroShrunk] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const runAnimation = async () => {
      await new Promise((r) => setTimeout(r, 3000));
      setHeroShrunk(true);
      await new Promise((r) => setTimeout(r, 1000));
      setShowContent(true);
    };

    runAnimation();
  }, []);

  const speakers = [
    {
      name: 'Mio Doe',
      title: 'Innovator & Tech Enthusiast',
      image: 'https://images.unsplash.com/photo-1747734786792-317d1d8e8690?q=80&w=687&auto=format&fit=crop',
    },
    {
      name: 'Jane Smith',
      title: 'Author & Entrepreneur',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Anoop Joseph',
      title: 'TEDx Speaker',
      image: 'https://images.unsplash.com/photo-1745965976680-d00be7dc0377?q=80&w=687&auto=format&fit=crop',
    },
  ];

  return (
    <main className="bg-black text-white overflow-x-hidden">
      <div className="relative z-50">
        <Hero isShrunk={heroShrunk} />
      </div>

      <AnimatePresence>
        {showContent && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
             <div id="countdown" className="text-center pt-12 pb-8 px-6">


                <h2 className="text-3xl font-semibold mb-4 text-white"></h2>
            
                <Countdown />
              </div>

              <section className="text-center pt-8 pb-16 px-6">
                <h2 className="text-3xl font-semibold mb-8 text-white">Meet the Speakers</h2>
                <div className="flex flex-wrap justify-center gap-6">
                  {speakers.map((speaker, index) => (
                    <SpeakerCard
                      key={index}
                      name={speaker.name}
                      title={speaker.title}
                      image={speaker.image}
                    />
                  ))}
                </div>
              </section>

              <Sponsors />
              <Team />
              <Testimonials />

              <div id="get-tickets">
                <CallToAction />
              </div>

              <Footer />
              <FloatingButton />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
