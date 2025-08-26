// components/FAQSection.jsx
import React from 'react';

// Ce composant affiche une seule question/réponse de la FAQ.
const FAQItem = ({ question, answer }) => {
  return (
    <div className="border-b border-gray-700 py-6">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </div>
  );
};

// Ce composant affiche la section complète de la FAQ.
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
    <section className="py-16 bg-gray-900 text-white">
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
