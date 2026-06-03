import React from 'react'
import heroImage from '../../assets/hero.png'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-8">
        <div className="max-w-2xl text-white">
          <p className="uppercase tracking-[4px] text-sm mb-4 text-gray-300">
            Good Food. Good Mood.
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Delicious recipes,
            <br />
            made for real life.
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Discover simple, delicious recipes made with real ingredients
            for every moment.
          </p>
          <a href="#recipies" className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition duration-300">
            Explore Recipes
          </a>
        </div>
      </div>
    </section>
  )
}