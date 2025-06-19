'use client';
import { motion } from 'framer-motion';

interface HeroProps {
  isShrunk: boolean;
}

export default function Hero({ isShrunk }: HeroProps) {
  return (
    <motion.section
  animate={{
    height: isShrunk ? '12rem' : '100vh',
    paddingTop: isShrunk ? '2rem' : '0',
    paddingBottom: isShrunk ? '1rem' : '0',
    backgroundColor: '#000000',
  }}
  transition={{ duration: 1 }}
  className="w-full text-white flex flex-col justify-center items-center text-center"
>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-tedxRed"
      >
        TEDxCUSAT 2025
      </motion.h1>

      <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.4 }}
  className={`mt-2 text-sm md:text-lg text-white ${isShrunk ? 'block' : 'mt-6 md:text-xl'}`}
>
  Igniting Minds. Inspiring Change.
</motion.p>

    </motion.section>
  );
}
