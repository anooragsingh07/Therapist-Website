const Header = () => (
  <header className="py-6 mb-8 border-b bg-white/80 backdrop-blur sticky top-0 z-50">
    <nav className="flex justify-between items-center max-w-3xl mx-auto px-4">
      <span className="font-bold text-xl tracking-tight">Dr. Serena Blake</span>
      <ul className="flex gap-6 text-base font-medium">
        <li><a href="/" className="hover:text-blue-600">Home</a></li>
        <li><a href="/about" className="hover:text-blue-600">About</a></li>
        <li><a href="/services" className="hover:text-blue-600">Services</a></li>
        <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header; 