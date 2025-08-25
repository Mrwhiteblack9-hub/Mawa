import React from 'react';

// This component displays the MAWA project roadmap.
const RoadmapSection = () => {
  const roadmapItems = [
    {
      status: '✅',
      phase: 'Phase 1: Foundation',
      title: '(COMPLETED)',
      description: 'Premium branding, website launch, initial community building'
    },
    {
      status: '🔄',
      phase: 'Phase 2: Community Growth',
      title: '(IN PROGRESS)',
      description: 'Social media expansion, community engagement, pre-launch hype'
    },
    {
      status: '⏳',
      phase: 'Phase 3: Jupiter Launch',
      title: '(JANUARY 2025)',
      description: 'Official token launch on Jupiter, initial liquidity provision'
    },
    {
      status: '⏳',
      phase: 'Phase 4: DEX Expansion',
      title: '', // No date for future phases
      description: 'Listings on major Solana DEXs, partnerships with other projects'
    },
    {
      status: '⏳',
      phase: 'Phase 5: CEX Listings',
      title: '',
      description: 'Centralized exchange listings, global market expansion'
    },
    {
      status: '⏳',
      phase: 'Phase 6: Ecosystem Development',
      title: '',
      description: 'Introduction of MAWA Pay (B2B/P2P payments), ride-sharing and food delivery platform, NFT collections, community rewards program'
    },
  ];

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">The MAWA Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2 flex items-center">
                <span className="mr-2">{item.status}</span>
                {item.phase}
              </h3>
              {item.title && <p className="text-lg text-gray-400 mb-2">{item.title}</p>}
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

