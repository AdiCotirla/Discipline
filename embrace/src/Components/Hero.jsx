import React from 'react'
import greek from "../assets/greek.png"
import left from"../assets/left.png"
import right from "../assets/right.png"
import "../Style/Hero.css"
export default function Hero() {
  return (
    <div className='hero-container'>
        <h1 className='header' id='header'>EMBRACE DISCIPLINE</h1>
        <img src={greek} alt='greek god sculpture' className='greek'></img>
        {/* <img src={left} alt='soldier' className='left'/> */}
        <img src={right} alt='soldier' className='right'/>
        
        <div id="foglayer_01" class="fog">
  <div class="image01"></div>
  <div class="image02"></div>
</div>
<div id="foglayer_02" class="fog">
  <div class="image01"></div>
  <div class="image02"></div>
</div>
<div id="foglayer_03" class="fog">
  <div class="image01"></div>
  <div class="image02"></div>
</div>
    </div>
  )
}
