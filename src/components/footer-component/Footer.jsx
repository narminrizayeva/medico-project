import React, { useState } from 'react'
import "./Footer.css"
import medico from "..//..//assets/medico.logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
function Footer() {
  const [emailPlaceholder, setEmailPlaceholder] = useState('Your Email Address');

  return (
    <>
      <div className='footer'>
        <div className='footer-1'>
          <img className="medico" src={medico} alt="" />
          <ul className='ul-footer'>
            <li className='li-footer'><a className='a-footer' href="">Follow us on Instagram</a></li>
            <li className='li-footer'><a className='a-footer' href="">Follow us on Facebook</a></li>
            <li className='li-footer'><a className='a-footer' href="">Follow us on Twitter</a></li>
            <li className='li-footer'><a className='a-footer' href="">Follow us on Tik Tok</a></li>
          </ul>
          <div className='icons'>
            <a href="https://www.facebook.com/"><FontAwesomeIcon className="icon-social-footer" icon={faFacebook} /></a>
            <a href="https://www.instagram.com/_nara.r_/?img_index=1"> <FontAwesomeIcon className="icon-social-footer" icon={faInstagram} /></a>
            <a href="https://www.tiktok.com/"><FontAwesomeIcon className="icon-social-footer" icon={faTiktok} /></a>
            <a href="https://www.skype.com/ru/"><FontAwesomeIcon className="icon-social-footer" icon={faSkype} /></a>
          </div>


        </div>
        <div className='footer-2'>
          <h4 className='title'>Quick Links</h4>
          <ul className='ul-footer'>
            <li className='li-footer'><Link className='a-footer' to="/about" href="">About</Link></li>
            <li className='li-footer'><Link className='a-footer' to="/departments" href="#">Departments</Link></li>
            <li className='li-footer'><a className='a-footer' href="">Online payment</a></li>
            <li className='li-footer'><a className='a-footer' href="">Careers</a></li>
            <li className='li-footer'><Link className='a-footer' to="/doctors" href="">Doctors</Link></li>
          </ul>

        </div>

        <div className='footer-3'>
          <h4 className='title'>Explore</h4>
          <ul className='ul-footer'>
            <li className='li-footer'><a className='a-footer' href="">In the community</a></li>
            <li className='li-footer'><a className='a-footer' href="">IU health foundation</a></li>
            <li className='li-footer'><a className='a-footer' href="">Family support</a></li>
            <li className='li-footer'><a className='a-footer' href="">Business solution</a></li>
            <li className='li-footer'><a className='a-footer' href="">Community clinic</a></li>
          </ul>

        </div>
        <div className='footer-4'>
          <h4 className='title'>Resources</h4>
          <ul className='ul-footer'>
            <li className='li-footer'><a className='a-footer' href="">Lights were season</a></li>
            <li className='li-footer'><a className='a-footer' href="">Their is let wherein</a></li>
            <li className='li-footer'><a className='a-footer' href="">which given over</a></li>
            <li className='li-footer'><a className='a-footer' href="">Without given She</a></li>
            <li className='li-footer'><a className='a-footer' href="">Isn two signs think</a></li>
          </ul>

        </div>
        <div className='footer-5'>
          <p className='title'>Newsletter</p>
          <p className='seed'>Seed good winged wherein which night multiply midst does not fruitful</p>
          <div className='input-button'>
            <input className='footer-input' id="myInput" type="email" placeholder={emailPlaceholder}
              onFocus={() => setEmailPlaceholder('')}
              onBlur={() => setEmailPlaceholder('Your Email Address')} />
            {/* <button className='footer-button'><FontAwesomeIcon  className='arrow-right-footer' icon={faArrowRight} /></button> */}
          </div>

        </div>

      </div>

    </>
  )
}

export default Footer
