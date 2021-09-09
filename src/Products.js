import React from "react"
import ReactDOM from"react-dom"
import "./Collection.css"


const Products = (props)=>
{
    return(
        <div className="Products">
            <div className="myimage">
            <span className="dis">{props.dis}</span>
             <span className="head">{props.head}</span>
              <img className="img" src={props.img} alt="image"></img>
              <p className="price">{props.price}</p>
              <span>Quantity : </span>
                    <input type="number" min="1" max="1000" value="1"/>
                <p className="message">{props.message}</p>
            </div>
        </div>
    )
}

export default Products
