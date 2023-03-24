import React from "react";
import Card from "../components/Card";
import projectData from "../data/dev_about.json";

function CardWrapper() {
    return (
      <div className="mt-16">
        {projectData.map((project, i) => (
          <Card key={`card-${i}`} index={i} {...project} />
        ))}
      </div>
    );
}

export default CardWrapper;
