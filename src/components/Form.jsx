import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles/ContactForm.css";
import github from "../assets/png/github_black.png";
import linkedin from "../assets/png/linkedIn_sml.png";
import phone from "../assets/png/phone-marker.png";
import location from "../assets/png/location_marker.png";
import email from "../assets/png/email_marker.png";
import instagram from "../assets/png/instagram.png";
import twitter from "../assets/png/twitter.png";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_toemmvl",
        "template_u7zdmcr",
        form.current,
        "nHLOt7aSsKoc6rIYw"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="formContainer flex justify-center">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Wifinder is an app for locating wifi hot spots in your current
            location and allows you to enjoy free internet on the go!
            <br />
            <br />
            It is ideal for people who work remotely, making daily commuting
            more enjoyable and fun. if you have any problems using this app
            please let us know and one of our Developers will be happy to help.
          </p>

          <div className="info">
            <div className="information">
              <img src={location} className="icon" alt="location map icon" />
              <p>101 Bond Street, London, SE1 9AA</p>
            </div>
            <div className="information">
              <img src={email} className="icon" alt="email envelope icon" />
              <p>info@wifinder.com</p>
            </div>
            <div className="information">
              <img src={phone} className="icon" alt="phone icon" />
              <p>01234-567-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/">
                <img
                  src={instagram}
                  className="icon"
                  alt="instagram icon"
                  width="30px"
                />
              </a>
              <a href="https://github.com/Matt-Jones-Developer">
                <img
                  src={github}
                  className="icon"
                  alt="github icon"
                  width="30px"
                />
              </a>
              <a href="https://www.linkedin.com/in/matt-jones-zx81/">
                <img
                  src={linkedin}
                  className="icon"
                  alt="linkedIn icon"
                  width="30px"
                />
              </a>
              <a href="https://twitter.com">
                <img
                  src={twitter}
                  className="icon"
                  alt="twitter icon"
                  width="30px"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form ref={form} onSubmit={sendEmail}>
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <label to="input-container">Username</label>
              <input
                type="text"
                name="user_name"
                className="input"
                placeholder="Enter your name"
              />

              {/* <span>Username</span> */}
            </div>
            <div className="input-container">
              <label to="input-container">Email</label>
              <input
                type="email"
                name="user_email"
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
