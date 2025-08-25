"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/tarifs', label: 'Tarifs' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/75 dark:bg-dark-bg/75 backdrop-blur-sm shadow-md transition-colors duration-300">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <Link href="/" className="text-2xl font-bold font-syne text-oxford-blue dark:text-white">
              Group'innove
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-teal-green dark:hover:text-teal-green transition-all duration-300 hover:-translate-y-0.5">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-600 dark:text-gray-300">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white dark:bg-dark-bg z-40 flex flex-col items-center justify-center space-y-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-bold text-gray-800 dark:text-gray-200 hover:text-teal-green transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;