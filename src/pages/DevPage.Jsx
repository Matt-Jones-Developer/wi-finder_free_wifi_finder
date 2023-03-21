import React from 'react';
import projectData from '../data/dev_about.json';
import CardWrapper from '../components/CardWrapper';
//import "./style.css"

const DevPage = () => {
  console.log("test")
  console.log(projectData)
  return(
    
<div className='pt-5'>
  <CardWrapper data={projectData}/>
</div>
  )
}


export default DevPage