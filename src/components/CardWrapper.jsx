import React from "react";
import Card from "../components/Card";
import projectData from "../data/dev_about.json";



function CardWrapper() {
    const projects = projectData.projects;

    return (
          <div >
             {projectData.map((project,i) => < Card index = {i} {...project}/>)}
        </div>

    );
}


/*function CardWrapper(props) {
    return (
      <div>
        {projectData.map (project =>{
          return <div key={item.id}> <Card{...project}/> </div> 
        })
        }
      </div>
    );
  }
*/
export default CardWrapper;
