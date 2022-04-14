import React from 'react'

export default function Navbar(){
    return(
        <nav>
            <div>
                <img src="./assets/logo.svg" alt="logo of the app" />
            </div>
            <div className='nav-upper'>
            <ul>
                <li>stories</li>
                <li>features</li>
                <li>pricing</li>
            </ul>
            </div>
            
            <div>
                <button className='nav-button'>get an invite</button>
            </div>
        </nav>
    )
}

