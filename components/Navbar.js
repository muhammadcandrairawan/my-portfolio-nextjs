"use client";
import { useEffect, useState } from "react";

export default function Navbar({ sections, containerId }) {
  const [active, setActive] = useState(sections[0].id);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;

      // Sticky aktif setelah scroll hero
      setIsSticky(scrollTop > 120);

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const offsetTop = el.offsetTop;
        const offsetHeight = el.offsetHeight;

        if (
          scrollTop >= offsetTop - 100 &&
          scrollTop < offsetTop + offsetHeight - 100
        ) {
          setActive(section.id);
        }
      });
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [sections, containerId]);

  const scrollToSection = (id) => {
    const container = document.getElementById(containerId);
    const el = document.getElementById(id);
    if (!container || !el) return;

    container.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`
        ${isSticky ? "sticky top-0" : "relative"}
        z-50
        transition-all duration-300
        backdrop-blur-md bg-white/80
        ${isSticky ? "border-b border-slate-200" : ""}
      `}
    >
      <nav className="flex justify-center gap-3 py-3 flex-wrap">
        {sections.map((section) => {
          const isActive = active === section.id;

          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`
                text-sm font-medium px-4 py-2 rounded-full
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-100"
                }
              `}
            >
              {section.name}
            </button>
          );
        })}
      </nav>
    </header>
  );
}