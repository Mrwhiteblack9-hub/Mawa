<<<<<<< HEAD
<<<<<<< HEAD
// components/FAQSection.jsx
import React from 'react';

// Ce composant affiche une seule question/réponse de la FAQ.
=======
import React from 'react';

>>>>>>> 8994ef1 (Initial commit of the complete MAWA site)
const FAQItem = ({ question, answer }) => {
  return (
    <div className="border-b border-gray-700 py-6">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </div>
  );
};

<<<<<<< HEAD
// Ce composant affiche la section complète de la FAQ.
=======
>>>>>>> 8994ef1 (Initial commit of the complete MAWA site)
const FAQSection = () => {
  const faqItems = [
    {
      question: 'Qu’est-ce que MAWA ?',
      answer: 'MAWA est un memecoin transparent sur la blockchain Solana, conçu pour une communauté passionnée. Notre but est de devenir l’un des memecoins les plus populaires de la communauté Solana.'
    },
    {
      question: 'Où puis-je acheter des tokens MAWA ?',
      answer: 'Vous pouvez acheter des tokens MAWA sur des exchanges décentralisés (DEX) sur la blockchain Solana, comme Jupiter et Raydium, une fois que la pièce sera disponible.'
    },
    {
      question: 'Quelle est la feuille de route de MAWA ?',
      answer: 'Notre feuille de route est divisée en plusieurs phases, de la construction de la communauté à des partenariats stratégiques et des listings sur des plateformes d’échange de premier plan. Consultez notre section "Feuille de route" pour plus de détails.'
    },
    {
      question: 'L’équipe de MAWA est-elle publique ?',
      answer: 'L’équipe est anonyme pour l’instant, mais nous nous engageons à la transparence et à la communication ouverte avec notre communauté. Nous travaillons à temps plein sur le projet et sommes actifs sur toutes nos plateformes sociales.'
    },
    {
      question: 'Quelle est l’utilité du token MAWA ?',
      answer: 'MAWA est un memecoin avant tout, mais nous explorons des utilités à long terme comme un écosystème de récompenses et des partenariats pour des plateformes de paiement B2B.'
    },
  ];

  return (
<<<<<<< HEAD
    <section className="py-16 bg-gray-900 text-white">
=======
    <section id="faq" className="py-16 bg-gray-900 text-white">
>>>>>>> 8994ef1 (Initial commit of the complete MAWA site)
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
=======
'use client'
import { useState } from 'react'

const faqs = [
  { q: "Qu'est-ce que MAWA ?", a: "Un memecoin sur Solana avec une identité forte (crocodile), branding premium et vision long terme." },
  { q: "Pourquoi choisir MAWA plutôt qu'un autre memecoin ?", a: "MAWA se distingue par un branding premium, vision long terme, liquidité verrouillée 12 mois et tokenomics transparents." },
  { q: "Pourquoi le crocodile comme mascotte ?", a: "Les crocodiles symbolisent résistance, patience et puissance — qualités que MAWA vise à incarner." },
  { q: "Quelle est la date exacte du lancement ?", a: "MAWA est planifié pour un lancement sur Jupiter le 15 janvier 2025. Suivez nos canaux pour l'annonce exacte." },
  { q: "La liquidité est-elle verrouillée 12 mois ?", a: "Oui. La liquidité sera verrouillée 12 mois via un mécanisme vérifiable on-chain (Jupiter Studio)."},
  { q: "Quels sont la tokenomics et la taxe ?", a: "Supply: 1,000,000,000. Distribution: Liquidity 78%, Vested 2%, Migrating supply 20%. Taxe: 2%. LP lock: 12 months." },
  { q: "Comment rejoindre la communauté ?", a: "Rejoins-nous sur X: https://x.com/Mawathecroco et Telegram: https://t.me/mawasolana." }
]

function Item({ q, a, i, open, onToggle }) {
  return (
    <div className="border-b border-white/10">
      <button onClick={onToggle} className="w-full py-4 flex items-center justify-between text-left">
        <span className="font-semibold">{q}</span>
        <span className="text-white/60">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="pb-4 text-white/80">{a}</p>}
    </div>
  )
}

export default function FAQSection(){
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <section id="faq">
      <h2 className="text-4xl font-bold mb-6">FAQ</h2>
      <div className="card divide-y divide-white/10">
        {faqs.map((f, i)=>(
          <Item
            key={i}
            i={i}
            q={f.q}
            a={f.a}
            open={openIndex===i}
            onToggle={()=> setOpenIndex(openIndex===i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}
>>>>>>> 1ddba00 (Initial commit of the complete MAWA website)
