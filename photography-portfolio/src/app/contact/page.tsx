"use client";

import React, { useState } from "react";

export default function Contact() {
  const [currency, setCurrency] = useState("KSH");

  return (
    <section className="relative bg-black text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">
          Let's Work Together
        </h2>

        {/* Social Links */}
        <div className="mb-8 flex justify-center gap-6 text-gray-400">
          <a
            href="https://instagram.com/yourusername" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/yourphonenumber" // Replace with WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            WhatsApp
          </a>
          <a
            href="mailto:yourname@example.com" // Replace with email link
            className="hover:text-white"
          >
            Email
          </a>
          <a
            href="https://twitter.com/yourusername" // Replace with X (Twitter) link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            X
          </a>
        </div>

        {/* Contact Form */}
        <form
          action="/api/contact" // Backend API endpoint
          method="POST"
          className="space-y-6"
        >
          <div className="flex flex-col gap-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="bg-gray-800 border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:border-purple-600"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="bg-gray-800 border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:border-purple-600"
              required
            />

            {/* Budget */}
            <div className="flex gap-4 items-center">
              <select
                name="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-gray-800 border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:border-purple-600"
              >
                <option value="KSH">KSH</option>
                <option value="AUD">AUD</option>
                <option value="USD">USD</option>
              </select>
              <input
                type="number"
                name="budget"
                placeholder="Your Budget"
                className="bg-gray-800 border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:border-purple-600 w-full"
                required
              />
            </div>

            {/* Type of Shoot */}
            <select
              name="shootType"
              className="bg-gray-800 border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:border-purple-600"
              required
            >
              <option value="" disabled selected>
                Type of Shoot
              </option>
              <option value="Portrait">Portrait</option>
              <option value="Wedding">Wedding</option>
              <option value="Landscape">Landscape</option>
              <option value="Event">Event</option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Tell me more about your vision..."
              rows={5}
              className="bg-gray-800 border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:border-purple-600"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg text-sm sm:text-base font-medium transition-colors"
          >
            Place Your Booking
          </button>
        </form>
      </div>
    </section>
  );
}
