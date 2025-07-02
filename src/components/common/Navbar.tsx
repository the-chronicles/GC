"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="px-3 md:px-5 py-7 container mx-auto">
      <nav className="flex items-center justify-between bg-white px-3 md:px-5">
        {/* Logo */}
        <a href="/">
          <div className="flex items-center gap-2">
            <img
              src="https://giftcardsupply.cards/wp-content/uploads/2024/03/Logo-3.svg"
              alt="Logo"
              className="w-16 md:w-20"
            />
            <div className="text-2xl font-medium">GiftCardSupply</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5 md:gap-10">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 font-medium text-lg"
          >
            Shop
          </a>
          <a
            href="#verify"
            className="rounded-full bg-[#9fe870] px-4 py-2 text-lg text-black font-medium"
          >
            Verify GiftCard Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#9fe870] py-4 px-6 space-y-4">
          <a
            href="#"
            onClick={closeMenu}
            className="block text-black text-lg font-semibold"
          >
            Shop
          </a>
          <a
            href="#verify"
            onClick={closeMenu}
            className="block text-black text-lg font-semibold"
          >
            Verify GiftCard Now
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
