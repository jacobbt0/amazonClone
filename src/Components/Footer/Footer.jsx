import { useState } from 'react'
import './Footer.css'
const Footer = () => {
  const backToTop = () =>{
    window.scrollTo(0,0)
  }
  const footerLangDrop = () =>{
    setFooterLang(!footerLang)
  }
  const [footerLang,setFooterLang] = useState(false)
  return (
    <div className='footer'>
        <div className="back-to-top" onClick={backToTop}>
            <span>Back to top</span>
        </div>
        <div className="main-footer">
          <div className='get-to-know'>
            <div>Get to Know Us</div>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Investor Relations</li>
              <li>Amazon Devices</li>
              <li>Amazon Science</li>
            </ul>
          </div>
          <div className="connect-with">
            <div>Connect with Us</div>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className='make-money'>
            <div>Make Money with Us</div>
            <ul>
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>  
              <li>See More Make Money with Us</li>
            </ul>
          </div>
          <div className='amazon-payment'>
            <div>Amazon Payment Products</div>
            <ul>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>
            </ul>
          </div>
        </div>
        <hr className='footer-hr'/>
        <div className="footer-links">
          <div className="footer-links-logo"></div>
          <div className="footer-links-lang">
            <span className='links-lang' onMouseEnter={footerLangDrop} onMouseLeave={footerLangDrop}>
              <span></span>
              <span>English</span>
              <span></span>
              {
            footerLang &&(
              <div className="langDropdown" >
              <span className='footer-triangle'></span>
              <ul className='footer-langlist langlist'>
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
            </span>
            <div className="links-country">
              <span className="country-flag"></span>
              <span>India</span>
            </div>
            
          </div>
        </div>
        <div className="footer-bottom">
          <table className='footer-tbl'>
            <tr>
              <th>AbeBooks</th>
              <th>Amazon Web Services</th>
              <th>Audible</th>
              <th>IMDb</th>
            </tr>
            <tr>
              <td>Books, art</td>
              <td>Scalable Cloud</td>
              <td>Download</td>
              <td>Movies, TV</td>
            </tr>
            <tr>
              <td>& collectibles</td>
              <td>Computing Services</td>
              <td>Audio Books</td>
              <td>& Celebrities</td>
            </tr>
            <tr>
              <th>Shopbop</th>
              <th>Amazon Business</th>
              <th>Prime Now</th>
              <th>Amazon Prime Music</th>
            </tr>
            <tr>
              <td>Designer</td>
              <td>Everything For</td>
              <td>2-Hour Delivery</td>
              <td>100 million songs, ad-free</td>
            </tr>
            <tr>
              <td>Fashion Brands</td>
              <td>Fashion Brands</td>
              <td>on Everyday Items</td>
              <td>Over 15 million podcast episodes</td>
            </tr>
          </table>
          <div className="footer-credits">
            <div>
              <span>Conditions of Use & Sale</span>
              <span>Privacy Notice</span>
              <span>Interest-Based Ads</span>
            </div>
            <div>
            © 1996-2024, Amazon.com, Inc. or its affiliates
            </div>
          </div>
        </div>
    </div>
  )
}


export default Footer