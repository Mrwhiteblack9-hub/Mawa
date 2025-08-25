import FAQSection from '@/components/FAQSection';
import RoadmapSection from '@/components/RoadmapSection';
// ... autres imports

export default function Home() {
  return (
    <main>
      {/* ... autres sections de la page, comme le header, l'introduction, etc. */}

      <FAQSection />

      <RoadmapSection />

      {/* ... autres sections, comme le footer */}
    </main>
  );
}

