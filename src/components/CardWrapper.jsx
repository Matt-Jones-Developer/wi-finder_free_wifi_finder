import React from "react";
import Card from "../components/Card";
import projectData from "../data/dev_about.json";



function CardWrapper() {
    return (
          <div >
             {projectData.map((project,i) => < Card index = {i} {...project}/>)}
        </div>

    );
}

export default CardWrapper;
