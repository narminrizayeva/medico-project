import React, { useState } from 'react';
import "./Appointment.css";
import doctorappointment from "../../assets/doctorappointment.png";

function Appointment() {
  const [inputValue, setInputValue] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [note, setNote] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleMakeAppointment = () => {
    setInputValue('');
    setSelectedService('');
    setNote('');
  };

  return (
    <>
      <div className='appointment' id="appointment-section">
        <div className='appointment-img'>
          <div className="overlay"></div>
          <img className="doctor-appointment" src={doctorappointment} alt="" />
        </div>
        <div className='table'>
          <div className='appointment-table'>
            <h2 className='make-appointment-h2'>Make an Appointment</h2>
            <div  className='table'>
              <div className='div-1-row'>
                <div><input className='input-appointment select-1' type="text" placeholder='Your Name' value={inputValue} onChange={handleInputChange} /></div>
                <div><input className='input-appointment ' type="email" placeholder='Email Address' /></div>
              </div>
              <div className='div-2-row'>
                <div>
                  <select className='input-appointment select-1' name="appointment-services" id="appointment-services" placeholder="Select A Service" value={selectedService} onChange={handleSelectChange}>
                    <option className='options' value="Pediatrics">Pediatrics</option>
                    <option className='options' value="Cardiology">Cardiology</option>
                    <option className='options' value="Dermatology">Dermatology</option>
                    <option className='options' value="Neurology">Neurology</option>
                    <option className='options' value="Psychiatry">Psychiatry</option>
                    <option className='options' value="Dentistry">Dentistry</option>
                  </select>
                </div>
                <div>
                  <select className='input-appointment select-2' name="Time" id="Time">
                    <option className='options' value="">8am</option>
                    <option className='options' value="">9am</option>
                    <option className='options' value="">10am</option>
                    <option className='options' value="">11am</option>
                  </select>
                </div>
              </div>
              <div>
                <div><textarea className='textarea-appointment' id="textarea-appointment" placeholder='Your Note' name="textarea-appointment" value={note} onChange={handleNoteChange} cols="45" rows="10"></textarea></div>
              </div>
              <div>
                <div><button className='btn-appointment' onClick={handleMakeAppointment}>MAKE AN APPOINTMENT</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
