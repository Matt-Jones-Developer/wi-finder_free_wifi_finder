import React from "react";
import "./styles/ContactForm.css";
import github from "../assets/png/github-mark.png";
import linkedin from "../assets/png/LI-In-Bug.png";
import phone from "../assets/png/phone-marker.png";
import location from "../assets/png/location-marker.png";
import email from "../assets/png/email-marker.png";
import instagram from "../assets/png/instagram.png";
import twitter from "../assets/png/twitter.png";

const Form = () => {
  return (
    <div className="container flex justify-center">
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
              <p>103 Willow Drive, Milton Keynes, MK41 7BB</p>
            </div>
            <div className="information">
              <img src={email} className="icon" alt="" />
              <p>wifinder@gmail.com</p>
            </div>
            <div className="information">
              <img src={phone} className="icon" alt="" />
              <p>01223-786-671</p>
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

          <form action="index.html" autocomplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
