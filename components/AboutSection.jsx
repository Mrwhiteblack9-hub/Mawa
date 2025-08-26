<<<<<<< HEAD
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">À propos de MAWA</h2>
        <div className="max-w-3xl mx-auto text-gray-300 text-lg">
          <p className="mb-4">
            MAWA n'est pas qu'un simple memecoin. C'est une révolution pour la communauté, un mouvement pour la transparence et la croissance collective. Notre mission est de bâtir un écosystème durable autour de notre token, avec une vision claire et une exécution sans faille.
          </p>
          <p>
            Notre équipe, bien qu'anonyme pour l'instant, est composée de passionnés qui travaillent jour et nuit pour faire de MAWA le memecoin le plus puissant de l'écosystème Solana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
=======
export default function AboutSection() {
  return (
    <section id="about">
      <h2 className="text-4xl font-bold mb-6">À propos de MAWA</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-xl font-semibold">Notre mission</h3>
          <p className="mt-3 text-white/80">
            Créer un memecoin qui combine identité forte, exécution propre et une communauté durable.
          </p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Engagements</h3>
          <ul className="mt-3 text-white/80 list-disc pl-5 space-y-1">
            <li>Transparence</li>
            <li>Communication régulière</li>
            <li>Roadmap publique</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
>>>>>>> 1ddba00 (Initial commit of the complete MAWA website)
