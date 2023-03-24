import React from "react";
import styles from "./styles/Card.module.css";
import github_logo from "../assets/png/github_white.png";
import linkedIn_logo from "../assets/png/linkedin_white.png";
import marcHudson from "../assets/jpg/marc_hudson_profile_pic.jpg"
import kelvinEnaro from "../assets/jpg/kelvin_enaro_profile_pic.jpg"
import fiODonnell from "../assets/jpg/fionnuala_odonnell_profile_pic.jpg";
import mattJones from "../assets/jpg/matt_jones_profile_pic.jpg";

const profileImages = {
  0: marcHudson,
  1: fiODonnell,
  2: kelvinEnaro,
  3: mattJones
}


function Card(props) {
  const { index } = props;

  return (
    <div className={`${styles.cardHolder}`} key={index}>
      <div
        className={`${styles.card} m-4 p-4 rounded shadow-lg dark:bg-gray-900 m-4`}
      >
        <div className={`${styles.profilePicFrame}`}>
          <img
            className={`${styles.profilePic} object-cover bg-top h-52 w-52 grayscale rounded shadow-lg dark:bg-gray-900`}
            src={profileImages[props.index]}
            alt={props.name}
          />
        </div>
        <div className={`${styles.textContainer} mr-8`}>
          <h2 className="leading-10 pb-6">{props.name}</h2>
          <h3
            className={`${styles.jobTile} leading-10 mb-6 font-bold text-lime`}
          >
            {props.jobTitle}
          </h3>
          <p>{props.about}</p>
          <div className="py-5 inline-flex">
            <a
              className={`${styles.gitHub} object-contain w-10 h-10 mr-4`}
              href={props.gitHubUrl}
            >
              <img src={github_logo} alt="GitHub Logo" />
            </a>
            <a
              className={`${styles.linkedIn} object-contain w-12 h-12`}
              href={props.linkedInUrl}
            >
              <img src={linkedIn_logo} alt="Linkedin Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
