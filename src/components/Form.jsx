import React from "react";
import "./styles/ContactForm.css";
import github from "../assets/png/github_black.png";
import linkedin from "../assets/png/linkedin_blue.png";
import phone from "../assets/png/phone-marker.png";
import location from "../assets/png/location_marker.png";
import email from "../assets/png/email_marker.png";
import instagram from "../assets/png/instagram.png";
import twitter from "../assets/png/twitter.png";

const Form = () => {
  return (
    <div className="formContainer flex justify-center -mt-32">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Wifinder is a Great app for locating hotspot in your current
            location and allows you to enjoy free internet on the go! It is
            ideal for people who work remotely, making daily commuting more
            enjoyable and fun. if you have an problems using this App please let
            us know and one of our Developers will be happy to help.
          </p>

          <div className="info">
            <div className="information">
              <img src={location} className="icon" alt="" />
              <p>101 Bond Street, London, SE1 9AA</p>
            </div>
            <div className="information">
              <img src={email} className="icon" alt="" />
              <p>info@wifinder.com</p>
            </div>
            <div className="information">
              <img src={phone} className="icon" alt="" />
              <p>01234-567-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <img src={instagram} className="icon" alt="" width="30px" />

              <img src={github} className="icon" alt="" width="30px" />

              <img src={linkedin} className="icon" alt="" width="30px" />

              <img src={twitter} className="icon" alt="" width="30px" />
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <label to="input-container">Username</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter your name"
              />

              {/* <span>Username</span> */}
            </div>
            <div className="input-container">
              <label to="input-container">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email"
              />

              {/* <span>Email</span> */}
            </div>
            <div className="input-container">
              <label tfo="input-container">Phone</label>
              <input
                type="tel"
                name="phone"
                className="input"
                placeholder="Enter your phone number"
              />

              {/* <span>Phone</span> */}
            </div>
            <div className="input-container textarea">
              <label to="input-container">Message</label>
              <textarea
                name="message"
                className="input"
                placeholder="Send us a message!"
              ></textarea>
              {/* <span>Message</span> */}
            </div>
            <input type="submit" value="Send" className="btnForm" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
