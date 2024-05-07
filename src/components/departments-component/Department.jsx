import React from 'react'
import "./Department.css";
import eyeimg from "../../assets/eye-img.svg";
function Department() {
  return (
    <>
      <div className='department-box'>
        <div className='overlay-department'></div>
        <div className='department-content'>
            <h2 className='h2-department'>Our Department</h2>
            <div className='departments-column'>
                <div className='departments-row'>
                    <div className='department'>
                        <span className='span-img'><img className='eye-img-department' src={eyeimg} alt="" /></span>
                        <div className='department-text'>
                            <h4 className='h4-department'>Internal Medicine</h4>
                            <p className='p-department'>Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.</p>

                        </div>

                    </div>
                    <div className='department'>
                        <span className='span-img'><img className='eye-img-department' src={eyeimg} alt="" /></span>
                        <div className='department-text'>
                            <h4 className='h4-department'>Pediatrics</h4>
                            <p className='p-department'>Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.</p>

                        </div>

                    </div>

                </div>
                <div className='departments-row'>
                    <div className='department'>
                        <span className='span-img'><img className='eye-img-department' src={eyeimg} alt="" /></span>
                        <div className='department-text'>
                            <h4 className='h4-department'>Radiology</h4>
                            <p className='p-department'>Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.</p>

                        </div>

                    </div>
                    <div className='department'>
                        <span className='span-img'><img className='eye-img-department' src={eyeimg} alt="" /></span>
                        <div className='department-text'>
                            <h4 className='h4-department'>Psychiatry</h4>
                            <p className='p-department'>Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

      </div>
    </>
  )
}

export default Department
