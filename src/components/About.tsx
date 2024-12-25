import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div id="about-us" className="pt-32 container mx-auto px-4">
      {/* About Us Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-800 animate-bounce">About Us</h1>
        <p className="text-gray-200 text-lg mt-4">
          Learn more about who we are, what we do, and our mission to make a difference.
        </p>
      </div>

      {/* Mission and Values Section */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-4xl font-bold text-blue-800 mb-4 animate-pulse">Our Mission</h2>
          <p className="text-blue-900 text-lg leading-relaxed">
            Our mission is to provide top-notch services and products that improve lives. We are
            dedicated to innovation, customer satisfaction, and making a positive impact on the
            world.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-800 mb-4 animate-pulse">Our Values</h2>
          <ul className="list-disc pl-5 text-bue-700 text-lg space-y-2">
            <li>Commitment to excellence</li>
            <li>Integrity and transparency</li>
            <li>Innovation and creativity</li>
            <li>Customer-first approach</li>
            <li>Environmental responsibility</li>
          </ul>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-8 animate-bounce">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Sadia Siddique', role: 'CEO & Founder', img: '/images/team1.jpg' },
            { name: 'Moatar', role: 'Lead Developer', img: '/images/team2.jpg' },
            { name: 'Haziq', role: 'Project Manager', img: '/images/team3.jpg' },
          ].map((member) => (
            <div key={member.name} className="bg-blue-800 p-8 rounded-lg shadow-md">
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-black-800">{member.name}</h3>
              <p className="text-white-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
