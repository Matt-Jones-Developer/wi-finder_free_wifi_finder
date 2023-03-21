import React from "react";
import styles from "./styles/Card.module.css";
import github_logo_dark from "../assets/png/github-mark-white.png";
import linkedIn_logo_dark from "../assets/png/Li-In-White.png";
import github_logo_light from "../assets/png/github-mark.png";
import linkedIn_logo_light from "../assets/png/LI-In-Bug.png"
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

  return (
    <div className={`${styles.cardHolder}`}>
      <div className={`${styles.card} m-4 p-4 rounded shadow-lg dark:bg-gray-900 m-4`}>
        <div className={`${styles.profilePicFrame}`}>
          <img
            className={`${styles.profilePic} object-cover bg-top h-52 w-52 grayscale rounded shadow-lg dark:bg-gray-900`}
            src={profileImages[props.index]}
            alt={props.name}
          />
        </div>
        <div className={`${styles.textContainer} mr-8`}>
          <h2 className="leading-10 pb-6">{props.name}</h2>
          <h3 className={`${styles.jobTile} leading-10 mb-6 font-bold text-lime`} >{props.jobTitle}</h3>
          <p>{props.about}</p>
          <div className="py-5 inline-flex">
            <a className={`${styles.gitHub} object-contain w-10 h-10 mr-4`} href={props.gitHubUrl}>
              <img
                src={github_logo_light}
                alt="GitHub Logo"
              />
            </a>
            <a className={`${styles.linkedIn} object-contain w-12 h-12`} href={props.linkedInUrl}>
              <img
                src={linkedIn_logo_light}
                alt="Linkedin Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Card;
