'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-black py-16 px-4 text-center text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 text-red-600"
      >
        Be a Part of TEDxCUSAT 2025
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg mb-8 text-gray-300 max-w-xl mx-auto"
      >
        Whether you're a thinker, a dreamer, or a doer — join us for a day of unforgettable ideas and conversations.
      </motion.p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <a
    href="/tickets"
    className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition"
  >
    Reserve Your Spot
  </a>
</motion.div>

    </section>
  );
}
