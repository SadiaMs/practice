import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container mx-auto px-4">
      {/* Contact Section Header */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-gray-800">Get in touch</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-purple-100 p-8 rounded-lg shadow-xl">
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-blue-600 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-blue-300 rounded focus:outline-dotted focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-blue-600 font-semibold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-blue-600 rounded focus:outline-dotted focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-blue-600 font-semibold">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 border border-blue-600 rounded focus:outline-dotted focus:ring-2 focus:ring-yellow-500"
                placeholder="Write your message here"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded hover:bg-yellow-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
