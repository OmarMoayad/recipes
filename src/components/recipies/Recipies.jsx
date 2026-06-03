import React from 'react'
import Card from '../card/Card'
import { useState } from 'react'

export default function Recipe() {
    const [cards , setCards] = useState([
        {
            id:1,
            image:'http://forkify-api.herokuapp.com/images/IMG_15866d21.jpg',
            title: 'Pizza Recipies',
            text: 'Fresh and healthy ingredients perfect for a quick meal.',
            link: 'pizza',
        },
        {
            id:2,
            image:'http://forkify-api.herokuapp.com/images/20863b0e4.jpg',
            title: 'Hamburger',
            text: 'Classic sandwich with juicy patty',
            link: 'hamburger',
        },
        {
            id:3,
            image:'http://forkify-api.herokuapp.com/images/seafoodpasta5075.jpg',
            title: 'seafood',
            text: 'Elegant dishes made for unforgettable family dinners.',
            link: 'seafood',
        },
    ])

    return (
        <section id='recipies' className="bg-black py-20 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card) => (
                    <Card key={card.id} image={card.image} title={card.title} text={card.text} link={card.link}/>
                ))}
            </div>
        </section>
    )
}