import React from "react"
import ReactDOM from"react-dom"
import "./Collection.css"
import imag from "./images/ss.jpg"

const Collection = (props)=>
{ 
    return(
        <div className="collection">
            <div className="myimage">
             <span className="head">{props.head}</span>
             <span className="discount">{props.discount}</span>
              <img className="img" src={props.img} ></img>
                <p className="message">{props.message}</p>
            </div>
        </div>
    )
}

export default Collection
