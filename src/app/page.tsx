import Hero from '@/components/Hero';
import About from '@/components/About';
import Publications from '@/components/Publications';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Awards from '@/components/Awards';
import Projects from '@/components/Projects';
import Teaching from '@/components/Teaching';
import CV from '@/components/CV';
import Contact from '@/components/Contact';
import { sections } from '@/content/site';

/**
 * The home page. Section order follows the navigation; each block is gated on
 * the corresponding switch in src/content/site.ts.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      {sections.about && <About />}
      {sections.publications && <Publications />}
      {sections.experience && <Experience />}
      {sections.education && <Education />}
      {sections.awards && <Awards />}
      {sections.projects && <Projects />}
      {sections.teaching && <Teaching />}
      {sections.cv && <CV />}
      {sections.contact && <Contact />}
    </>
  );
}
