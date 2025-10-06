import React from 'react'
import './Hero.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_image from '../../assets/profile_image.jpeg'
import githubs from '../../assets/github_icons.svg'
import linked_icons from '../../assets/linked_icons.svg'
import instagram_icons from '../../assets/instagram_icons.svg'
import resume from '../../assets/dheerav_resume.pdf'



const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='profile' src={profile_image} alt="profile image" />
      <div className='hero-icons'>
        <a href="http://www.linkedin.com/in/dheerav-jaiju"><img src={linked_icons} alt="linked" /></a>
        <a href="https://www.instagram.com/dheerav_45?igsh=bW0xMXJ4eW83cm50"><img src={instagram_icons} alt="instagram" /></a>
        <a href="https://github.com/dheerav-45"><img src={githubs} alt="github" /></a>
      </div>
      <h1> <span className='hero-name'>I'm Dheerav, </span>Full Stack developer </h1>
      <p className='ptag'>Python Full Stack Developer experienced in Django, REST APIs, and modern frontend technologies.
        I build end-to-end solutions from backend architecture to responsive UI, ensuring performance, scalability, and user satisfaction.</p>

      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <button className="hero-resume" type="submit" ><a download="" href={resume}>   resume</a></button>
        
      </div>


    </div>
  )
}

export default Hero
