// src/app/HomePage.tsx

'use client'; // Ensures that this is a client-side component

import { useState, useEffect } from 'react';
import Navbar from "@/components/navbar"; // Import the navbar from the component
import LoadingPage from './loadingpage'; // Import the loading page 
import ErrorBoundary from './errorboundary'; // Import the ErrorBoundary component

export default function HomePage() {
  // State to handle dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  // State to handle loading effect
  const [isLoading, setIsLoading] = useState(true);
  // State to simulate error
  const [hasError, setHasError] = useState(false);

  // Effect to simulate loading for a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loading spinner after 3 seconds
    }, 5000);

    // Clean up the timers when the component is unmounted
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to simulate error when clicked
  const triggerError = () => {
    setHasError(true);
  };

  // If still loading, show the LoadingPage component
  if (isLoading) {
    return <LoadingPage />;
  }

  // Simulate an error when `hasError` is true
  if (hasError) {
    throw new Error('Simulated error triggered by the button clicked!');
  }

  return (
    <ErrorBoundary>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-all duration-300`}>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="pt-10 px-4">
          <header className="text-center py-8">
            <h1 className="bg-gradient-to-r from-purple-600 via-blue-400 to-purple-600 text-transparent bg-clip-text border-4 border-yellow-400 px-6 py-3 font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider hover:scale-100 transform transition-all duration-300 ease-in-out hover:text-green-400">
              Welcome to the Home Page
            </h1>
            <hr className="my-4 border-t-2 border-gray-300" />
          </header>

          {/* Button to toggle Dark Mode */}
          <div className="text-center mb-6">
            <button
              onClick={toggleDarkMode}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>

          {/* Button to trigger error */}
          <div className="text-center mb-6">
            <button
              onClick={triggerError}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              Simulate Error
            </button>
          </div>

          {/* Footer */}
          <footer className="text-center mt-12 text-sm text-gray-500">
            <p>&copy; 2024 MyWebsite. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </ErrorBoundary>
  );
}
