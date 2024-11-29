"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import {Menu, MenuButton, MenuItems, MenuItem} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";

const writers = [
  {name: "L.B. Deyo", href: "/writers/lbdeyo"},
  {name: "Milaka Falk", href: "/writers/milaka-falk"},
  {name: "W. Joe Hoppe", href: "/writers/w-joe-hoppe"},
  {name: "Juanice Myers", href: "/writers/juanice-myers"},
  {name: "Don Ryan", href: "/writers/don-ryan"},
  {name: "Roscoe Sweetwater", href: "/writers/roscoe-sweetwater"},
  // ... any other existing writers ...
];
const comics = [
  {name: "Shannon Wheeler", href: "/comics/shannon-wheeler"},
  {name: "Penny Van Horn", href: "/comics/penny-van-horn"},
  {name: "Lance Fever Myers", href: "/comics/lance-fever-myers"},
  {name: "Walt Holcombe", href: "/comics/walt-holcombe"},
  {name: "Mack White", href: "/comics/mack-white"},
];

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
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex items-center nav-link text-[1.5rem]">
                Writers
                <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
              </MenuButton>

              <MenuItems
                className="absolute z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                style={{backgroundColor: "var(--bg-primary)"}}>
                <div className="py-1">
                  {writers.map((writer) => (
                    <MenuItem key={writer.name}>
                      {({active}) => (
                        <Link
                          href={writer.href}
                          className={`${
                            active ? "bg-opacity-10 bg-gray-100" : ""
                          } block px-4 py-2 text-[1rem] nav-link`}>
                          {writer.name}
                        </Link>
                      )}
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex items-center nav-link text-[1.5rem]">
                Comics
                <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
              </MenuButton>

              <MenuItems
                className="absolute z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                style={{backgroundColor: "var(--bg-primary)"}}>
                <div className="py-1">
                  {comics.map((comic) => (
                    <MenuItem key={comic.name}>
                      {({active}) => (
                        <Link
                          href={comic.href}
                          className={`${
                            active ? "bg-opacity-10 bg-gray-100" : ""
                          } block px-4 py-2 text-[1rem] nav-link`}>
                          {comic.name}
                        </Link>
                      )}
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
            <Link href="/catalog" className="nav-link text-[1.5rem]">
              Catalog
            </Link>
            <Link
              href="/podcasts/book-podcast"
              className="nav-link text-[1.5rem]">
              Book Podcast
            </Link>
            <Link
              href="/podcasts/history-podcast"
              className="nav-link text-[1.5rem]">
              History Podcast
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
            <div className="space-y-2">
              <div className="nav-link text-[1.5rem]">Writers</div>
              <div className="pl-4 space-y-2">
                {writers.map((writer) => (
                  <Link
                    key={writer.name}
                    href={writer.href}
                    className="block nav-link text-[1.25rem]"
                    onClick={() => setIsMenuOpen(false)}>
                    {writer.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="nav-link text-[1.5rem]">Comics</div>
              <div className="pl-4 space-y-2">
                {comics.map((comic) => (
                  <Link
                    key={comic.name}
                    href={comic.href}
                    className="block nav-link text-[1.25rem]"
                    onClick={() => setIsMenuOpen(false)}>
                    {comic.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/catalog"
              className="nav-link text-[1.5rem]"
              onClick={() => setIsMenuOpen(false)}>
              Catalog
            </Link>
            <Link
              href="/podcasts/book-podcast"
              className="nav-link text-[1.5rem]"
              onClick={() => setIsMenuOpen(false)}>
              Book Podcast
            </Link>
            <Link
              href="/podcasts/history-podcast"
              className="nav-link text-[1.5rem]"
              onClick={() => setIsMenuOpen(false)}>
              History Podcast
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
