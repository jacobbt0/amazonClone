import React from 'react'
import './Header.css'
import logo from '../../Assets/pngimg.com - amazon_PNG25.png'
function Header() {
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
       
    </div>
  )
}

export default Header