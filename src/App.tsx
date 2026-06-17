import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Timeline } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollTop } from "@/components/portfolio/ScrollTop";

export default function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Certifications />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
        </main>
        <Footer />
        <ScrollTop />
      </div>
    </I18nProvider>
  );
}
