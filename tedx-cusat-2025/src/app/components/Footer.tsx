export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm text-center py-6 border-t border-gray-700">
      <p>&copy; {new Date().getFullYear()} TEDxCUSAT. All rights reserved.</p>
      <p>Organized independently under license from TED.</p>
    </footer>
  );
}
