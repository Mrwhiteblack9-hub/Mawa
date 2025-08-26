<<<<<<< HEAD
import React from 'react';

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Tokenomics</h2>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Distribution</h3>
            <ul className="text-left space-y-2 text-gray-300">
              <li>**55%** - Liquidité (DEX)</li>
              <li>**20%** - Airdrop & Communauté</li>
              <li>**15%** - Marketing</li>
              <li>**5%** - Listings</li>
              <li>**5%** - Équipe</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Détails</h3>
            <ul className="text-left space-y-2 text-gray-300">
              <li>**Supply** : 1,000,000,000</li>
              <li>**Symbole** : MAWA</li>
              <li>**Blockchain** : Solana</li>
              <li>**Taxe** : 0% (aucune taxe sur les transactions)</li>
              <li>**Liquidité** : Verrouillée pour 12 mois</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
=======
export default function TokenomicsSection() {
  return (
    <section id="tokenomics">
      <h2 className="text-4xl font-bold mb-6">Tokenomics</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold">Distribution</h3>
          <table className="w-full mt-4 text-sm text-white/80">
            <tbody>
              <tr><td>Liquidity (DEX)</td><td className="text-right font-semibold">78%</td></tr>
              <tr><td>Vested</td><td className="text-right font-semibold">2%</td></tr>
              <tr><td>Migrating supply</td><td className="text-right font-semibold">20%</td></tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold">MAWA token parameters</h3>
          <ul className="mt-4 text-white/80 space-y-1">
            <li><span className="font-semibold">Supply:</span> 1,000,000,000</li>
            <li><span className="font-semibold">Decimals:</span> 9</li>
            <li><span className="font-semibold">Mint authority:</span> renounced</li>
            <li><span className="font-semibold">LP lock:</span> 12 months</li>
            <li><span className="font-semibold">Tax:</span> 2%</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
>>>>>>> 1ddba00 (Initial commit of the complete MAWA website)
