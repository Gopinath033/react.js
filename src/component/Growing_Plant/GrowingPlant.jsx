import React from "react";
import "./GrowingPlant.scss";

function GrowingPlant() {
  //variable
  const plantName = "Sunflower";
  const size = 25;
  //object
  const plant = {
    name: 'Rose',
    size: 25,
    logo: '🌹'
  }
  return (
    <div className="plant">
      <div className="text">GrowingPlant .........hardCoded</div>
      <div>
        I am a {plantName}....... using variable. <br />
        <div className="logo">
          This is my plant <span style={{ fontSize: `${size}px` }}>🌱</span>
          ....style by size variable
        </div>
      </div>
      <h3>Using Object</h3>
      <div>Type of plant: {plant.name} - <span style={{ fontSize: `${plant.size}px`}}>{plant.logo}</span> </div>
    </div>
  );
}

export default GrowingPlant;
