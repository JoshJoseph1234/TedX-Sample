'use client';
import { motion } from 'framer-motion';

export default function TicketsPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-red-600 mb-4 text-center"
      >
        Ticket Booking
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-gray-300 text-center max-w-xl"
      >
        🚧 Coming Soon! <br />
        Our team is working hard to bring you a seamless ticket booking experience. Stay tuned!
      </motion.p>
    </main>
  );
}
