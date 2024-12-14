import React from 'react'
import { TbPlayerPlay } from "react-icons/tb";
import './Hero.css';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className='hero'>
        <div className='heading'>
       <span className='title'>
       Sea La Vie</span>
       <span>Alibaug, Maharashtra</span>
       <Image src="/images/hero-button.png" alt='' width={80} height={40}></Image>
        </div>
        <div className="navigation">
          <ul><li></li>
          <li></li>
          <li></li></ul>
          <hr></hr>
          <div className="player">
          <TbPlayerPlay />
          </div>
        </div>
<div className="preview">
  <Image src="/images/modal.png" height={150} width={150}></Image>
</div>
    </div>
  )
}

export default Hero