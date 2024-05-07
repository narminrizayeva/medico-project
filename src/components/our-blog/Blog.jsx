import React from 'react';
import "./Blog.css";
import blogimg1 from "../../assets/blog_2.png.webp"
import blogimg2 from "../../assets/blog_3.png.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';

function Blog() {
    return (
        <>
            <div className='our-blog'>
                
                <div className='our-blog-content'>
                    <h2 className='blog-h2-main'>Our Blog</h2>
                    <div className='blog-cards'>
                        <div className='blog-card-1'>
                            <img src={blogimg1} alt="" />
                            <h5 className='h5-blog'>First cattle which earth unto let health for
                                can get and see what you 
                            </h5>
                            <div className='row-user-clinic'>
                            <div className='user-clinic'><FontAwesomeIcon className='user-clinic-icon' icon={faUser} /><span className='user-clinic-text'>Jhon Mike</span></div>
                            <div className='user-clinic'><FontAwesomeIcon  className='user-clinic-icon'  icon={faBookmark} /><span className='user-clinic-text'>Clinic,Doctors</span></div>
                            </div>

                        </div>
                        <div className='blog-card-1'>
                            <img src={blogimg2} alt="" />
                            <h5 className='h5-blog'>Navigating the Modern Healthcare Landscape: A Comprehensive Guide</h5>
                            <div className='row-user-clinic'>
                            <div className='user-clinic'><FontAwesomeIcon className='user-clinic-icon' icon={faUser} /><span className='user-clinic-text'>Kate Madison</span></div>
                            <div className='user-clinic'><FontAwesomeIcon  className='user-clinic-icon'  icon={faBookmark} /><span className='user-clinic-text'>Guide,Medicine</span></div>
                            </div>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;

