import React from 'react'
import logo from '../Assets/logo.png.webp'
import "./Footer.css"

function Contact () {
  return (
    <div className='contact'>
       <ul>
        <li><img src={logo} alt="image"/></li>
        <li>Address: 60-49 Road 11378 New York</li>
        <li>Phone: +65 11.188.888</li>
        <li>Email: hello@colorlib.com</li>
       </ul>
    </div>
  )
}

function Links() {
    return (
        <div className='link'>
            <div  className='head'>
              <p>Useful Links</p>
            </div>
            <div className='head'>
              <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">About Our Shop</a></li>
                  <li><a href="#">Secure Shopping</a></li>
                  <li><a href="#">Delivery Information</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Our Sitemap</a></li>
                  <li><a href="#">Who We Are</a></li>
                  <li><a href="#">Our Services</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Innovation</a></li>
                  <li><a href="#">Testimonials</a></li>
              </ul>
            </div>
        </div>
    );
  }

function Newsletterinfo() {
    return(
        <div className='Newsletter'>
            <p className='joining'>Join Our Newsletter Now</p>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <input className='mail-input' placeholder='Enter your mail'></input>
            <button>SUBSCRIBE</button>
        </div>
    )
}

function Footer() {
  return (
    <div className='Footer-container'>
      <div className='sub-Footer-container'>
        <Contact />
        <Links />
        <Newsletterinfo />
      </div>
    </div>
  )
}

export default Footer
