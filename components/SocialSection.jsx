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
