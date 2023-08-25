import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageSrc from './images/jai.jpg';
import imagePawan from './images/Pawan.jpeg';
import imageRuchika from './images/Ruchika.png';
import imageTejas from './images/Tejas.jpeg';
import imageMudassir from './images/Mudassir.jpg';
import '../components/css/About.css';
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';
import Footer from '../components/Footer.js';

export default function About() {
  return (
    
    <React.Fragment>
       <section className="about-section">
        <div className="container-about">
          <h1>About Us</h1>
          <p className="lead">
            We are here to revolutionize the way exams are conducted and assessed. Our Online Examination System offers a comprehensive, efficient, and modern approach to online examinations.
          </p>
        </div>
      </section>
      <section className="features-section">
      <div className="container-about">
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
      

      <div className="container-about ">
        <h2 style={{ textAlign: 'center' }}>Our Team</h2>
        <div className="row justify-content-between">
          {/* Team members */}
          <div className="col-md-4">
            <div className="card-about">
              <img
                src={imageSrc}
                className="card-img-top rounded-circle border ali"
                alt="Card"
                style={{ width: '200px', height: '200px', margin: 'auto' }}
              />
              <div className="container-about">
                <h2>Jai Tembhare</h2>
                <p className="title-about">Frontend Devloper</p>
                <p><FaEnvelope /> jaitembhare@gmail.com</p>
         
                <div className="social-icons">
                    <a href="https://instagram.com/jai_tembhare?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/jai-tembhare-1b4665204"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-about">
              <img
                src={imageRuchika}
                className="card-img-top rounded-circle border "
                alt="Card"
                style={{ width: '200px', height: '200px', margin: 'auto' }}
              />
              <div className="container-about">
                <h2>Ruchika Gaidhani</h2>
                <p className="title-about">Database Administrator</p>
                <p><FaEnvelope /> ruchikagaidhani19@gmail.com</p>
              
                <div className="social-icons">
                    <a href=" https://www.instagram.com/r_u_c_h19/?next=%2F"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/ruchika-gaidhani-670972199/"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-about">
              <img
                src={imageTejas}
                className="card-img-top rounded-circle border"
                alt="Card"
                style={{ width: '200px', height: '200px', margin: 'auto' }}
              />
              <div className="container-about">
                <h2> Tejas Kolambe</h2>
                <p className="title-about">Backend Devloper</p>
                <p><FaEnvelope /> kolambetejas79@gmail.com</p>
                
                <div className="social-icons">
                    <a href="https://www.instagram.com/tejaskolambe/"><FaInstagram /></a>
                    <a href="www.linkedin.com/in/tejas-kolambe-2a0310209"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-about">
        <h2 style={{ textAlign: 'center' }}></h2>
        <div className="row justify-content-between">
          {/* Team members */}
          <div className="col-md-4">
            <div className="card-about">
              <img
                src={imageMudassir}
                className="card-img-top rounded-circle border"
                alt="Card-about"
                style={{ width: '200px', height: '200px', margin: 'auto' }}
              />
              <div className="container-about">
                <h2>Momin Mudassir</h2>
                <p className="title-about">Backend Devloper</p>
                <p><FaEnvelope /> Mudassirraza1286@gmail.com</p>
          
                <div className="social-icons">
                    <a href="https://www.instagram.com/mudassirraza1286/"><FaInstagram /></a>
                    <a href="http://www.linkedin.com/in/mudassir-raza-14bb15289"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-about">
              <img
                src={imagePawan}
                className="card-img-top rounded-circle border"
                alt="Card"
                style={{ width: '200px', height: '200px', margin: 'auto' }}
              />
              <div className="container-about">
                <h2>Pawan Ramtake</h2>
                <p className="title-about">Frontend Devloper</p>
                <p><FaEnvelope /> pawanramtake98@gmail.com</p>
               
                <div className="social-icons">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-about">
              <img
                src={imagePawan}
                className="card-img-top rounded-circle border"
                alt="Card"
                style={{ width: '200px', height: '200px', margin: 'auto' }}
              />
              <div className="container-about">
                <h2>Pawan Ramtake</h2>
                <p className="title-about">Backend Devloper</p>
                <p><FaEnvelope /> pawanramtake98@gmail.com</p>
       
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
