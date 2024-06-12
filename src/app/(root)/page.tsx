import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Hero from "@/components/shared/Hero";
import Offer from "@/components/shared/Offer";
import Projects from "@/components/shared/Projects";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <section>
      <Hero />
      <About />
      <Separator />
      <Projects />
      <Separator />
      <Offer />
      <Separator />
      <Contact />
    </section>
  );
}
