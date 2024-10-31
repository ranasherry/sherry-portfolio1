import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            I'm always open to new opportunities and interesting projects.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center justify-center p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <Mail className="w-6 h-6 text-purple-600 mr-3" />
              <span className="text-gray-800">your.email@example.com</span>
            </a>
            
            <a
              href="https://linkedin.com"
              className="flex items-center justify-center p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-purple-600 mr-3" />
              <span className="text-gray-800">LinkedIn Profile</span>
            </a>
            
            <a
              href="https://github.com"
              className="flex items-center justify-center p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <Github className="w-6 h-6 text-purple-600 mr-3" />
              <span className="text-gray-800">GitHub Profile</span>
            </a>
            
            <a
              href="https://twitter.com"
              className="flex items-center justify-center p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <Twitter className="w-6 h-6 text-purple-600 mr-3" />
              <span className="text-gray-800">Twitter Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}