import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { FeaturedProof } from "@/components/featured-proof";
import { Services } from "@/components/services";
import { TechStack } from "@/components/tech-stack";
import { RemoteFit } from "@/components/remote-fit";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <FeaturedProof />
      <Services />
      <TechStack />
      <RemoteFit />
      <Contact />
      <Footer />
    </main>
  );
}
