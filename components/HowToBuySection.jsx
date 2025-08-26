export default function HowToBuySection({ buyUrl }) {
  const steps = [
    { title: '1) Installer un wallet', text: 'Installez Phantom (extension ou mobile) et sauvegardez votre seed phrase hors ligne.' },
    { title: '2) Approvisionner en SOL', text: 'Achetez du SOL sur un exchange et transférez-le vers votre wallet.' },
    { title: '3) Se rendre sur Jupiter', text: 'Ouvrez le lien puis connectez votre wallet.' },
    { title: '4) Swap SOL → MAWA', text: 'Sélectionnez la paire SOL → MAWA et confirmez la transaction.' },
    { title: '5) Vérifier le token', text: 'Ajoutez MAWA à votre wallet si besoin et vérifiez la transaction on-chain.' }
  ]

  return (
    <section id="how-to-buy">
      <h2 className="text-4xl font-bold mb-6">Comment acheter</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <ol className="list-decimal pl-6 space-y-2 text-white/80">
            {steps.map((s,i)=>(<li key={i}><span className="font-semibold">{s.title}</span> — {s.text}</li>))}
          </ol>
          <div className="mt-6">
            <a href={buyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Acheter sur Jupiter</a>
          </div>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-2">Conseils de sécurité</h3>
          <ul className="list-disc pl-5 text-white/80 space-y-2">
            <li>Ne partagez jamais votre seed phrase.</li>
            <li>Vérifiez l’URL et l’adresse du contrat avant de swapper.</li>
            <li>Commencez par un petit montant pour tester.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
