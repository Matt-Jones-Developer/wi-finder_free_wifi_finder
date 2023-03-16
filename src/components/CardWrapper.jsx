import React from "react";
import Card from "../components/Card";
import projectData from "../data/dev_about.json";
//import "./style.css";

function CardWrapper() {
    const projects = projectData.projects;

    return (
          <div >
             {projectData.map(project => < Card {...project}/>)}
        </div>

    );
}

export default CardWrapper;