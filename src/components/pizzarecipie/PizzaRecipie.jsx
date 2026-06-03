import React from 'react'
import Card from '../card/Card'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { LuLoaderCircle } from "react-icons/lu";





export default function PizzaRecipie() {
    const [pizzas, setpizzas] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const getPizza = async () => {
        try {
            const response = await axios.get("https://forkify-api.jonas.io/api/v2/recipes?search=pizza");
            setpizzas(response.data.data.recipes);
        }
        catch (e) {
            setError(true);
            setLoading(false);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => { getPizza(); }, [])

    if(loading){
        return <div className="h-screen flex items-center justify-center "><LuLoaderCircle  className="animate-spin text-7xl text-gray-400"/>
</div>
    }
    if(error){
        return <div className="text-center text-3xl py-20">Error...</div>
    }
    return (
        <section className="text-3xl py-20 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {pizzas.map((pizza) => {
                    return (
                        <Card key={pizza.id} image={pizza.image_url} title={pizza.title} />
                    )
                })}
            </div>
        </section>

    )
}


