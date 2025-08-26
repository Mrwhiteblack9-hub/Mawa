<<<<<<< HEAD
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
=======
import Link from 'next/link'

export default function HeroSection({ buyUrl, lang }) {
  return (
    <section id="hero" className="grid lg:grid-cols-5 gap-8 items-center">
      <div className="lg:col-span-3">
        <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 text-xs">Mêmecoin sérieux</div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold">
          MAWA — <span className="text-[color:var(--mawa-blue)]">Force</span>, <span className="text-[color:var(--mawa-blue)]">Élégance</span>, <span className="text-[color:var(--mawa-blue)]">Communauté</span>
        </h1>
        <p className="mt-4 text-white/80 max-w-xl">
          Un mêmecoin sérieux sur Solana avec une identité forte — mascotte crocodile, branding premium et vision long terme.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={buyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Acheter</a>
          <Link href={`/${lang}/tokenomics`} className="px-5 py-2 rounded-2xl border border-white/10">Tokenomics</Link>
        </div>
        <div className="mt-4 text-xs text-white/60">Contrat SPL : <span className="font-mono bg-white/5 px-2 py-1 rounded">SOON...</span></div>
      </div>
      <div className="lg:col-span-2 flex justify-center lg:justify-end">
        <img src="/banner.jpg" alt="MAWA Banner" className="rounded-2xl shadow-2xl w-full max-w-sm object-cover"/>
      </div>
    </section>
  )
}
>>>>>>> 1ddba00 (Initial commit of the complete MAWA website)
