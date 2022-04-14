import React from "react";

export default function Footer(){
    return(
        <footer>
            <div className="footer-class">
                <img src="../assets/logo-white.svg" alt="logo of the app" />
                <div className="footer-logo-section">
                        <p>home</p>
                        <p>stories</p>
                        <p>features</p>
                        <p>pricing</p>  
                </div>
                
            </div>

            <div className="opac">
                <span>get an invite</span>
                <p>Copyright 2019. All Rights Reserved</p>
            </div>
        </footer>
    )
}