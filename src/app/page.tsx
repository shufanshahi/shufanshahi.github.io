import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Publications from '@/components/Publications';
import Education from '@/components/Education';
import News from '@/components/News';
import Projects from '@/components/Projects';
import Teaching from '@/components/Teaching';
import Writing from '@/components/Writing';
import CV from '@/components/CV';
import Contact from '@/components/Contact';
import { sections } from '@/content/site';
import { getAllPosts } from '@/lib/blog';

/**
 * The home page. Section order follows the navigation; each block is gated on
 * the corresponding switch in src/content/site.ts.
 */
export default function HomePage() {
  const posts = sections.blog ? getAllPosts().slice(0, 3) : [];

  return (
    <>
      <Hero />
      {sections.about && <About />}
      {sections.research && <Research />}
      {sections.publications && <Publications />}
      {sections.education && <Education />}
      {sections.news && <News />}
      {sections.projects && <Projects />}
      {sections.teaching && <Teaching />}
      {sections.blog && posts.length > 0 && <Writing posts={posts} />}
      {sections.cv && <CV />}
      {sections.contact && <Contact />}
    </>
  );
}
