'use client';
import { useEffect, useState } from 'react';

const eventDate = new Date('2025-09-30T10:00:00+05:30').getTime();

function formatTime(ms: number) {
  if (ms < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [isClient, setIsClient] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setIsClient(true); // Now we know it's rendering on client
    const updateTime = () => {
      const now = Date.now();
      const diff = eventDate - now;
      setTimeLeft(formatTime(diff));
    };
    updateTime(); // initial
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isClient) return null; // Prevent SSR mismatch

  return (
    <section className="bg-black text-white py-10 text-center">
      <h2 className="text-3xl font-bold mb-4 text-red-600">Countdown to TEDxCUSAT 2025</h2>
      <div className="flex justify-center gap-8 text-2xl font-mono">
        <div><span className="text-red-500">{timeLeft.days}</span> days</div>
        <div><span className="text-red-500">{timeLeft.hours}</span> hrs</div>
        <div><span className="text-red-500">{timeLeft.minutes}</span> min</div>
        <div><span className="text-red-500">{timeLeft.seconds}</span> sec</div>
      </div>
    </section>
  );
}
