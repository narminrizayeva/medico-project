import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer-component/Footer'
import Department from '../../components/departments-component/Department'
import Doctors from '../../components/doctors-component/Doctors'
function DepartmentsPage() {
  return (
    <>
    <Navbar></Navbar>
    <div className='about-us-page-img-text'>
        <div className='about-us-page-img'>
          <div className='about-us-page-overlay'>
            <h2 className='about-us-h2'>Departments</h2>
          </div>

        </div>

      </div>
    <Department></Department>
    <Doctors></Doctors>
    <Footer></Footer>
      
    </>
  )
}

export default DepartmentsPage

