// src/app/NotFoundPage.tsx

import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-center">
      <div className="space-y-6">
        <h1 className="text-6xl font-extrabold text-gray-800">
          Oops! 404
        </h1>
        <p className="text-xl text-gray-600">
          The page you're looking for doesn't exist.
        </p>
        
        {/* Interactive Link/Button to go back to Home */}
        <Link href="/" passHref>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
