import React from "react";

export default function Pages(){
    return(
        <div className="pages">

            <div className="flex1">
                <div className="first-section">
                    <h1 className="upper">create and<br /> share your<br /> photo stories</h1>
                    <p className="opaque">Photosnap is a platform for photographers and visual<br /> storytellers. We make it easy to share photos, tell<br /> stories and connect with others</p>
                    <span className="upper">get an invite</span>
                </div>
                <div className="image1-section">
                     <img src="../src/assets/banner1.jpeg" alt="man standing at a beautiful location"/>
                </div>
                
            </div>

            <div className="flex2">
                <div className="image2-section">
                     <img src="../src/assets/banner2.jpeg" alt="workspace"/>
                </div>
                <div className="second-section">
                    <h1 className="upper">beautiful<br /> stories<br /> everytime</h1>
                    <p className="opaque">We provide design templates to ensure your stories<br /> look terrific. Easily add photos, text, embed maps and<br /> media from the other networls. Then share your story with<br /> everyone</p>
                    <span className="upper">view the stories</span>
                </div>
                
               
            </div>

            <div className="flex3">
                <div className="third-section">
                    <h1 className="upper">designed for<br /> everyone</h1>
                    <p className="opaque">Photosnap can help you create stories that resonate<br /> with your audience. Our tool is designed for<br /> photographers of all levels, brands, businesses you<br /> name it</p>
                    <span className="upper">view the stories</span>
                </div>
                <div className="image3-section">
                     <img src="../src/assets/banner3.jpeg" alt="director holding a camera"/>
                </div>
                
            </div>
           
    
            
        </div>
    )
}