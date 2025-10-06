import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'



const Contact = () => {

  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);


  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const apiKey = import.meta.env.VITE_WEB3FORMS_KEY;
    console.log("Web3Forms Key:", apiKey); // Debugging

    if (!apiKey) {
      setPopupMessage("Error: Missing API Key. Check your .env file.");
      setShowPopup(true);
      return;
    }

    formData.append("access_key", apiKey);



    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setPopupMessage(data.message || "Form submitted successfully!");
      setShowPopup(true);
      event.target.reset();
    } else {
      setPopupMessage("Error: something wrong Form submit so can you mail send manully! " );
      setShowPopup(true);
    }
  };


  return (

    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />

      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>dheeravjaiju45@gmail.com</p>

            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 7736300106</p>

            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location_icon" />
              <p>Kerala, Thrissur</p>

            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' ></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
        
      </div>
      {/* POPUP MODAL */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <p>{popupMessage}</p>
            <button className="close-btn" onClick={() => setShowPopup(false)}>X</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default Contact
