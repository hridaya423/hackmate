'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-emerald-500/20' 
        : 'bg-gray-900/70 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center">
              <div className="text-emerald-500 font-bold text-xl font-display group-hover:text-emerald-400 transition-colors">
                <span className="text-white">
                Hackmate</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <NavLink href="/#rewards">
                Rewards
              </NavLink>
              <NavLink href="/gallery">
                Gallery
              </NavLink>
              <NavLink href="/#faq">
                FAQ
              </NavLink>
              <NavLink href="/guide">
                Guide
              </NavLink>
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded-md">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="text-gray-300 hover:text-white hover:bg-emerald-500/10 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group"
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-emerald-500/20 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-200"></div>
    </Link>
  );
};

export default Navbar; 