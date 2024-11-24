"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      // Use saved preference if it exists
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Otherwise check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const systemTheme = prefersDark ? "dark" : "light";
      setTheme(systemTheme);
      document.documentElement.setAttribute("data-theme", systemTheme);
    }
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (main) {
      if (isMenuOpen) {
        main.style.paddingTop = "420px"; // Increased from 400px
      } else {
        main.style.paddingTop = "96px"; // Regular padding
      }
    }
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save preference
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 shadow-md z-50"
      style={{backgroundColor: "var(--nav-bg)"}}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center md:space-x-8 py-2">
          <Link
            href="/"
            className="flex-shrink-0"
            onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/img/pov-bug.png"
              alt="POV Publishing"
              width={70}
              height={70}
              priority
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/artists-writers" className="nav-link text-[1.5rem]">
              Artists/Writers
            </Link>
            <Link href="/catalog" className="nav-link text-[1.5rem]">
              Catalog
            </Link>
            <Link href="/book-podcast" className="nav-link text-[1.5rem]">
              Book Podcast
            </Link>
            <Link href="/history-podcast" className="nav-link text-[1.5rem]">
              History Podcast
            </Link>
            <Link href="/comics" className="nav-link text-[1.5rem]">
              Comics
            </Link>
            <Link href="/contact" className="nav-link text-[1.5rem]">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-2 ml-auto md:ml-0">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={theme === "dark"}
                onChange={toggleTheme}
                aria-label="Toggle dark mode"
              />
              <div
                className="w-11 h-6 bg-gray-400 peer-focus:outline-none rounded-full peer 
                peer-checked:after:translate-x-full peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                after:bg-white after:border-gray-300 after:border after:rounded-full 
                after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
            </label>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="md:hidden border-t"
          style={{backgroundColor: "var(--bg-primary)"}}>
          <div className="flex flex-col px-4 py-6 space-y-6">
            <Link
              href="/artists-writers"
              className="nav-link text-[1.5rem]"
              onClick={() => setIsMenuOpen(false)}>
              Artists/Writers
            </Link>
            <Link
              href="/catalog"
              className="nav-link text-[1.5rem]"
              onClick={() => setIsMenuOpen(false)}>
              Catalog
            </Link>
            <Link
              href="/book-podcast"
              className="nav-link text-[1.5rem]"
              onClick={() => setIsMenuOpen(false)}>
              Book Podcast
            </Link>
            <Link
              href="/history-podcast"
              className="nav-link text-[1.5rem]"
              onClick={() => setIsMenuOpen(false)}>
              History Podcast
            </Link>
            <Link
              href="/comics"
              className="nav-link text-[1.5rem]"
              onClick={() => setIsMenuOpen(false)}>
              Comics
            </Link>
            <Link
              href="/contact"
              className="nav-link text-[1.5rem]"
              onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
