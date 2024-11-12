'use client'; // Client-side rendering

import Navbar from "@/components/navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black transition-all duration-300">
      
      {/* Navbar Component */}
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center py-16 px-6">
        <h1 className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-extrabold text-4xl sm:text-5xl md:text-6xl text-center mb-8 hover:scale-105 transition-all duration-300 ease-in-out">
          Contact Us
        </h1>
        
        {/* Contact Information Section */}
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200 max-w-4xl w-full">
          <p className="text-lg font-semibold text-center mb-4">
            We would love to hear from you! Please fill out the form or reach out through the contact details below.
          </p>

          <form className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Full Name"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Email Address"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="font-medium">Message</label>
              <textarea
                id="message"
                rows={4}
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Write your message here"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
