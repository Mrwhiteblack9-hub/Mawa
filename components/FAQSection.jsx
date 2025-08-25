import React, { useState } from 'react';

// This component displays a single FAQ item with a collapsible answer.
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-600 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-white">{question}</h3>
        <span className="text-2xl font-bold transition-transform duration-300 transform">
          {isOpen ? '−' : '+'}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-300 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

// This is the main component for the FAQ section.
const FAQSection = () => {
  const faqs = [
    {
      question: "Why choose MAWA over other memecoins?",
      answer: "MAWA stands out with its premium branding, serious long-term vision, and strong crocodile identity. Unlike other memecoins, we combine meme culture with professional execution, locked liquidity for 12 months, and transparent tokenomics. Our crocodile mascot represents strength, patience, and apex predator status in the crypto ecosystem."
    },
    {
      question: "What makes crocodiles special for a memecoin?",
      answer: "Crocodiles are the ultimate survivors - they've existed for over 200 million years, representing resilience and adaptability. Just like successful crypto projects, crocodiles are patient hunters who strike at the perfect moment. They're apex predators with unmatched strength, making them the perfect symbol for a serious memecoin that aims to dominate the market."
    },
    {
      question: "When exactly is the launch date?",
      answer: "MAWA is set to launch on Jupiter by January 15th, 2025, or potentially earlier to capitalize on Bitcoin's bullish momentum. We're closely monitoring market conditions to ensure optimal launch timing. Follow our social channels for the exact announcement and real-time updates."
    },
    {
      question: "Is the liquidity really locked for 12 months?",
      answer: "Yes, absolutely. We're using Jupiter Studio's built-in liquidity lock mechanism for a full 12 months. This ensures that the development team cannot rug pull and provides maximum security for our community. The lock will be publicly verifiable on-chain, demonstrating our commitment to long-term success."
    },
    {
      question: "How can I join the MAWA community?",
      answer: "Join our growing community on Twitter (@Mawathecroco) and Telegram (t.me/mawasolana). We regularly share updates, memes, and engage with our community members. Early supporters will be rewarded with exclusive content and potentially special roles in our upcoming Discord server."
    },
    {
      question: "What are the tokenomics and fee structure?",
      answer: "MAWA has a total supply of 1 billion tokens with a 2% transaction tax. This modest tax helps fund marketing efforts and community development while remaining competitive. The liquidity is locked for 12 months, and we're using Jupiter Studio's transparent launch mechanism for maximum trust and security."
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

