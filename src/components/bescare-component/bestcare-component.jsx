import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar";
import "./bescare-component.css";
import background from "..//..//assets/banner_bg.png.webp";
import momwson from "..//..//assets/momwson.webp";

function SiteMainPage() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const appointmentSection = document.getElementById('appointment-section');
      appointmentSection.scrollIntoView({ behavior: "smooth" });
      setClicked(false); 
    }
  }, [clicked]);

  return (
    <>
      <div>
        <div className='container-best-care'>
          <div><img className='background-photo' src={background} alt="" /></div>
          <div className='best-care-part'>
            <div className='best-care-text'>
              <h5>We are here for your care</h5>
              <h1>Best Care & Better Doctor</h1>
              <p>"Exceptional care is more than just expertise; it's the compassion that best doctors bring. They're the guiding light through health's journey, offering comfort, expertise, and healing touch, ensuring the best outcomes."</p>
              <button className='btn-appointment' onClick={() => setClicked(true)}>MAKE AN APPOINTMENT</button>
            </div>
            <div className='best-care-img'>
              <img className='momwson' src={momwson} alt="" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default SiteMainPage;
