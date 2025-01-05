"use client";

import React, { useState } from "react";
import Image from "next/image";
import { categories, ImageCategory } from "./galleryConfig";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Category Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories
            .find((cat) => cat.id === activeCategory)
            ?.images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg aspect-square"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
