import React, { useState } from 'react';
import "./Services.css";
import servicesdoctor from "../../assets/service-doctor.png";
import eyeimg from "../../assets/eye-img.svg";
import toothimg from "../../assets/tooth-img.svg";

function Services() {
    const [servicesData, setServicesData] = useState([
        { 
            title: 'Pediatrics', 
            image: toothimg, 
            description: 'Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.' 
        },
        {
            title: 'Dermatology',
            image: eyeimg,
            description: 'Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.'
        },
        {
            title: "Neurology",
            image: eyeimg,
            description: 'Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.'
        },
        {
            title: "Psychiatry",
            image: toothimg,
            description: 'Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.'
        }
    ]);

    return (
        <>
            <div className='services'>
            <h2 className='services-h2-main'>Our Services</h2>
                <div className='services-box'>
                
                    <div className='services-box-1'>
                        {servicesData.slice(0, 2).map((service, index) => (
                            <div className='services-box-1-left' key={index}>
                                <div className='services-img-text-row'>
                                    <span className='img-background'><img className='tooth-img' src={service.image} alt="" /></span>
                                    <h4 className='services-h4'>{service.title}</h4>
                                </div>
                                <p className='services-p'>{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className='services-doctor-box'>
                        <img className='services-doctor' src={servicesdoctor} alt="" />
                    </div>
                    <div className='services-box-2'>
                        {servicesData.slice(2).map((service, index) => (
                            <div className='services-box-1-left' key={index}>
                                <div className='services-img-text-row'>
                                    <span className='img-background'><img className='tooth-img' src={service.image} alt="" /></span>
                                    <h4 className='services-h4'>{service.title}</h4>
                                </div>
                                <p className='services-p'>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;


