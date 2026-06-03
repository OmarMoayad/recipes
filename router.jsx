import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./src/layout/Mainlayout";
import Hero from "./src/components/hero/Hero";
import About from "./src/components/about/About";
import Socialism from "./src/components/socialism/Socialisim";
import Recipies from "./src/components/recipies/Recipies";
import PizzaRecipie from "./src/components/pizzarecipie/PizzaRecipie";
import HamburgerRecipie from "./src/components/HamburgerRecipie/HamburgerRecipie";
import SeafoodRecipie from "./src/components/SeafoodRecipie/SeafoodRecipie";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[{
            index:true,
            element: <><Hero/><Recipies/></>
        },{
            path:'/about',
            element:<About/>
        },
        {
            path:'/socialism',
            element:<Socialism/>
        },
        {
            path:'/pizza',
            element:<PizzaRecipie/>
        },
        {
            path:'/hamburger',
            element:<HamburgerRecipie/>
        },
        {
            path:'/seafood',
            element:<SeafoodRecipie/>
        }
    ]
    },
]);
export default router;