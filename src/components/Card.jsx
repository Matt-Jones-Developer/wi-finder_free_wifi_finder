import React from "react";
// import styles from "./styles/Card.module.css";
import github_logo from "../assets/png/github-mark-white.png";
import linkedIn_logo from "../assets/png/LI-In-Bug.png";
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

// console.log(profileImages)

function Card(props) {

  return (
    <div className="bg-[#292C33] bg-opacity-75 m-4 p-6 rounded">
      <div className="flex justify-between">
        <div className="w-3/5 ">
          <h2>{props.name}</h2>
          <h3 className="mb-6 font-bold text-lime" >{props.jobTitle}</h3>
          <p>{props.about}</p>
          <div className="pt-6 inline-flex">
            <a className="object-contain w-10 h-10 mr-4" href={props.gitHubUrl}>
              <img
                src={github_logo}
                alt="GitHub Logo"
              />
            </a>
            <a className="object-contain w-12 h-12" href={props.linkedInUrl}>
              <img
                src={linkedIn_logo}
                alt="Linkedin Logo"
              />
            </a>
          </div>
        </div>
        <div className="inline-flex justify-items-end">
              <img 
              className="object-contain w-40 h-40"
              src={profileImages[props.index]} 
              alt={props.name}
              >
              </img>            
            </div>
      </div>
    </div>
  );
}

export default Card;
