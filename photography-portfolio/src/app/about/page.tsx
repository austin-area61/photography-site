"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative bg-black text-white py-20 px-4 sm:px-8 lg:px-16">
      {/* Section container */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Meet Your Photographer
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-4">
            Hello, I’m <span className="font-semibold text-white">Edrulo</span>,
            a photographer based in Sydney, Australia passionate about capturing
            moments with precision and creativity. My approach blends bold
            storytelling with minimalist aesthetics, bringing out the essence of
            every subject.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 mb-6">
            Driven by curiosity and ambition, I specialize in creating images
            that resonate on a personal and universal level, whether it’s a
            portrait, a breathtaking landscape, or an unrepeatable moment in
            time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/gallery"
              className="px-6 sm:px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm sm:text-base"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-6 sm:px-8 py-3 border border-white/30 hover:bg-white/10 rounded-lg transition-colors text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-80 sm:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/personal-portrait.jpg" // Replace with your image path
              alt="Photographer Portrait"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
          </div>
        </div>
      </div>
    </section>
  );
}
