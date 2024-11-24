import { Navbar } from "@/components/Navbar";
import { About } from "@/pages/About";
import { PresentationSection } from "@/pages/Presentation";

export default function Home() {
  return (
    <main>
      <Navbar />
      <PresentationSection />
      <About />
    </main>
  );
}
