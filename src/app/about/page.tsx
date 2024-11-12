'use client'; // Ensures this is a client-side component

import { useState } from 'react'; // React hook for managing state
import Navbar from "@/components/navbar"; // Adjust the import path as needed

export default function AboutPage() {
  // State for toggling dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-all duration-300`}>
      
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="text-center py-12">
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text font-extrabold text-4xl sm:text-5xl md:text-6xl text-center uppercase tracking-wider hover:scale-110 transform transition-all duration-500 ease-in-out hover:text-yellow-300 mb-4">
          About Us
        </h1>
        <hr className="my-6 border-t-2 border-gray-300" />
      </header>

      {/* Toggle Dark Mode Button */}
      <div className="text-center mb-6">
        <button
          onClick={toggleDarkMode}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      {/* About Section */}
      <section className="my-12 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-900 dark:text-white">
          Who We Are
        </h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto transition-transform transform hover:scale-105">
          We are a passionate team dedicated to creating the best possible web experiences. Our mission is to provide high-quality services with a focus on user satisfaction. We love what we do, and we do it with heart!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Box 1 */}
          <div className="p-6 bg-white border shadow-md rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-white">
            <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-gray-100">Our Vision</h3>
            <p className="text-md text-gray-900 dark:text-gray-300">
              To be the leading company in delivering innovative and user-centric web solutions.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-6 bg-white border shadow-md rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-white">
            <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-gray-100">Our Mission</h3>
            <p className="text-md text-gray-900 dark:text-gray-300">
              To create cutting-edge web applications that delight our clients and help businesses grow.
            </p>
          </div>

          {/* Box 3 */}
          <div className="p-6 bg-white border shadow-md rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-white">
            <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-gray-100">Our Values</h3>
            <p className="text-md text-gray-900 dark:text-gray-300">
              Integrity, innovation, and customer-first are the values that drive our work.
            </p>
          </div>
        </div>
      </section>

      {/* Animated Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => alert('Thanks for checking out our page!')}
          className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Get in Touch!
        </button>
      </div>

    </div>
  );
}
