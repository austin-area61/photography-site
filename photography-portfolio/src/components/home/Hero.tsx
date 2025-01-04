"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    "/images/roadrage.jpg",
    "/images/totallongshot.jpg",
    "/images/trainedu   .jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Full-screen carousel */}
      <div className="absolute inset-0">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Long exposure ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={100}
            />
          </div>
        ))}
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6 leading-tight text-white">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Capturing
          </span>
          <span className="block">Moments in Time</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl text-gray-300">
          Where journalistic precision meets cosmic wonder, driven by the rhythm
          of hardstyle
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 sm:px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-white text-sm sm:text-base">
            View Gallery
          </button>
          <button className="px-6 sm:px-8 py-3 border border-white/30 hover:bg-white/10 rounded-lg transition-colors text-white text-sm sm:text-base">
            About Me
          </button>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
