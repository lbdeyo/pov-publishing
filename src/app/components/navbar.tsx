"use client";

import {useState} from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand">POV Publishing</div>

      <button
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="hamburger"></span>
      </button>

      <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link href="/artists" className="dropdown-trigger">
            Artists/Writers
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="/artists/visual">Visual Artists</Link>
            </li>
            <li>
              <Link href="/artists/writers">Writers</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/catalog">Catalog</Link>
        </li>
        <li>
          <Link href="/book-podcast">Book Podcast</Link>
        </li>
        <li>
          <Link href="/history-podcast">History Podcast</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
