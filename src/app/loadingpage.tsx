import React, { useState, useEffect } from "react";

const LoadingPage = () => {
  // State to manage loading visibility
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a 5-second delay before hiding the spinner
    const timer = setTimeout(() => {
      setLoading(false); // Hide the spinner after 5 seconds
    }, 5000);

    // Clean up the timer when the component is unmounted or re-rendered
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    // If loading is false, render nothing or redirect to another page (e.g., Home)
    return <div>Content loaded!</div>; // Or you can navigate to another page
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-800 to-purple-900">
      {/* Centered Spinner */}
      <div className="flex flex-col items-center justify-center">
        {/* Outer Ring */}
        <div className="w-20 h-20 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
        
        {/* Inner Glowing Effect */}
        <div className="absolute w-20 h-20 rounded-full bg-blue-600 opacity-50 blur-lg"></div>
        
        {/* Text Under the Spinner */}
        <p className="text-white text-lg mt-4 animate-pulse">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
