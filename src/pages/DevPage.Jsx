import React from 'react';
import {Route, Routes } from 'react-router-dom';
import projectData from '../data/dev_about.json';
import CardWrapper from '../components/CardWrapper';
//import "./style.css"

<div>
<div>
    <Routes>
      <Route path="CardWrapper" element={<CardWrapper />} />
    </Routes>
  
  <CardWrapper data={projectData}/>
</div>
</div>




export default DevPage