<<<<<<< HEAD
<<<<<<< HEAD
// components/RoadmapSection.jsx
import React from 'react';

// Ce composant affiche un seul élément de la feuille de route.
=======
import React from 'react';

>>>>>>> 8994ef1 (Initial commit of the complete MAWA site)
const RoadmapItem = ({ phase, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center my-8">
      <div className="md:w-1/4 mb-4 md:mb-0">
        <h3 className="text-2xl font-bold text-center md:text-left">{phase}</h3>
      </div>
      <div className="md:w-3/4 md:pl-8">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

<<<<<<< HEAD
// C'est le composant principal pour la section de la feuille de route.
=======
>>>>>>> 8994ef1 (Initial commit of the complete MAWA site)
const RoadmapSection = () => {
  const roadmap = [
    {
      phase: 'Phase 1',
      title: 'Fondation & Bâtir la Communauté',
      description: '• Lancement du projet MAWA avec une vision transparente. • Développement d\'une forte communauté sur Telegram et X (anciennement Twitter). • Audit du contrat intelligent et mesures de sécurité. • Lancement de la première phase de notre campagne marketing.'
    },
    {
      phase: 'Phase 2',
      title: 'Lancement Stratégique & Visibilité',
      description: '• Lancement équitable sur Jupiter d\'ici le 15 Janvier 2025. • Verrouillage de la liquidité pour 12 mois pour la confiance et la sécurité. • Déploiement d\'une campagne marketing massive avec des influenceurs clés. • Visibilité sur les meilleurs sites de classement de crypto.'
    },
    {
      phase: 'Phase 3',
      title: 'Expansion & Domination de l\'Écosystème',
      description: '• Développement de la première collection NFT sur le thème de MAWA pour notre communauté. • Exploration de partenariats avec d\'autres projets Solana. • Lancement de produits dérivés exclusifs. • Dévoilement des plans pour l\'utilité et l\'écosystème du token MAWA.'
    },
    {
      phase: 'Phase 4',
      title: 'Statut de Prédateur Alpha',
      description: '• Ciblage de listings sur les CEX majeurs pour augmenter l\'accessibilité. • Implémentation d\'utilités à long terme pour le token, comme les récompenses de staking. • Expansion de notre communauté mondialement et consolidation de notre position de memecoin leader sur Solana. • Poursuite de la croissance de la marque MAWA avec des initiatives uniques.'
    },
  ];
  return (
<<<<<<< HEAD
    <section className="py-16 bg-gray-900 text-white">
=======
    <section id="roadmap" className="py-16 bg-gray-900 text-white">
>>>>>>> 8994ef1 (Initial commit of the complete MAWA site)
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Roadmap</h2>
        <div className="max-w-4xl mx-auto">
          {roadmap.map((item, index) => (
            <RoadmapItem
              key={index}
              phase={item.phase}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
=======
function Phase({ phase, status, desc, date }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{phase}</h3>
        <div className="text-sm text-white/60">{status}{date ? ` • ${date}` : ''}</div>
      </div>
      <p className="mt-3 text-white/80">{desc}</p>
    </div>
  )
}

export default function RoadmapSection() {
  const phases = [
    { phase: 'Phase 1: Foundation', status: '✅ COMPLETED', desc: 'Premium branding, website launch, initial community building.' },
    { phase: 'Phase 2: Community Growth', status: '🔄 IN PROGRESS', desc: 'Social media expansion, community engagement, pre-launch hype.' },
    { phase: 'Phase 3: Jupiter Launch', status: '⏳ PLANNED', date: '2025-01-15', desc: 'Official token launch on Jupiter, initial liquidity provision.' },
    { phase: 'Phase 4: DEX Expansion', status: '⏳ PLANNED', desc: 'Listings on major Solana DEXs, partnerships.' },
    { phase: 'Phase 5: CEX Listings', status: '⏳ PLANNED', desc: 'Centralized exchange listings, global market expansion.' },
    { phase: 'Phase 6: Ecosystem Development', status: '⏳ PLANNED', desc: 'MAWA merchandise, NFT collections, community rewards program.' }
  ]

  return (
    <section id="roadmap">
      <h2 className="text-4xl font-bold mb-6">The MAWA Journey</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {phases.map((p, i)=>(<Phase key={i} {...p}/>))}
      </div>
    </section>
  )
}
>>>>>>> 1ddba00 (Initial commit of the complete MAWA website)
