import React, { useState } from 'react'
import './Header.css'
import logo from '../../Assets/pngimg.com - amazon_PNG25.png'

function Header() {

  const [dropdown,setDropdown] = useState(false)
  const dropdownAll = () =>{
    setDropdown(!dropdown)
  }
  return (
    <div className='header'>
        <div className="header-l">
            <div className="logo-tab">
                <img src={logo} alt="" className='logo' />
                <span className='in'>.in</span>
            </div>
            <div className='location-tab'>
                <i className="fa-solid fa-location-dot location"></i>
            <span>Delivery to kochi</span>
            <br />
            <span>Update location</span>
            </div>
        </div>
      <div className="header-center">
        <div className="dropdown">
        <button className="dropbtn " onClick={dropdownAll}>All  
          <i className="fa fa-caret-down "></i>
        </button>
       
        <div className="popup-content">
          Search in
        </div>
         </div>
         <input type="search" className='search' placeholder='Seach Amazon.in'/>

         <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
         </div>
         {
          dropdown && (
            <div className="dropdown-content">
              <span>All Categories </span>
              <span>Alexa Skills</span>
            </div>
          )
         }
      </div>
    </div>
  )
}

export default Header