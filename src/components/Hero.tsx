import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200&h=200"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-lg"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Mobile & Game Developer
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Crafting exceptional mobile experiences with Flutter and creating immersive games with Unity
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors"
        >
          View My Work
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}