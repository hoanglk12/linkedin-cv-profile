import Sidebar from '@/components/Sidebar';
import Introduction from '@/components/Introduction';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl bg-slate-900 px-6 py-12 sm:px-12 sm:py-16 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />

        <main className="pt-16 lg:w-1/2 lg:py-24">
          <section id="about" className="mb-24 scroll-mt-16">
            <SectionHeading>About</SectionHeading>
            <Introduction />
          </section>

          <section id="experience" className="mb-24 scroll-mt-16">
            <SectionHeading>Experience</SectionHeading>
            <Experience />
          </section>

          <section id="projects" className="mb-24 scroll-mt-16">
            <SectionHeading>Projects</SectionHeading>
            <Projects />
          </section>

          <section id="certifications" className="mb-24 scroll-mt-16">
            <SectionHeading>Certifications</SectionHeading>
            <Certifications />
          </section>

          <footer className="text-sm text-slate-500">
            © {new Date().getFullYear()} Hoang (Lincoln) Pham. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}
