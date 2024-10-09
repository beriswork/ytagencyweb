"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">AdScalers</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="#services" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white">Services</Link>
            <Link href="#testimonials" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white">Testimonials</Link>
            <Link href="#calculator" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white">ROI Calculator</Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button className="metallic-button glow-effect">Get Started</Button>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Services</Link>
            <Link href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Testimonials</Link>
            <Link href="#calculator" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">ROI Calculator</Link>
            <Button className="w-full mt-4 metallic-button glow-effect">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;