"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-white text-2xl font-bold tracking-wide"
          >
            EDW
            <span className="inline-block -skew-x-12 transform">I</span>N
          </Link>
          <div className="flex gap-6">
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
        </div>
      </nav>
    </header>
  );
}
