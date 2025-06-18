'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-tedxBlack text-white px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-tedxRed">TEDxCUSAT 2025</h1>
        <p className="mt-4 text-lg md:text-2xl">Ideas Worth Spreading</p>
      </motion.div>
    </section>
  )
}
