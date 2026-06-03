import { Link } from "react-router-dom";
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Recipes</h1>
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/socialism" className="hover:text-gray-300 transition">Contact</Link>
        </div>
      </div>
    </footer>
  );
}