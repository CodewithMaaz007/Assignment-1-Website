// src/app/error.tsx

'use client'; // Ensures this is a client-side component

import React from 'react';

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center text-red-500">
        <h1 className="text-4xl font-bold">Oops! Something went wrong</h1>
        <p className="mt-4 text-lg">An unexpected error occurred: {error.message}</p>
        <button
          onClick={reset}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
