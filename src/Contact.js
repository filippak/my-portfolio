import React from 'react'
import './style/Contact.css';
import profile from './icons/profile2.png';

const Contact = () => (
  <div className="Contact">
    <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 contact-info-box">
              <div className="hello-box">
                <h1 className="hello" > Hello, </h1>
                <h2> I&#39;m excited to talk to you! </h2>
              </div>
            </div>
            <div className="col-md-6">
              <img className="profile-pic" src={profile} />
            </div>
            <div className="col-md-6 contact-info-box">
              <h3> Contact me at: </h3>
              <h4> fkarrfelt@gmail.com</h4>
              <h4> (+46) 703 480 588 </h4>
            </div>
            <div className="col-md-6">
            </div>
          </div>
    </div>
  </div>
)

export default Contact
