export default function Roadmap(){
  const items = [
    {title: 'Phase 1 - Launch', points: ['SPL Token Deployment', 'Website & Branding', 'LP on Jupiter']},
    {title: 'Phase 2 - Traction', points: ['CMC/CG Listing', 'KOL Campaigns', 'Community Contests']},
    {title: 'Phase 3 - Expansion', points: ['Partnerships', 'NFTs / Mini-games']},
    {title: 'Phase 4 - Sustainability', points: ['Light Governance', 'IRL Events']}
  ]
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">Roadmap</h2>
      <div className="mt-8 space-y-6">
        {items.map((it, idx)=>(
          <div className="card" key={idx}>
            <h3 className="text-xl font-semibold">{it.title}</h3>
            <ul className="mt-3 list-disc pl-5 text-white/80">
              {it.points.map((p,i)=>(<li key={i}>{p}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
