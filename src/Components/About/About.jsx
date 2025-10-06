import React, { useState } from 'react'
import 'animate.css';
import './About.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpeg'
import html_logo from '../../assets/html_logo.svg'
import css_logo from '../../assets/css_logo.svg'
import javascript from '../../assets/javascript.svg'
import python_logo from '../../assets/python_logo.svg'
import django_logo from '../../assets/django_logo.svg'
import mysql_logo from '../../assets/mysql_logo.svg'
import mongodb_logo from '../../assets/mongodb_logo.svg'
import react_logo from '../../assets/react_logo.svg'
import bootstrap_logo from '../../assets/bootstrap_logo.svg'
import tailwind_logo from '../../assets/tailwind_logo.svg'
import github_logo from '../../assets/github_logo.svg'
import certificate_1 from '../../assets/certificate_1.jpg'
import certificate_2 from '../../assets/certificate_2.jpg'

import project1 from '../../assets/project_1.png'
import project2 from '../../assets/project_3.svg'
import project3 from '../../assets/project_3.png'




const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [images, setImages] = useState([]);
    const [closing, setClosing] = useState(false);

    const handleClick = (type) => {
        // Depending on which h1 is clicked, show different images
        if (type === 'experience') {
            setImages([
                certificate_1, certificate_2
            ]);
        }
        setIsOpen(true);
        setClosing(false);
    };

    const closeModal = () => {
        setClosing(true);
    };

    const handleAnimationEnd = () => {
        if (closing) {
            setIsOpen(false);
            setImages([]);
            setClosing(false);
        }
    };
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="theme_pattern" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img className='profile_img' src={profile_img} alt="profile_img" />
                </div>
                <div className="abovt-right">
                    <div className="about-para">
                        <p>Hi, I’m a Python Full Stack Developer who enjoys solving problems through code.
                            I specialize in Django, DRF, and modern frontend technologies, with experience in databases, APIs, and payment integrations.
                            I’m always eager to learn new tools, improve performance, and create applications that make life easier for people.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <img src={html_logo} alt="Html" /><p>HTML</p>
                        </div>
                        <div className="about-skill">
                            <img src={css_logo} alt="css" /><p>CSS</p>
                        </div>
                        <div className="about-skill">
                            <img src={javascript} alt="javascript" /><p>Javascript</p>
                        </div>
                        <div className="about-skill">
                            <img src={python_logo} alt="python" /><p>Python</p>
                        </div>
                        <div className="about-skill">
                            <img src={django_logo} alt="django" /><p>Django</p>
                        </div>
                        <div className="about-skill">
                            <img src={mysql_logo} alt="sql" /><p>Mysql</p>
                        </div>
                        <div className="about-skill">
                            <img src={mongodb_logo} alt="mongodb" /><p>Mongodb</p>
                        </div>
                        <div className="about-skill">
                            <img src={react_logo} alt="React" /><p>React</p>
                        </div>
                        <div className="about-skill">
                            <img src={bootstrap_logo} alt="bootstrap" /><p>Bootstrap</p>
                        </div>
                        <div className="about-skill">
                            <img src={tailwind_logo} alt="tailwind" /><p>Tailwind-Css</p>
                        </div>
                        <div className="about-skill" style={{ backgroundColor: "white", width: "130px", height: "90px", paddingLeft: "8px", paddingRight: "8px" }}>
                            <img src={github_logo} alt="git" /><p >GitHub</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1 onClick={() => handleClick('experience')}>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <AnchorLink className='anchor-link' offset={50} href='#work'>
                        <h1 className='about-achievement-h1-right'>5+</h1>
                        <p>PROJECTS COMPLETED</p>
                    
                    </AnchorLink>
                    
                    
                </div>



                {isOpen && (
                    <div className='modal-overlay' onClick={closeModal}>
                        <div
                            className={`modal-content animate__animated ${closing ? 'animate__zoomOutDown' : 'animate__backInUp'}`}
                            onClick={(e) => e.stopPropagation()}
                            onAnimationEnd={handleAnimationEnd}
                        >
                            <button className='close-btn' onClick={closeModal}>X</button>
                            {images.map((img, index) => (
                                <img key={index} src={img} alt={`popup-${index}`} />
                            ))}
                        </div>
                    </div>
                )}


            </div>


        </div>
    )
}

export default About
