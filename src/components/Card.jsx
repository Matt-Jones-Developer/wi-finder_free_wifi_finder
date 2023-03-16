import React from "react";
import styles from "./styles/Card.module.css";
import github_logo from "../assets/png/github-mark-white.png";
import linkedIn_logo from "../assets/png/LI-In-Bug.png";


function Card(props) {

  return (
    <div  className = "bg-[#292C33] bg-opacity-75 m-4 p-6 rounded">
      <div>
      <img src={props.profilePic} alt={props.name} ></img>
      <div>
        <h2 className ="underline decoration-[#78E15B]">{props.name}</h2>
        <h3 className ="mb-4" >{props.jobTitle}</h3>
        <p>{props.about}</p>
          <div className = "pt-6 inline-flex">
            <a className = "object-contain w-10 h-10 mr-4" href={props.gitHubUrl}>
            <img
            src={github_logo}
            alt="GitHub Logo"
          />
            </a>
            <a  className = "object-contain w-12 h-12" href={props.linkedInUrl}>
            <img
            src={linkedIn_logo}
            alt="Linkedin Logo"
            className=""
          />
            </a>
          </div>
          </div>
          </div>
          </div>
  );
}


export default Card;
