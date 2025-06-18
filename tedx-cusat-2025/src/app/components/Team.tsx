'use client';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Aarav Menon',
    role: 'Event Lead',
    photo: 'https://images.unsplash.com/photo-1749253851355-3529792f0d34?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Diya Nair',
    role: 'Creative Director',
    photo: 'https://images.unsplash.com/photo-1747995709691-5d0cf015c991?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Rahul Raj',
    role: 'Technical Head',
    photo: 'https://images.unsplash.com/photo-1587248415446-c7c72e935a3d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Neha Suresh',
    role: 'Program Curator',
    photo: 'https://images.unsplash.com/photo-1748015879337-ef95556c3749?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Adithyan Varma',
    role: 'Sponsorship Lead',
    photo: 'https://images.unsplash.com/photo-1746114774895-133d5b677db8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Shruthi Nair',
    role: 'Marketing Head',
    photo: 'https://images.unsplash.com/photo-1744370614231-4605ec37890a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];


export default function Team() {
  return (
    <section className="bg-black py-16 px-4 text-white">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-10">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="text-center"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-red-600"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-red-500">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
