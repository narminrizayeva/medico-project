import React from 'react'
import "./AboutUs.css"
import aboutUsBackground from "../../assets/about_bg.png.webp"
import topservice from "../../assets/top_service.png.webp";
import emergency from "../../assets/banner_1.svg"
import cawka from "../../assets/banner_2.svg"
import ximiya from "../../assets/banner_3.svg"
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <>
      <div className='container-about-us'>
        <div className='about-us-row'>
          <div className='aboutUsBackground-box'>
            <img src={topservice} className='topservice-img' alt="" />
          </div>
          <div className='about-us-text'>
            <h2 className='main-text-h2'>About Us</h2>
            <p className='about-us-main-text-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua
              Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra
              maecenas accumsan lacus vel</p>
            <button to="/about" className='learn-more-btn'><Link to="/about" href="" className='learn-more'>LEARN MORE</Link></button>
            <div className='about-us-services'>
              <div className='single-service'>
                <img className='about-us-icon' src={emergency} alt="" />
                <h5  className='h5-about-us'>Emergency</h5>
                <div className='about-us-line'></div>

              </div>

              <div className='single-service'>
                <img className='about-us-icon cawka' src={cawka} alt="" />
                <h5  className='h5-about-us'>Appointment</h5>
                <div className='about-us-line'></div>

              </div>

              <div className='single-service cawka-margin'>
                <img className='about-us-icon' src={ximiya} alt="" />
                <h5 className='h5-about-us'>Qualified</h5>
                
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs


