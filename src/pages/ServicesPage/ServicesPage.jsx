import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer-component/Footer'
import Doctors from '../../components/doctors-component/Doctors'
import Appointment from '../../components/make-appointment/Appointment'
import Services from '../../components/services-component/Services'
function ServicesPage() {
  return (
    <>
    <Navbar></Navbar>
            <div className='about-us-page-img-text'>
                <div className='about-us-page-img'>
                    <div className='about-us-page-overlay'>
                        <h2 className='about-us-h2'>Services</h2>
                    </div>

                </div>

            </div>
            <Services></Services>
            <Doctors></Doctors>
            <Appointment></Appointment>
            <Footer></Footer>
      
    </>
  )
}

export default ServicesPage

