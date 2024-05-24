import React, { useState } from 'react'
import './Header.css'
import logo from '../../Assets/pngimg.com - amazon_PNG25.png'

function Header() {

  const [dropdown,setDropdown] = useState(false)
  const [langDropdown , setLangDropdown] = useState(false)
  const [accountList,setAccountList] = useState(false)
  const dropdownAll = () =>{
    setDropdown(!dropdown)
  }
  const lanDropdown = () =>{
    setLangDropdown(!langDropdown)
  }
  const account = () =>{
    setAccountList(!accountList)
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
            <span>Delivery to kochi 654798</span>
            <br />
            <span>Update location</span>
            </div>
        </div>
      <div className="header-center">
        <div className="dropdown">
        <button className="dropbtn " onClick={dropdownAll} >All  
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
      <div className="header-r">
      
          <div className="language" onMouseEnter={lanDropdown} onMouseLeave={lanDropdown}>
            <span className='icp-nav-flag icp-nav-flag-in icp-nav-flag-lop'></span>
            <span>EN</span>
            <span className="fa fa-caret-down"></span>
            {
              langDropdown &&(
                <div className="langDropdown">
                  <span className='triangle'></span>
                  <ul className='langlist'>
                    <li>
                     <span className='icp-radio-active'></span>                     
                     English
                     <span> - EN</span>
                    </li>
                     <hr className="hr" />
                    <li>
                      <span className='icp-radio'></span>
                      हिन्दी
                      <span> - HI</span>
                    </li>
                    <li>
                      <span className='icp-radio'></span>
                      தமிழ்
                      <span> - TA</span>
                    </li>
                    <li>
                      <span className='icp-radio'></span>
                      తెలుగు
                      <span> - TE</span>
                    </li>
                    <li>
                      <span className='icp-radio'></span>
                      ಕನ್ನಡ
                      <span> - KN</span>
                    </li>
                    <li>
                      <span className='icp-radio'></span>
                      മലയാളം
                      <span> - ML</span>
                    </li>
                    <li>
                      <span className='icp-radio'></span>
                      বাংলা
                      <span> - BN</span>
                    </li>
                    <li>
                      <span className='icp-radio'></span>
                      मराठी
                      <span> - MR</span>
                    </li>
                    <span className="blue-font">Learn more</span>
                    <hr className="hr" />
                    <span className='icp-nav-flag-small'></span>
                    <span className='message'>You are shopping on Amazon.in</span>
                    <span className="blue-font">Change country/region.</span>
                  </ul>
                </div>
              )
            }
        
          </div>
          <div className="account-list" onMouseEnter={account} onMouseLeave={account}>
            <span>Hello,sign in</span>
            <br />
            <span>Account and lists</span>
            <span className="fa fa-caret-down"></span>
            {
              accountList && (
                <div className='account-dropdown'>
                  <span className='triangle'></span>
                  <div className="sign-box">
                    <div className="sign-in">Sign in</div>
                    <span>New customer?</span>
                    <span>Start here</span>
                  </div>
                  <hr/>
                  <div className="your-list">
                    <ul >
                      <li>Your Lists</li>
                      <li>Create a Wish List</li>
                      <li>Wish from Any Website</li>
                      <li>Baby Wishlist</li>
                      <li>Discover Your Style</li>
                      <li>Explore Showroom</li>
                    </ul>
                  </div>
                  <div className="vrline"></div>
                  <div className="your-account">
                    <div className='your-acc-title'>Your Account</div>
                    <ul>
                      <li>Your Account</li>
                      <li>Your Orders</li>
                      <li>Your Wish List</li>
                      <li>Your Recommendations</li>
                      <li>Your Prime Membership</li>
                      <li>Your Prime Video</li>
                      <li>Your Subscribe & Save Items</li>
                      <li>Memberships & Subscriptions</li>
                      <li>Your Seller Account</li>
                      <li>Manage Your Content and Devices</li>
                      <li>Your Free Amazon Business Account</li>
                    </ul>
                  </div>
                </div>
              )
            }
          </div>
          <div className="returns">
            <span>Returns</span>
            <br />
            <span>& Orders</span>
          </div>
          <div className="cart">
            <span>0</span>
            <span className='cart-img'></span>
            <span>Cart</span>
          </div>
      </div>
    </div>
  )
}

export default Header