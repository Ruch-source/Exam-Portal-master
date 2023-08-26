import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/ContactUs.css"; // Import your custom CSS file
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j6yo0gk",
        "template_71hes9k",
        form.current,
        "3sRvVQrnr0OzllQAu"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
    <div className="container mt-5 contact-container mb-3" style={{ backgroundColor: "#87a7c1" }}>
      <h1 className="contact-heading text-light fw-bold">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-light fw-bold">
            Name
          </label>
          <input type="text" name="to_name" className="form-control"  placeholder="Enter Your Name"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-light fw-bold"  >
            Email
          </label>
          <input type="email" name="from_name" className="form-control" placeholder="Enter Yor Email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label  text-light fw-bold ">
            Message
          </label>
          <textarea name="message" className="form-control" placeholder="Enter massage" />
        </div>
        <button type="submit" className="btn btn-success contact-btn">
          Send Message
        </button>
      </form>
      <ToastContainer />
    
    </div>
    <Footer/>
    </>
  );
}
