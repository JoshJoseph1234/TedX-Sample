'use client';

export default function FloatingButton() {
  return (
    <a
      href="#get-tickets" // or replace with an external ticketing URL
      className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-full shadow-lg transition-all"
    >
      🎟️ Get Tickets
    </a>
  );
}
