export default function Tokenomics(){
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">Tokenomics</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold">Distribution</h3>
          <table className="w-full mt-4 text-sm text-white/80">
            <tbody>
              <tr><td>Liquidity (DEX)</td><td className="text-right">78%</td></tr>
              <tr><td>Vested</td><td className="text-right">2%</td></tr>
              <tr><td>Migrating suply</td><td className="text-right">20%</td></tr>
            </tbody>
          </table>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">MAWA token Parameters</h3>
          <ul className="mt-4 text-white/80">
            <li>Supply: 1,000,000,000</li>
            <li>Decimals: 9</li>
            <li>Mint authority: renounced </li>
            <li>LP lock: 12 months</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
