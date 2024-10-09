"use client"

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const MainSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white animated-gradient bg-clip-text text-transparent">
          Scale Your Business with YouTube Ads
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-300">
          We help Coaches, Consultants, and Course Providers reach $100k+/month
        </p>
        <Button className="text-lg px-8 py-6 metallic-button glow-effect">
          Get Your Free Strategy Call
        </Button>
      </div>
      <div 
        className="mouse-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
    </section>
  );
};

export default MainSection;