import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLaptop, FaClock, FaUserGraduate } from "react-icons/fa";
import { Carousel } from "react-bootstrap";
import poster1 from './images/Homeposter1.jpg'
import poster2 from './images/Homeposter2.jpg'
import poster3 from './images/Homeposter3.jpg'
import pencil from './images/pencilhomepage.png'
import Footer from "./Footer";

export default function Home() {
  return (
    <body>
    <div className="homepage">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={poster1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={poster2}
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={poster3}
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>
      
      <div className="container-features  mt-5 border-dark shadow d-flex rounded-2">
      <div className="lines mt-5 ">
        <h1 className="mt-3 fst-italic">|| Work Hard Dream Big ||</h1>
        <h3 className="fst-italic">Harness the Power of Your Efforts Alongside Our Dynamic Quizzes</h3>
        <h3 className="fst-italic">Uniting for Your Journey Towards Achievement!</h3>
        <h2></h2>
        <h2></h2>
      </div>
      <div className="animation ">
        <div className="solar-system">
          <div className="sun"></div>
          <div className="earth"></div>
        </div>
      </div>
    </div>
      <div className="features"></div>

      <div className="cta">{/* ...previous cta content... */}</div>
      <div className="homepage ">
      <header className="text-center">
        <h1>Welcome to ExamEdge</h1>
        <p className="fst-italic text-decoration-underline">Your Pathway to Knowledge and Success</p>
      </header>

      <div className="features">
        <div className="feature">
          <FaLaptop className="feature-icon" />
          <h2>Explore Quizes</h2>
          <p>Discover a wide range of quizes tailored to your interests.</p>
        </div>
        <div className="feature">
          <FaClock className="feature-icon" />
          <h2>Flexible Learning</h2>
          <p>Learn at your own pace with our flexible online education.</p>
        </div>
        <div className="feature">
          <FaUserGraduate className="feature-icon" />
          <h2>Achieve Success</h2>
          <p>Join our community of learners and achieve your educational goals.</p>
        </div>
      </div>

      <div className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Embark on your learning journey today.</p>
        <Link to="/Signup" className="btn btn-primary">Sign Up Now</Link>
      </div>
    </div>
    <div className="marquee-container">
      <marquee behavior="scroll" direction="left" scrollamount="20">
        <img src={pencil} width="120" height="80" alt="Natural" />
      </marquee>
    </div>
    </div>
    <Footer/>
    </body>    
  );
}
