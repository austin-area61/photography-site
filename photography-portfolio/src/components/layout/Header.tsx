"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-white text-2xl font-bold tracking-wide z-50"
          >
            EDW
            <span className="inline-block -skew-x-12 transform">I</span>N
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <Link
              href="/gallery"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-purple-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black/90 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <Link
                href="/gallery"
                className="text-white text-2xl hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="text-white text-2xl hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white text-2xl hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
