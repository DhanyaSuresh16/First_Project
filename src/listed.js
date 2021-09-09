import React from "react"
import ReactDOM from "react-dom"
import Products from "./Products.js"
import aleo from "./images/aleovera.jpeg"
import tulasi from "./images/tulasi.jpg"
import turmeric from "./images/turmeric.jpg"
import croton from "./images/croton.jpg"
import hibiscus from "./images/hibiscus.jpg"
import rose from "./images/rose.jpg"
import coconut from "./images/Coconut.jpg"
import lemon from "./images/lemon.jpg"
import mango from "./images/mango-tree.jpg"

const Listed = ()=>
{
    return(
        <div>
                <Products head="Aleovera" dis="-30%" img={aleo} price="150 INR" message="Add to cart "/>
        
                <Products head="Tulasi" dis="-20%" img={tulasi} price="200 INR" message="Add to cart "/>
         
                <Products head="Turmeric" dis="-10%" img={turmeric} price="150 INR"  message="Add to cart "/>

                <Products head="Croton" dis="-30%" img={croton} price="100 INR" message="Add to cart "/>
        
                <Products head="Hibiscus" dis="-20%" img={hibiscus} price="350 INR" message="Add to cart "/>
         
                <Products head="Rose" dis="-10%" img={rose} price="150 INR" message="Add to cart "/>

                <Products head="Coconut" dis="-30%" img={coconut} price="250 INR" message="Add to cart "/>
        
                <Products head="Lemon" dis="-20%" img={lemon} price="150 INR" message="Add to cart "/>
         
                <Products head="Mango" dis="-40%" img={mango} price="150 INR"  message="Add to cart "/>
          
        </div>
        
    )
}

ReactDOM.render(<Listed/>, document.querySelector("#productss"))
