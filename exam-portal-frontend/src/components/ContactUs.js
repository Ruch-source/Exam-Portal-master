import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          toast("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" name="to_name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" name="from_name" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea name="message" />
        </div>
        <button type="submit" value="Send" className="btn btn-primary">
          Send Message
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
