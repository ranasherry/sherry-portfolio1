import React from 'react';
import { Smartphone, Gamepad, Code, Database, Palette, Cloud } from 'lucide-react';

const skills = [
  {
    category: 'Mobile Development',
    icon: Smartphone,
    items: ['Flutter', 'Dart', 'Provider', 'Bloc', 'Firebase']
  },
  {
    category: 'Game Development',
    icon: Gamepad,
    items: ['Unity', 'C#', '3D Modeling', 'Game Design', 'Animation']
  },
  {
    category: 'Programming',
    icon: Code,
    items: ['JavaScript', 'TypeScript', 'Python', 'Git']
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'MongoDB', 'REST APIs', 'GraphQL']
  },
  {
    category: 'UI/UX Design',
    icon: Palette,
    items: ['Figma', 'Adobe XD', 'Material Design', 'Responsive Design']
  },
  {
    category: 'Cloud Services',
    icon: Cloud,
    items: ['AWS', 'Firebase', 'Google Cloud', 'Azure']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-8 h-8 text-indigo-600" />
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}