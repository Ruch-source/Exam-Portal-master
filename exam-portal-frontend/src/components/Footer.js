import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhone,FaFacebook } from 'react-icons/fa';
import '../components/css/Footer.css'; // Import your custom CSS for the footer
const logostyle = {
  color: "rgb(68 177 49)",
  size: "40px",
  
};
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
          
        <Container>
          <Navbar.Brand className='fs-1 '>
            <span style={logostyle}>
              <i>
                <b>E</b>
              </i>
            </span>
            xam
            <span style={logostyle}>
              <i>
                <b>E</b>
              </i>
            </span>
            dge 
          </Navbar.Brand>
          </Container>
          <div className='lh-1'>
          <h2 className='ms-5 mt-3 lh-1.5'>Contact Us</h2>
            <p className='lh-1'><FaEnvelope /> Examedge@gmail.com</p>
            <p className='lh-1'><FaPhone /> +1234567890</p>
          </div>
            
          </div>
          
          <div className="col-md-4  ">
            <h2 >Address</h2>
            <p className='lh-1'>123 Main Street</p>
            <p className='lh-1'>City, Country</p>
          </div>
          <div className="col-md-4 ">
            <h2 >Our Social Media handels are </h2>
            <a className='fs-1 p-2' href='#'><FaInstagram/></a>
            <a className='fs-1 p-2' href='#'><FaLinkedin/></a>
            <a className='fs-1 p-2' href='#'><FaFacebook/></a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
