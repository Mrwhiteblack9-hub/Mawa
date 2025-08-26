// components/RoadmapSection.jsx
import React from 'react';
// This component displays a single roadmap item.
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
// This is the main component for the roadmap section.
const RoadmapSection = () => {
  const roadmap = [
    {
      phase: 'Phase 1',
      title: 'Foundation & Community Building',
      description: '• Launching the MAWA meme project with a transparent vision. • Developing a strong community on Telegram and X (formerly Twitter). • Securing smart contract audit and ensuring security measures. • Initiating the first phase of our marketing campaign on social media.'
    },
    {
      phase: 'Phase 2',
      title: 'Strategic Launch & Visibility',
      description: '• Fair Launch on Jupiter by January 15, 2025. • Locking liquidity for 12 months to ensure trust and security. • Deploying a massive marketing campaign, including partnerships with key influencers. • Gaining visibility on top crypto-ranking sites.'
    },
    {
      phase: 'Phase 3',
      title: 'Ecosystem Expansion & Domination',
      description: '• Developing the first MAWA-themed NFT collection for our community. • Exploring partnerships with other Solana projects. • Launching exclusive merchandise for our community. • Unveiling plans for the MAWA token utility and ecosystem.'
    },
    {
      phase: 'Phase 4',
      title: 'Apex Predator Status',
      description: '• Targeting major CEX listings to increase accessibility. • Implementing more long-term utility for the token, such as staking rewards. • Expanding our community globally and solidifying our position as a leading memecoin on Solana. • Continuing to grow the MAWA brand with unique initiatives.'
    },
  ];
  return (
    <section className="py-16 bg-gray-900 text-white">
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
