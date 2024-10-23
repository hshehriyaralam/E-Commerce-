import './Hero.css'
import React from 'react'
import hand_icon from  '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

export default function Hero(){
    return(
       <div className='hero'>
        {/* Hero Section Left side */}
        <div className='hero-left'>
            <h2> NEEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="arrow"   />
            </div>
        </div>

        {/* Hero Section Right side */}
        <div className='hero-right' >
            <img src={hero_image} alt="" />
        </div>

       </div>
    )
}