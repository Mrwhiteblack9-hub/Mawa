import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-sm uppercase tracking-widest text-mawa-blue font-bold mb-4">
          MAWA
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
          The People's Coin
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto md:mx-0">
          Un memecoin transparent sur la blockchain Solana, conçu pour une communauté passionnée.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#" className="btn-primary">Acheter sur Jupiter</a>
          <Link href="/roadmap" className="px-6 py-3 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors">
            Voir la feuille de route
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
