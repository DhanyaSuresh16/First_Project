 import React from "react"
 import ReactDOM from "react-dom"
 import Collection from "./Collection"
 import listed from "./listed"
 import imag from "./images/herbals.jpg"
 import croton from "./images/ss.jpg"
 import tress from "./images/tree.jpg"


 const App = ()=>
 {
     return(
         <div>
                 <Collection head="Herbs" discount="upto 30% off" img={imag} message="Shop Now "/>
         
                 <Collection head="Shrubs" discount="upto 40% off" img={croton} message="Shop Now "/>
          
                 <Collection head="Trees" discount="upto 35% off" img={tress} message="Shop Now "/>
           
         </div>
         
     )
 }

 ReactDOM.render(<App/>, document.querySelector("#root"))

