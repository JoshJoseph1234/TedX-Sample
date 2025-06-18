'use client';
import { motion } from 'framer-motion';

const sponsors = [
  {
    name: 'TechCorp',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Microsoft_Logo.png',
  },
  {
    name: 'InnoSoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png',
  },
  {
    name: 'WebWorks',
    logo: 'https://d3eys52k95jjdh.cloudfront.net/wp-content/uploads/2019/06/google-dark.jpg',
  },
];

export default function Sponsors() {
  return (
    <section className="bg-black py-16 px-4 text-white">

      <h2 className="text-3xl font-bold text-center text-red-600 mb-10">
        Our Proud Sponsors
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-black p-4 rounded-xl w-28 h-28 flex items-center justify-center shadow-md"


          >
            <img
  src={sponsor.logo}
  alt={sponsor.name}
  className="object-contain h-20 w-auto"

/>



          </motion.div>
        ))}
      </div>
    </section>
  );
}
