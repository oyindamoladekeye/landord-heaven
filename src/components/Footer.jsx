import React from 'react'
import "../styles/footer.scss"
import logo from "../assets/footerlogo.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"
import telegram from "../assets/telegram.png"
import instagram from "../assets/instagram.png"
// import copyright from "../assets/copyright.png"

export default function Footer() {
  return (
    <footer>
        <div className='footer-container'>
            <div className='footer-one'>
                <img src={logo} alt =""className='logo' />
                <p>Landlord Haeven offers Nigerian property seekers an easy way to find details of property in Nigeria like homes, houses,
                    lands, shops, office spaces and other commercial property.</p>
                <div className='socials'>
                   <img src={instagram} alt="" />
                   <img src={telegram} alt="" />
                   <img src={linkedin} alt="" />
                   <img src={twitter} alt="" />
                </div>
            </div>
            <div className='footer-two'>
                <ul>
                    <li>Home</li>
                    <li>For sale</li>
                    <li>Forrent</li>
                    <li>Now Property</li>
                </ul>
                <ul>
                    <li>Blogs</li>
                    <li>HPR</li>
                    <li>Referral</li>
                    <li>FAQs</li>
                </ul>
                <ul>
                    <li>Privacy & Policy</li>
                    <li>Terms & Condition</li>
                    <li>Contact Us</li>
                    <li>Property Blog</li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright © Landlord Heaven Property 2022 - All Rights Reserved</p>
        </div>
    </footer>
  )
}
