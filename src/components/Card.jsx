import React from "react";
//import "./style.css";


function Card(props) {

  return (
    <div>
      <img src={props.profilePic} alt={props.name} ></img>
      <div>
        <h3>{props.name}</h3>
        <h2>{props.jobTitle}</h2>
        <p>{props.about}</p>
          <div>
            <a href={props.gitHubUrl}>
              <img src="../assets/png/github-mark.png" alt="GitHub Logo"></img>
            </a>
            <a href={props.linkedInUrl}>
                <img src="../assets/png/LI-Logo.png" alt="LinedIn Logo"></img>
            </a>
          </div>
          </div>
          </div>
  );
}


export default Card;
