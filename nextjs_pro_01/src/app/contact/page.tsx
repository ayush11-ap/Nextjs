"use client";
import { Meteors } from "@/components/ui/meteors";
import React from "react";

const page = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Meteors background */}
      <div className="absolute w-screen inset-0 z-0">
        <Meteors number={30} />
      </div>
      {/* Centered Contact Us content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
        <form className="bg-gray-900 bg-opacity-80 rounded-lg p-8 shadow-lg flex flex-col gap-4 min-w-[320px] w-full max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none resize-none"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
