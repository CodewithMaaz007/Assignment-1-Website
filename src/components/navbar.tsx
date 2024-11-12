'use client'; // Ensures this is a client-side component

import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed left-0 top-0 h-full bg-gray-800 p-4 shadow-lg w-28 z-10">
      {/* Navbar Container */}
      <div className="text-xl font-semibold text-white mb-8">
        {/* Website Logo or Site Title */}
        <Link href="/">
          <span className="hover:text-yellow-300 transition-colors duration-300">
            MrMaaz!
          </span>
        </Link>
      </div>

      {/* Navbar Links - List of Links with spacing */}
      <ul className="space-y-6 text-white">
        {/* Home Link */}
        <li>
          <Link href="/">
            <span className="hover:text-yellow-300 transition-colors duration-300">
              Home
            </span>
          </Link>
        </li>
        
        {/* About Link */}
        <li>
          <Link href="/about">
            <span className="hover:text-yellow-300 transition-colors duration-300">
              About
            </span>
          </Link>
        </li>
        
        {/* Contact Us Link */}
        <li>
          <Link href="/contact">
            <span className="hover:text-yellow-300 transition-colors duration-300">
              Contact Us
            </span>
          </Link>
        </li>

        {/* Login Link */}
        <li>
          <Link href="/login">
            <span className="hover:text-yellow-300 transition-colors duration-300">
              Login
            </span>
          </Link>
        </li>

        {/* Signup Link */}
        <li>
          <Link href="/signup">
            <span className="hover:text-yellow-300 transition-colors duration-300">
              Sign Up
            </span>
          </Link>
        </li>

        {/* Additional links can be added here */}
      </ul>
    </div>
  );
}
