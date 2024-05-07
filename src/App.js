import React from 'react'
import ContactPage from "./components/contactPage/Contact";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage"
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage"
import DoctorsPage from "./pages/DoctorsPage/DoctorsPage"
import ServicesPage from './pages/ServicesPage/ServicesPage';
import DepartmentsPage from './pages/DepartmentsPage/DepartmentsPage';
function App() {
  return (
    <>
    <Routes>
      <Route path={"/"} element={ <HomePage/> } />
      <Route path={"/about"} element={ <AboutUsPage /> }/>
      <Route path={"/doctors"} element={ <DoctorsPage /> }/>
      <Route path={"/services"} element={ <ServicesPage /> }/>
      <Route path={"/departments"} element={ <DepartmentsPage /> } />
      <Route path={"/contacts"} element={ <ContactPage /> } />
    </Routes>

      {/* <Navbar></Navbar> */}
      {/* <Footer></Footer> */}
      {/* <Appointment></Appointment> */}
      {/* <AboutUs></AboutUs> */}
      {/* <Services></Services> */}
      {/* <Doctors></Doctors> */}
      {/* <Blog></Blog> */}
      {/* <Departments></Departments> */}
      {/* <BestCare></BestCare> */}
      {/* <ContactPage></ContactPage> */}
      {/* <HomePage></HomePage> */}
      {/* <AboutUsPage></AboutUsPage> */}
      {/* <DoctorsPage></DoctorsPage> */}
      {/* <ServicesPage></ServicesPage> */}
      {/* <DepartmentsPage></DepartmentsPage> */}
    </>
  )
}

export default App


