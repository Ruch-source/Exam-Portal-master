import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBook, FaClock, FaUserGraduate } from "react-icons/fa";
import { Carousel } from "react-bootstrap";
export default function Home() {
  return (
    <div className="homepage">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1600x600"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to EduVerse</h3>
            <p>Your Pathway to Knowledge and Success</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1600x600"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Explore a World of Learning</h3>
            <p>Discover a wide range of courses tailored to your interests.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1600x600"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Join Our Community of Learners</h3>
            <p>Connect, learn, and achieve your educational goals.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="features">{/* ...previous feature content... */}</div>

      <div className="cta">{/* ...previous cta content... */}</div>
      <div className="homepage">
      <header className="text-center">
        <h1>Welcome to EduVerse</h1>
        <p>Your Pathway to Knowledge and Success</p>
      </header>

      <div className="features">
        <div className="feature">
          <FaBook className="feature-icon" />
          <h2>Explore Courses</h2>
          <p>Discover a wide range of courses tailored to your interests.</p>
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
        <Link to="/signup" className="btn btn-primary">Sign Up Now</Link>
      </div>
    </div>
    </div>
    
  );
}
