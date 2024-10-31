import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Portfolio</h1>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-indigo-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block hover:text-indigo-600 transition-colors">Home</a>
            <a href="#projects" className="block hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="block hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#contact" className="block hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}