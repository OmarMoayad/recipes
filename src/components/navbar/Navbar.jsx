import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-white text-black px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="flex items-center gap-3">
          <Link to="/"><img src="src/assets/logo.png" alt="Recipes Logo" className="w-12 h-12 object-contain" /></Link>
          <h1 className="text-2xl font-bold tracking-wide">
            Recipes
          </h1>
        </div>

        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/socialism" className="hover:text-gray-300 transition">Socialism</Link>
        </nav>
      </div>
    </header>

  )
}