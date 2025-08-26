<<<<<<< HEAD
<<<<<<< HEAD
export default function Tokenomics(){
=======
import React from 'react';

const TokenomicsPage = () => {
>>>>>>> 8994ef1 (Initial commit of the complete MAWA site)
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">Tokenomics</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold">Distribution</h3>
          <table className="w-full mt-4 text-sm text-white/80">
            <tbody>
<<<<<<< HEAD
              <tr><td>Liquidity (DEX)</td><td className="text-right">78%</td></tr>
              <tr><td>Vested</td><td className="text-right">2%</td></tr>
              <tr><td>Migrating suply</td><td className="text-right">20%</td></tr>
=======
              <tr><td>Liquidité (DEX)</td><td className="text-right">55%</td></tr>
              <tr><td>Airdrop & Communauté</td><td className="text-right">20%</td></tr>
              <tr><td>Marketing</td><td className="text-right">15%</td></tr>
              <tr><td>Listings</td><td className="text-right">5%</td></tr>
              <tr><td>Équipe</td><td className="text-right">5%</td></tr>
>>>>>>> 8994ef1 (Initial commit of the complete MAWA site)
            </tbody>
          </table>
        </div>
        <div className="card">
<<<<<<< HEAD
          <h3 className="text-xl font-semibold">MAWA token Parameters</h3>
          <ul className="mt-4 text-white/80">
            <li>Supply: 1,000,000,000</li>
            <li>Decimals: 9</li>
            <li>Mint authority: renounced </li>
=======
          <h3 className="text-xl font-semibold">Paramètres recommandés</h3>
          <ul className="mt-4 text-white/80">
            <li>Supply: 1,000,000,000</li>
            <li>Decimals: 6 or 9</li>
            <li>Mint authority: renounced (optional)</li>
>>>>>>> 8994ef1 (Initial commit of the complete MAWA site)
            <li>LP lock: 12 months</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======
export default TokenomicsPage;
>>>>>>> 8994ef1 (Initial commit of the complete MAWA site)
=======
import TokenomicsSection from '../../../components/TokenomicsSection'
export default function TokenomicsPage(){
  return (
    <div className="container section">
      <TokenomicsSection />
    </div>
  )
}
>>>>>>> 1ddba00 (Initial commit of the complete MAWA website)
