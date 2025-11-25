import React, { useRef, useState } from 'react'
import "./Contact.css"

function Contact() {
  const form = useRef()
  const [messageSent, setMessageSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    
    // For demo purposes, we'll just show a success message
    // In production, you would configure EmailJS or another email service
    setMessageSent(true)
    setTimeout(() => {
      setMessageSent(false)
      form.current.reset()
    }, 3000)
  }

  return (
    <section id="contact">
      <span className="contactTitle">Contact Me</span>
      <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
      
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="your_name" required />
        <input type="email" className="email" placeholder="Your Email" name="your_email" required />
        <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="submitBtn" value="Send">
          {messageSent ? 'Message Sent!' : 'Submit'}
        </button>
        {messageSent && <span className="successMsg">Thank you! I'll get back to you soon.</span>}
      </form>
      
      <div className="links">
        {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/facebook.png")} alt="Facebook" className="link" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/twitter.png")} alt="Twitter" className="link" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/youtube.png")} alt="YouTube" className="link" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/instagram.png")} alt="Instagram" className="link" />
        </a> */}
      </div>
    </section>
  )
}

export default Contact

