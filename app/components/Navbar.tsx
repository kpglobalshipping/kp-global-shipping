import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <div className="flex items-center gap-3">
          <Image
            src="/kp-logo.png"
            alt="KP Global Shipping"
            width={55}
            height={55}
          />

          <div>
            <h1 className="font-bold text-lg text-blue-900">
              KP GLOBAL SHIPPING INC.
            </h1>

            <p className="text-xs text-gray-500">
              Philippine Shipping Agency
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex gap-8 font-semibold text-blue-900">
          <a href="/" className="hover:text-yellow-500">
            Home
          </a>

          <a href="#about" className="hover:text-yellow-500">
            About
          </a>

          <a href="#services" className="hover:text-yellow-500">
            Services
          </a>

          <a href="#coverage" className="hover:text-yellow-500">
            Coverage
          </a>

          <a href="#contact" className="hover:text-yellow-500">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}