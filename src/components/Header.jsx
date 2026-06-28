import { useState } from 'react';
import { Menu, X, TreePine } from 'lucide-react';
import { navLinks } from '../data/siteData';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-forest-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#anasayfa" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-md">
              <TreePine className="w-5 h-5 text-forest-900" />
            </div>
            <div className="leading-tight">
              <span className="font-serif font-bold text-sm sm:text-base text-white">
                Mezire Köyü Derneği
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-green-100 hover:text-gold transition-colors rounded-md hover:bg-forest-700 font-medium"
              >
                {link.label}
              </a>
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
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-green-100 hover:text-gold hover:bg-forest-700 rounded-md transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
