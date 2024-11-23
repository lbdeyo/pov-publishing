"use client";

import {useState} from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#f5f1e8] relative w-full">
      <div className="flex items-center justify-between md:justify-start px-2 md:px-12 py-2 md:container md:mx-auto md:max-w-7xl">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/img/pov-bug.png"
            alt="POV Publishing"
            width={70}
            height={70}
            priority
          />
        </Link>
        <div className="hidden md:flex items-center ml-12">
          <Link href="/artists-writers" className="nav-link text-[1.5rem] mr-8">
            Artists/Writers
          </Link>
          <Link href="/catalog" className="nav-link text-[1.5rem] mr-8">
            Catalog
          </Link>
          <Link href="/book-podcast" className="nav-link text-[1.5rem] mr-8">
            Book Podcast
          </Link>
          <Link href="/history-podcast" className="nav-link text-[1.5rem] mr-8">
            History Podcast
          </Link>
          <Link href="/comics" className="nav-link text-[1.5rem] mr-8">
            Comics
          </Link>
          <Link href="/contact" className="nav-link text-[1.5rem]">
            Contact
          </Link>
        </div>
        <div className="md:hidden ml-auto">
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded"
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
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#f5f1e8] border-t">
          <div className="flex flex-col px-4 py-2">
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
              href="/comics"
              className="py-2"
              onClick={() => setIsMenuOpen(false)}>
              Comics
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
    </nav>
  );
};

export default Navbar;
