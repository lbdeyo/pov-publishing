"use client";

import {useEffect, useState} from "react";

interface Section {
  id: string;
  title: string;
}

interface ScrollSpyProps {
  sections: Section[];
}

export default function ScrollSpy({sections}: ScrollSpyProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
  };

  return (
    <nav className="hidden lg:block fixed left-8 top-32 w-64">
      <div
        className="text-xl mb-4 font-semibold"
        style={{color: "var(--text-primary)"}}>
        Contents
      </div>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => scrollToSection(e, section.id)}
              style={{color: "var(--text-primary)"}}
              className={`
                block text-lg transition-colors duration-200
                ${
                  activeSection === section.id
                    ? "font-medium"
                    : "opacity-75 hover:opacity-100"
                }
              `}>
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
