import React from 'react';

const Skills: React.FC = () => {
  return (
    <div id="skills" className="container mx-auto pt-32 px-4">
      {/* Section Header */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 animate-bounce">Skills</h2>
        </div>
        <div>
          <p className="text-lg text-blue-900 leading-relaxed">
            I have experience working with a variety of technologies in the web development ecosystem. 
            Here are some of the key ones I specialize in:
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Skill Item */}
        {[
          { name: 'React', color: 'bg-red-500' },
          { name: 'TypeScript', color: 'bg-green-500' },
          { name: 'Next.js', color: 'bg-pink-500' },
          { name: 'Node.js', color: 'bg-yellow-500' },
          { name: 'Tailwind CSS', color: 'bg-orange-500' },
          { name: 'Git', color: 'bg-gray-500' },
        ].map((skill) => (
          <div
            key={skill.name}
            className={`${skill.color} p-6 text-center rounded-lg shadow-md hover:shadow-lg transition-shadow`}
          >
            <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
