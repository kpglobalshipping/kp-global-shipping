"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            src="/kp-logo.png"
            alt="KP Global Shipping"
            width={65}
            height={65}
            style={{ width: "65px", height: "auto" }}
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

        <nav className="hidden lg:flex gap-8">

          {navItems.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-yellow-400 transition font-medium"
            >
              {item.name}
            </a>

          ))}

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