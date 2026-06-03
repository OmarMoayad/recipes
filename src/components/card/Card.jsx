import React from 'react'

export default function Card(props) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <img src={props.image} alt={props.title} className="w-full h-64 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{props.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{props.text}</p>
                <a href={props.link} className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">View Recipie</a>
            </div>
        </div>
    )
}