import React from "react";

export default function Cards(props){
    return(
        <div className="card">
        <img src={`../assets/${props.img}`} className="card-image"/>
        <div className="card-stats">
            <div>
                <h3>{props.header}</h3>
                <span>{props.author}</span><hr />
            </div>
            
            <div className="read-more">
                <p>READ STORY</p>
                
            </div>
            

        </div>
    </div>
    )
    

}