import React from 'react'
import Card from '../card/Card'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { LuLoaderCircle } from "react-icons/lu";





export default function HamburgerRecipie() {
    const [hamburger, sethamburger] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const getHamburger = async () => {
        try {
            const response = await axios.get("https://forkify-api.jonas.io/api/v2/recipes?search=hamburger");
            sethamburger(response.data.data.recipes);
        }
        catch (e) {
            setError(true);
            setLoading(false);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => { getHamburger(); }, [])

    if(loading){
        return <div className="h-screen flex items-center justify-center "><LuLoaderCircle  className="animate-spin text-7xl text-gray-400"/></div>
    }
    if(error){
        return <div className="text-center text-3xl py-20">Error...</div>
    }
    return (
        <section className="text-3xl py-20 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {hamburger.map((hamburger) => {
                    return (
                        <Card key={hamburger.id} image={hamburger.image_url} title={hamburger.title} />
                    )
                })}
            </div>
        </section>

    )
}


