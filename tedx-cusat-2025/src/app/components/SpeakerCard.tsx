'use client';

import Image from 'next/image';

type SpeakerCardProps = {
  name: string;
  title: string;
  image: string; // External image URL
};

export default function SpeakerCard({ name, title, image }: SpeakerCardProps) {
  return (
    <div className="bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden m-4 w-72 transform hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-72">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-red-500">{name}</h3>
        <p className="text-sm mt-1">{title}</p>
      </div>
    </div>
  );
}
