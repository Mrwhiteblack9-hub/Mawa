export default function Tokenomics(){
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">Tokenomics</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold">Distribution</h3>
          <table className="w-full mt-4 text-sm text-white/80">
            <tbody>
              <tr><td>Liquidity (DEX)</td><td className="text-right">55%</td></tr>
              <tr><td>Airdrop & Community</td><td className="text-right">20%</td></tr>
              <tr><td>Marketing</td><td className="text-right">15%</td></tr>
              <tr><td>Listings</td><td className="text-right">5%</td></tr>
              <tr><td>Team</td><td className="text-right">5%</td></tr>
            </tbody>
          </table>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Recommended Parameters</h3>
          <ul className="mt-4 text-white/80">
            <li>Supply: 1,000,000,000</li>
            <li>Decimals: 6 or 9</li>
            <li>Mint authority: renounced (optional)</li>
            <li>LP lock: 12 months</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
