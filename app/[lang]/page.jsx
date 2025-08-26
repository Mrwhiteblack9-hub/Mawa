<<<<<<< HEAD
// Ce composant affiche votre page d'accueil.
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
// Utilisation de chemins d'importation relatifs pour éviter l'erreur de module non trouvé.
import HeroSection from '../../../components/HeroSection';
import AboutSection from '../../../components/AboutSection';
import RoadmapSection from '../../../components/RoadmapSection';
import TokenomicsSection from '../../../components/TokenomicsSection';
import FAQSection from '../../../components/FAQSection';
import SocialSection from '../../../components/SocialSection';
import Footer from '../../../components/Footer';
=======
import Head from 'next/head';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import RoadmapSection from '../../components/RoadmapSection';
import TokenomicsSection from '../../components/TokenomicsSection';
import FAQSection from '../../components/FAQSection';
import SocialSection from '../../components/SocialSection';
import Footer from '../../components/Footer';
>>>>>>> 8994ef1 (Initial commit of the complete MAWA site)

const HomePage = () => {
  return (
    <>
      <Head>
        <title>MAWA - The People's Coin</title>
        <meta name="description" content="MAWA - The People's Coin on Solana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-900 text-white min-h-screen font-sans">
<<<<<<< HEAD
        {/* Barre de navigation - on suppose que c'est un composant séparé */}
=======
        {/* Barre de navigation */}
>>>>>>> 8994ef1 (Initial commit of the complete MAWA site)
        {/* <Navbar /> */}

        <main>
          <HeroSection />
          <AboutSection />
          <RoadmapSection />
          <TokenomicsSection />
          <FAQSection />
          <SocialSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
