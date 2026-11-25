import { Navbar } from '@/components/Navbar';
import { ArenaLanding } from '@/components/ArenaLanding';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ArenaLanding />
      <FloatingWhatsApp />
    </>
  );
}
