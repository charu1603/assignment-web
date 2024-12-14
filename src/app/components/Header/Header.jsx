import React from 'react'
import { IoSearch } from "react-icons/io5";
import './Header.css'
import { FaPhone } from "react-icons/fa6";
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <header className="header">
      <Image src="/images/logo.png"  alt="App Logo"
        width={120}          
        height={30}>
        </Image>
        <div className='searchBar'>
<div className="icons">
<IoIosSearch />
</div>

        <input
                        type="text"
                        placeholder="Search for location, villa, facilities..."
                        className="input"
                    />
        </div>
        <div className="content">
          <div className="logo"> 
              <Image src="/images/logo1.png"  alt="App Logo"
        width={140}          
        height={30}></Image>
        </div>
          <div className="number">
          <FaPhone />
             <p>08069160000</p>
             </div>
          <div className="login"> 
            <button className="loginbutton">Login</button>
            </div>
        </div>
        </header>
  )
}

export default Header