import React, { useState } from 'react';
import "./Doctors.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
import doctor_1 from "../../assets/doctor_1.png.webp";
import doctor_2 from "../../assets/doctor_2.png.webp"
import doctor_3 from "../../assets/doctor_3.png.webp"
import doctor_4 from "../../assets/doctor_4.png.webp";

function Doctors() {

  return (
    <div className='doctors-container'>
      <div className='doctors-manintxt'>
        <h2 className='h2-doctors'> Experienced Doctors</h2>
        <p className='p-doctors'>Face replenish sea good winged bearing years air divide wasHave night male also</p>
      </div>
      <div className='doctor-cards'>
        {[
          { name: "DR Adam Billiard", specialty: "Heart specialist", imgSrc: doctor_1 },
          { name: "DR Ava Martinez", specialty: "Medicine specialist", imgSrc: doctor_4 },
          { name: "DR Fred Macyard", specialty: "Ophthalmology", imgSrc: doctor_2 },
          { name: "DR Justin Stuard", specialty: "Pediatrics", imgSrc: doctor_3 }
        ].map((doctor, index) => (
          <div className='single-doctor-card' key={index}>
            <img className='doctor-img' src={doctor.imgSrc} alt=""/>
            <div className='social-icons'>
                <ul>
                  <li className='li-doctor'><a href="https://www.facebook.com/"><FontAwesomeIcon className='doctors-social-icons' icon={faFacebookF} /></a></li>
                  <li  className='li-doctor'><a href="https://twitter.com/?lang=ru"><FontAwesomeIcon className='doctors-social-icons' icon={faTwitter} /></a></li>
                  <li  className='li-doctor'><a href="https://www.instagram.com/"><FontAwesomeIcon className='doctors-social-icons' icon={faInstagram} /></a></li>
                  <li  className='li-doctor'><a href="https://www.skype.com/ru/"><FontAwesomeIcon className='doctors-social-icons' icon={faSkype} /></a></li>
                </ul>
              </div>
            <div className='doctor-text'>
              <h3 className='h3-doctor'>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
