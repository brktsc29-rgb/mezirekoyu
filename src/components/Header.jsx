import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/siteData';

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ link, onClick }) => {
    const isPage = link.href.startsWith('/') && !link.href.startsWith('/#');
    if (isPage) {
      return (
        <Link
          to={link.href}
          onClick={onClick}
          className="px-3 py-2 text-sm text-green-100 hover:text-gold transition-colors rounded-md hover:bg-forest-700 font-medium"
        >
          {link.label}
        </Link>
      );
    }
    return (
      <a
        href={link.href}
        onClick={onClick}
        className="px-3 py-2 text-sm text-green-100 hover:text-gold transition-colors rounded-md hover:bg-forest-700 font-medium"
      >
        {link.label}
      </a>
    );
  };

  return (
    <header className="bg-forest-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-md bg-white">
              <img src="/images/logo.png" alt="Mezire Köyü Derneği Logo" className="w-full h-full object-cover" />
            </div>
            <div className="leading-tight">
              <span className="font-serif font-bold text-sm sm:text-base text-white">
                Mezire Köyü Derneği
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.label} link={link} />
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-green-100 hover:text-white hover:bg-forest-700 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menüyü aç/kapat"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-forest-900 border-t border-forest-700">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.label} link={link} onClick={() => setOpen(false)} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
