"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Technical", href: "#technical" },
    { name: "Port Info", href: "#ports" },
    { name: "Company Profile", href: "#company-profile" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-950/95 backdrop-blur-md shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}

        <div className="flex items-center gap-4">

          <Image
            src="/images/kp-logo.png"
            alt="KP Global Shipping"
            width={65}
            height={65}
            className="w-[65px] h-[65px] object-cover rounded-full" 
          />

          <div>

            <h1 className="text-white font-bold text-xl">
              KP GLOBAL SHIPPING
            </h1>

            <p className="text-yellow-400 text-xs tracking-widest uppercase">
              Quick, Prompt, and Stand-beside YOU
            </p>

          </div>

        </div>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">

  <a
    href="#"
    className="text-white hover:text-yellow-400 transition font-medium"
  >
    Home
  </a>

  {/* About Dropdown */}

  <div className="relative">

    <button
      onClick={() => setAboutOpen(!aboutOpen)}
      className="text-white hover:text-yellow-400 transition font-medium flex items-center gap-1"
    >
      About
      <span className="text-xs">
        {aboutOpen ? "▲" : "▼"}
      </span>
    </button>

    {aboutOpen && (

      <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">

        <a
          href="/company#ceo-message"
          className="block px-5 py-4 text-blue-950 hover:bg-blue-950 hover:text-yellow-400 transition"
          onClick={() => setAboutOpen(false)}
        >
          Message from CEO
        </a>

        <a
          href="/company"
          className="block px-5 py-4 text-blue-950 hover:bg-blue-950 hover:text-yellow-400 transition"
          onClick={() => setAboutOpen(false)}
        >
          Company Profile
        </a>

        <a
          href="/company#foundation"
          className="block px-5 py-4 text-blue-950 hover:bg-blue-950 hover:text-yellow-400 transition"
          onClick={() => setAboutOpen(false)}
        >
          Vision, Mission & Values
        </a>

        <a
          href="/company#leadership"
          className="block px-5 py-4 text-blue-950 hover:bg-blue-950 hover:text-yellow-400 transition"
          onClick={() => setAboutOpen(false)}
        >
          Leadership
        </a>

        <a
          href="/company#timeline"
          className="block px-5 py-4 text-blue-950 hover:bg-blue-950 hover:text-yellow-400 transition"
          onClick={() => setAboutOpen(false)}
        >
          Company Journey
        </a>

      </div>

    )}

  </div>

  {/* Remaining Navigation */}

  <a
    href="#services"
    className="text-white hover:text-yellow-400 transition font-medium"
  >
    Services
  </a>

  <a
    href="#technical"
    className="text-white hover:text-yellow-400 transition font-medium"
  >
    Technical
  </a>

  <a
    href="#ports"
    className="text-white hover:text-yellow-400 transition font-medium"
  >
    Port Info
  </a>

  <a
    href="#company-profile"
    className="text-white hover:text-yellow-400 transition font-medium"
  >
    Company Profile
  </a>

  <a
    href="#gallery"
    className="text-white hover:text-yellow-400 transition font-medium"
  >
    Gallery
  </a>

  <a
    href="#contact"
    className="text-white hover:text-yellow-400 transition font-medium"
  >
    Contact
  </a>

</nav>

        {/* Mobile Button */}

        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-blue-950 border-t border-blue-900">

          {navItems.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="block px-6 py-4 text-white hover:bg-blue-900"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>

          ))}

        </div>

      )}

    </header>
  );
}