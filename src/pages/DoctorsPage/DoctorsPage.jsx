import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer-component/Footer'
import Doctors from '../../components/doctors-component/Doctors'
import Appointment from '../../components/make-appointment/Appointment'
function DoctorsPage() {
    return (
        <>
            <Navbar></Navbar>
            <div className='about-us-page-img-text'>
                <div className='about-us-page-img'>
                    <div className='about-us-page-overlay'>
                        <h2 className='about-us-h2'>Doctors</h2>
                    </div>

                </div>

            </div>
            <Doctors></Doctors>
            <Appointment></Appointment>
            <Footer></Footer>
        </>
    )
}

export default DoctorsPage
