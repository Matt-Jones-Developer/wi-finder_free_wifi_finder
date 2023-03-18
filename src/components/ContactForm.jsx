import React from "react";
import styles from "./styles/ContactForm.module.css";

const Form = () => {
  return (
    <div className="container flex-1 w-full">
      <form className={`${styles.form}`}>
        <h1>
          Contact <span>Here</span>
        </h1>
        <input type="text" name="name" id="" placeholder="Enter name" />
        <input
          type="email"
          name="email"
          id=""
          placeholder="example@gmail.com"
        />
        <input type="phone" name="phone" id="" placeholder="+44" />
        <textarea name="message" id="" cols="30" rows="10" placeholder="" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
