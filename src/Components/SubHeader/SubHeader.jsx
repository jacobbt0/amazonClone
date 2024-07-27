import React, { useState } from 'react'
import './SubHeader.css'
const SubHeader = () => {
  const [dropdown,setDropdown] = useState(false)
  const primeDropdown = () =>{
    setDropdown(!dropdown)
  }
  return (
    <div className='sub-header'>
        <div>
          <div className="three-line"></div>
          <div>All</div>
        </div>
        <div>
          Fresh
        </div>
        <div>Amazon miniTV</div>
        <div>Sell</div>
        <div>Best Sellers</div>
        <div>Mobiles</div>
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div className='prime' onMouseEnter={primeDropdown} onMouseLeave={primeDropdown}>
          <span>Prime</span>
          <i className="fa-solid fa-caret-down"></i>
          {
            dropdown&&(
              <div className="prime-content">
                <div className="triangle-prime"></div>
                <img src="https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB612889281_.jpg" alt="Prime Flyout" />
              </div>
            )
          }
        </div>
       
        <div>Fashion</div>
        <div className="big-savings">
          <img src="https://m.media-amazon.com/images/G/31/Events/img24/PD24/GW/PD24_SWM_Dates_V2._CB569503763_.jpg" alt="Big Savings" />
        </div>
        
    </div>
  )
}

export default SubHeader