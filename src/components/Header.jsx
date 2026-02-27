import React from 'react'
import './css/Containers.css'
import './css/Headings.css'

function Header({ className }) {
    return (
        <div className={`headerContainer ${className}`}>
            <h1 className="lightText s40 left">Analet's flower shop</h1>
        </div>
    )
}

export default Header