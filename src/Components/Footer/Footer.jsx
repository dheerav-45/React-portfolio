import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className="footer-top-left">
                <img className='footer-logo' src={logo} alt="" />
                <p>I am a Full-Stack Python Developer  From, Kerala with 1 year of hands-on experience </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="user_icon" />
                    <input type="email" placeholder='Enter your Email' /> 

                </div>
                <div className="footer-follow">follow me</div>
            </div>

        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ Dheerav Jaiju. All rights reserved. </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
