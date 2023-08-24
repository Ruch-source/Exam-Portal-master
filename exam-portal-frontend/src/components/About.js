import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageSrc from '../pages/images/jai.jpg';
import imagePawan from '../pages/images/Pawan.jpeg';
import '../components/css/About.css';
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';
import Footer from '../components/Footer.js';

export default function About() {
  return (
    <React.Fragment>
       <section className="about-section">
        <div className="container">
          <h1>About Us</h1>
          <p className="lead">
            We are here to revolutionize the way exams are conducted and assessed. Our Online Examination System offers a comprehensive, efficient, and modern approach to online examinations.
          </p>
        </div>
      </section>
      <section className="features-section">
      <div className="container">
        <h2 className="section-title text-white">Our Features</h2>
        <div className="row justify-content-center">
          <div className="col-md-5 feature">
            <h3>User Authentication and Authorization</h3>
            <p>Secure logins with role-based access for authorized users.</p>
          </div>
          <div className="col-md-5 feature">
            <h3>Real-time Exam Taking</h3>
            <p>Students can take exams remotely with measures to prevent cheating.</p>
          </div>
          <div className="col-md-5 feature">
            <h3>User-friendly Interface</h3>
            <p>Intuitive design for an enhanced user experience.</p>
          </div>
          <div className="col-md-5 feature">
            <h3>Result Generation</h3>
            <p>Instant results for objective questions, empowering students with feedback.</p>
          </div>
          {/* Add more features here */}
        </div>
      </div>
    </section>
      

      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Our Team</h2>
        <div className="row justify-content-between">
          {/* Team members */}
          <div className="col-md-4">
            <div className="card">
              <img
                src={imageSrc}
                className="card-img-top rounded-circle border"
                alt="Card"
                style={{ width: '200px', height: '200px', margin: 'auto' }}
              />
              <div className="container">
                <h2>Jai Tembhare</h2>
                <p className="title">Frontend Devloper</p>
                <p><FaEnvelope /> jaitembhare@gmail.com</p>
                <p><FaPhone /> +917721887151</p>
                <div className="social-icons">
                    <a href="https://instagram.com/jai_tembhare?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/jai-tembhare-1b4665204"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={imagePawan}
                className="card-img-top rounded-circle border"
                alt="Card"
                style={{ width: '200px', height: '200px', margin: 'auto' }}
              />
              <div className="container">
                <h2>Pawan Ramtake</h2>
                <p className="title">Backend Devloper</p>
                <p><FaEnvelope /> pawanramtake98@gmail.com</p>
                <p><FaPhone />+917774997165</p>
                <div className="social-icons">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={imagePawan}
                className="card-img-top rounded-circle border"
                alt="Card"
                style={{ width: '200px', height: '200px', margin: 'auto' }}
              />
              <div className="container">
                <h2>Pawan Ramtake</h2>
                <p className="title">Backend Devloper</p>
                <p><FaEnvelope /> pawanramtake98@gmail.com</p>
                <p><FaPhone />+917774997165</p>
                <div className="social-icons">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <h2 style={{ textAlign: 'center' }}></h2>
        <div className="row justify-content-between">
          {/* Team members */}
          <div className="col-md-4">
            <div className="card">
              <img
                src={imagePawan}
                className="card-img-top rounded-circle border"
                alt="Card"
                style={{ width: '200px', height: '200px', margin: 'auto' }}
              />
              <div className="container">
                <h2>Pawan Ramtake</h2>
                <p className="title">Backend Devloper</p>
                <p><FaEnvelope /> pawanramtake98@gmail.com</p>
                <p><FaPhone />+917774997165</p>
                <div className="social-icons">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={imagePawan}
                className="card-img-top rounded-circle border"
                alt="Card"
                style={{ width: '200px', height: '200px', margin: 'auto' }}
              />
              <div className="container">
                <h2>Pawan Ramtake</h2>
                <p className="title">Backend Devloper</p>
                <p><FaEnvelope /> pawanramtake98@gmail.com</p>
                <p><FaPhone />+917774997165</p>
                <div className="social-icons">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={imagePawan}
                className="card-img-top rounded-circle border"
                alt="Card"
                style={{ width: '200px', height: '200px', margin: 'auto' }}
              />
              <div className="container">
                <h2>Pawan Ramtake</h2>
                <p className="title">Backend Devloper</p>
                <p><FaEnvelope /> pawanramtake98@gmail.com</p>
                <p><FaPhone />+917774997165</p>
                <div className="social-icons">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        </div>
      </div>

      <Footer />
    </React.Fragment>
    
  );
}
