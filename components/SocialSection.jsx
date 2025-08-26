<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

const SocialSection = () => {
  return (
    <section id="social" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Rejoignez-nous</h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-300 text-lg">
          Soyez au cœur de la communauté MAWA et restez à jour sur les dernières nouvelles, les airdrops et les événements.
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="#" className="flex items-center space-x-2 text-2xl hover:text-mawa-blue transition-colors">
            <i className="fab fa-x-twitter"></i>
            <span>Twitter</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 text-2xl hover:text-mawa-blue transition-colors">
            <i className="fab fa-telegram-plane"></i>
            <span>Telegram</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 text-2xl hover:text-mawa-blue transition-colors">
            <i className="fab fa-discord"></i>
            <span>Discord</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
=======
export default function SocialSection() {
  const items = [
    { name: 'X / Twitter', href: 'https://x.com/Mawathecroco', desc: 'Actus, annonces, threads.' },
    { name: 'Telegram', href: 'https://t.me/mawasolana', desc: 'Chat en direct avec la communauté.' },
    { name: 'Discord', href: '#', desc: 'Canaux thématiques et events.' }
  ]
  return (
    <section id="socials">
      <h2 className="text-4xl font-bold mb-6">Rejoindre la communauté</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i)=>(
          <a key={i} href={it.href} target="_blank" rel="noopener noreferrer" className="card hover:scale-[1.01] transition-transform">
            <div className="text-xl font-semibold">{it.name}</div>
            <p className="mt-2 text-white/80">{it.desc}</p>
          </a>
        ))}
      </div>
      <p className="text-white/50 text-sm mt-4">Les liens officiels : Telegram et X/Twitter.</p>
    </section>
  )
}
>>>>>>> 1ddba00 (Initial commit of the complete MAWA website)
