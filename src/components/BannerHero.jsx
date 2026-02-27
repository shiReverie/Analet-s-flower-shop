import React from 'react'
import './css/Containers.css'
import './css/Headings.css'
import './css/Animations.css'
import './css/BannerHeroCss.css'

function BannerHero() {

    return (
        <div className="bannerContainer">
            <h2 className="lightText s75" id="welcomeTo">Welcome to</h2>
            <h1 className="lightText s150 underscore zoomin" id="shopName">Analet's flower shop</h1>
            <h2 className="lightSymbols s40" id="flowerDecoration">❀˖°</h2>
            <p className="lightText s50" id="buyNow">buy the most exotic<br></br>
                and pretty bouquetes here<br></br>
                for your loved ones!</p>
        </div>
    )
}

export default BannerHero