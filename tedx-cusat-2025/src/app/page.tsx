'use client';

import { motion } from 'framer-motion';
import SpeakerCard from './components/SpeakerCard';
import Countdown from './components/Countdown';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';



export default function Home() {
  const speakers = [
  {
    name: 'Mio Doe',
    title: 'Innovator & Tech Enthusiast',
    image: 'https://images.unsplash.com/photo-1747734786792-317d1d8e8690?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Jane Smith',
    title: 'Author & Entrepreneur',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Anoop Joseph',
    title: 'TEDx Speaker',
    image: 'https://images.unsplash.com/photo-1745965976680-d00be7dc0377?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];


  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <section className="text-center mb-16">
        <motion.h1
          className="text-5xl font-bold text-tedxRed"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TEDxCUSAT 2025
        </motion.h1>
        <motion.p
          className="mt-4 text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Igniting Minds. Inspiring Change.
        </motion.p>
      </section>
<Countdown />


      <section className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-6 text-white">Meet the Speakers</h2>
        <div className="flex flex-wrap justify-center">
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

    </main>
  );
}
