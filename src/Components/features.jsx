import React from "react";

export default function Features(props){
    return(
        
            <div className="features">
            <img src={`../src/assets/${props.svg}`} />
                <div className="grid">
                    <h3>{props.title}</h3>
                    <span>{props.description}</span>
                </div>

            </div>
            
        
    )
    

}