import React from 'react'
import "./AboutUsPage.css"
import Navbar from '../../components/Navbar'
import AboutUs from '../../components/about-us-component/AboutUs'
import Footer from '../../components/footer-component/Footer'
import Department from '../../components/departments-component/Department'
function AboutUsPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className='about-us-page-img-text'>
        <div className='about-us-page-img'>
          <div className='about-us-page-overlay'>
            <h2 className='about-us-h2'>About Us</h2>
          </div>

        </div>

      </div>
      <AboutUs></AboutUs>
      <Department></Department>
      <Footer></Footer>

    </>
  )
}

export default AboutUsPage
