"use client";

import {useState} from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow relative">
      <div className="container mx-auto px-4 md:px-12 max-w-7xl flex items-center py-2">
        <Link href="/" className="mr-8">
          <Image
            src="/img/pov-bug.png"
            alt="POV Publishing"
            width={70}
            height={70}
            priority
          />
        </Link>
        <button
          className="ml-auto md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        <div className="hidden md:flex items-center nav-links">
          <Link href="/artists-writers" className="nav-link">
            Artists/Writers
          </Link>
          <Link href="/catalog" className="nav-link">
            Catalog
          </Link>
          <Link href="/book-podcast" className="nav-link">
            Book Podcast
          </Link>
          <Link href="/history-podcast" className="nav-link">
            History Podcast
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </div>
        {isMenuOpen && (
          <div className="absolute top-[100%] left-0 right-0 bg-white shadow-lg md:hidden z-50">
            <div className="flex flex-col px-4 py-2 container mx-auto">
              <Link
                href="/artists-writers"
                className="py-2"
                onClick={() => setIsMenuOpen(false)}>
                Artists/Writers
              </Link>
              <Link
                href="/catalog"
                className="py-2"
                onClick={() => setIsMenuOpen(false)}>
                Catalog
              </Link>
              <Link
                href="/book-podcast"
                className="py-2"
                onClick={() => setIsMenuOpen(false)}>
                Book Podcast
              </Link>
              <Link
                href="/history-podcast"
                className="py-2"
                onClick={() => setIsMenuOpen(false)}>
                History Podcast
              </Link>
              <Link
                href="/contact"
                className="py-2"
                onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
