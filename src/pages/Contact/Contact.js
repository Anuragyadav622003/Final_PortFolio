
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiCodechef, SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_alaexys",     // Replace with your EmailJS service ID
        "template_p04pksk",     // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "TxceL7FSRZLxJjIYs"          
      )
      .then(
        (result) => {
          alert("Message sent successfully");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert(`Error in sending message: ${error.text}`);
        }
      );
  };

  return (
    <div className="contact" id="contactus">
      <motion.h2
        className="col-12 mt-3 mb-1 text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <div className="line"></div>
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <motion.img
                src="https://burst.shopifycdn.com/photos/contact-us-flatlay.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                alt="contact"
                className="image"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: [0, 360] }}
                transition={{ duration: 2, repeat: 1 }}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <motion.div
              className="card2 d-flex card border-0 px-4 py-5"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="row">
                <h6>
                  <div className="social-icons">
                    Check Link👉
                    <a href="https://www.linkedin.com/in/anurag-yadav-3704b1239/">
                      <BsLinkedin color="blue" size={30} />
                    </a>
                    <a href="https://github.com/Anuragyadav622003">
                      <BsGithub color="blue" size={30} />
                    </a>
                    <a href="https://leetcode.com/u/anuragyadav622003/">
                      <SiLeetcode color="blue" size={30} />
                    </a>
                    <a href="https://www.codechef.com/users/anuragyadav622">
                      <SiCodechef color="blue" size={30} />
                    </a>
                  </div>
                </h6>
              </div>

              <div className="row px-3 mb-4">
                <div className="lined" />
                <small className="or text-center">OR</small>
                <div className="lined" />
              </div>

              <div className="row px-3">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="mb-3"
                  value={formData.name}
                  onChange={handleChange}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="row px-3">
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  className="mb-3"
                  value={formData.email}
                  onChange={handleChange}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="row px-3">
                <motion.textarea
                  name="message"
                  placeholder="Write your message"
                  className="mb-3"
                  value={formData.message}
                  onChange={handleChange}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="row px-3">
                <motion.button
                  onClick={handleSubmit}
                  type="submit"
                  className="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SEND MESSAGE
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
