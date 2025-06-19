'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Dr. Leena Varghese',
    feedback: 'An inspiring platform that ignites change. TEDxCUSAT raises the bar every year!',
  },
  {
    name: 'Joel Mathew',
    feedback: 'One of the most energetic and meaningful events I’ve ever attended. Bravo to the organizers!',
  },
  {
    name: 'Fatima Rasheed',
    feedback: 'A stage that not only speaks ideas but sparks action. I was truly moved.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-16 px-4 text-white">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-10">
        What People Are Saying
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            className="bg-gray-900 p-6 rounded-xl max-w-sm text-center shadow-lg"
          >
            <p className="italic text-gray-300">"{t.feedback}"</p>
            <p className="mt-4 text-red-500 font-semibold">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
