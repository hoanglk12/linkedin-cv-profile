'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
];

const SOCIAL_LINKS = [
  { href: 'mailto:hoanglk12@gmail.com', label: 'Email', icon: Mail },
  {
    href: 'https://www.linkedin.com/in/hoang-lincoln-pham-71323612a/',
    label: 'LinkedIn Profile',
    icon: Linkedin,
  },
  { href: 'https://github.com/hoanglk12', label: 'GitHub Profile', icon: Github },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0].id);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    // The last section can be too short to ever enter the observer's
    // rootMargin band once the page bottoms out, so this takes priority
    // over intersection results whenever the user has scrolled to the end.
    const isScrolledToBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolledToBottom()) {
          setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].id);
          return;
        }
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (isScrolledToBottom()) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].id);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Image
          src="/Profile_Portrait.jpg"
          alt="Hoang (Lincoln) Pham"
          width={80}
          height={80}
          className="mb-4 rounded-full object-cover ring-2 ring-slate-700"
          unoptimized
          priority
        />
        <h1 className="text-4xl font-bold tracking-tight text-slate-100">
          <a href="#about">Hoang (Lincoln) Pham</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium text-slate-200">
          Sr Quality Assurance Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          I build confidence in software through rigorous manual and automation testing.
        </p>

        <nav className="hidden lg:block mt-16">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                        isActive ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-200'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex items-center gap-5 lg:mt-0">
        {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={label}
            className="text-slate-400 hover:text-teal-300 transition-colors duration-200"
          >
            <Icon className="size-5" />
          </a>
        ))}
        <Button
          nativeButton={false}
          variant="outline"
          size="sm"
          className="ml-2 border-teal-300/40 bg-transparent text-teal-300 hover:bg-teal-300/10 hover:text-teal-300 dark:border-teal-300/40 dark:bg-transparent dark:text-teal-300 dark:hover:bg-teal-300/10"
          render={<a href="/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download CV as PDF" />}
        >
          Download CV
        </Button>
      </div>
    </header>
  );
}
