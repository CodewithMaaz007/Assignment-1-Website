'use client'; // Ensures this is a client-side component

import { useState } from 'react';
import Link from 'next/link';  // Add this for the Link component
import Navbar from "@/components/navbar";

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signing up with:', username, email, password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font-bold mb-8">Sign Up</h1>
      <form onSubmit={handleSubmit} className="w-96 bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          Sign Up
        </button>
      </form>

      {/* Link to Login Page */}
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
      <Navbar />
    </div>
  );
};

export default SignUpPage;
