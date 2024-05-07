import React from 'react'
import Navbar from '../../components/Navbar'
import BestCare from "../../components/bescare-component/bestcare-component"
import AboutUs from "../../components/about-us-component/AboutUs"
import Services from "../../components/services-component/Services"
import Department from '../../components/departments-component/Department'
import Doctors from "../../components/doctors-component/Doctors"
import Appointment from '../../components/make-appointment/Appointment'
import Blog from '../../components/our-blog/Blog'
import Footer from '../../components/footer-component/Footer'
function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <BestCare></BestCare>
      <AboutUs></AboutUs>
      <Services></Services>
      <Department></Department>
      <Doctors></Doctors>
      <Appointment></Appointment>
      <Blog></Blog>
      <Footer></Footer>
    </>
  )
}

export default HomePage
