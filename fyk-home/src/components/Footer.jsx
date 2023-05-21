import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footer-col'>
            <h4>FKY</h4>
            <ul>
              <li>About Us</li>
              <li>Jobs</li>
              <li>Become a Partner</li>
              <li>Job as a driver</li>
            </ul>
          </div>

          <div className='footer-col'>
            <h4>Support</h4>
            <ul>
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Terms Of Services</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className='footer-col'>
            <h4>Follow Us</h4>
            <ul>
              <li>Facebook </li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Linkedin</li>
            </ul>
          </div>

          <div className='footer-col'>
            <h4>Download App</h4>
            <ul>
              <li>Google Play</li>
              <li>App Store</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
        <span className=''>
           <h2>Free Your Kitchen</h2>
           <p>@2023 FYK | All rights reserved</p>
           </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
