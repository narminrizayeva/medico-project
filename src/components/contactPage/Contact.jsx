import React, { useState } from 'react';
import "./Contact.css";
import Navbar from "../../components/Navbar";
import contactImg from "../../assets/breadcrumb.png.webp";
import { faEnvelope, faHouse, faMobile, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "../../components/footer-component/Footer";

function Contact() {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isMessageFocused, setIsMessageFocused] = useState(false);

  const handleNameFocus = () => {
    setIsNameFocused(true);
  };

  const handleNameBlur = () => {
    setIsNameFocused(false);
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handleMessageFocus = () => {
    setIsMessageFocused(true);
  };

  const handleMessageBlur = () => {
    setIsMessageFocused(false);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className='contact-box'>
        <div className='contact-img-text'>
          <div className='contact-img'>
            <div className='overlay-contact'>
              <h2 className='contact-h2'>Contact</h2>
            </div>
          </div>
        </div>
        <div className='google-map'>
          <iframe
            className='map'
            title="Google Map"
            frameborder="0"
            scrolling="no"
            // marginheight="0"
            // marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.9995204237055!2d-122.07882978539956!3d37.391573179803174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc4c5a7c28c1%3A0x69a3a48d2cd9a0e0!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1631614509464!5m2!1sen!2sus"
          ></iframe>
        </div>

        <div className='table-adress'>


          <div className='table'>
            <h2 className='get-in-touch'>Get in Touch</h2>
            <div className='textarea-div'>
              <textarea
                className='textarea-contact'
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder={isMessageFocused ? '' : 'Enter Message'}
                onFocus={handleMessageFocus}
                onBlur={handleMessageBlur}
              ></textarea>
            </div>
            <div className='inputs'>
              <div>
                <input
                  className='input-contact first-contact'
                  type="text"
                  placeholder={isNameFocused ? '' : 'Enter Your Name'}
                  onFocus={handleNameFocus}
                  onBlur={handleNameBlur}
                />
              </div>
              <div>
                <input
                  className='input-contact'
                  type="text"
                  placeholder={isEmailFocused ? '' : 'Enter Your Email'}
                  onFocus={handleEmailFocus}
                  onBlur={handleEmailBlur}
                />
              </div>
            </div>
            <div>
              <input
                className='input-message'
                type="text"
                placeholder={isMessageFocused ? '' : 'Enter Your Message'}
                onFocus={handleMessageFocus}
                onBlur={handleMessageBlur}
              />
            </div>
            <button className='contact-button'>Send Message</button>
          </div>
          <div className='address'>
            <div className='address-icon'>
              <FontAwesomeIcon className='icon-contact' icon={faHouse} />
              <div className='adrdress-text'>
                <h3 className='country'>Buttonwood, California.</h3>
                <p className='rosemead'>Rosemead, CA 91770</p>
              </div>
            </div>

            <div className='address-icon'>
              <FontAwesomeIcon className='icon-contact' icon={faPhoneFlip} />
              <div className='adrdress-text'>
                <h3 className='country'>050-349-6778</h3>
                <p className='rosemead'>Rosemead, CA 91770</p>
              </div>
            </div>
            <div className='address-icon'>
              <FontAwesomeIcon className='icon-contact' icon={faEnvelope} />
              <div className='address-text'>
                <h3 className='country'>support@colorlib.com</h3>
                <p className='rosemead'>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer></Footer>
    </>
  );
}

export default Contact;
