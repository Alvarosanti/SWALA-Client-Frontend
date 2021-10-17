import React from "react";
import "./FounderSection.css";
import images from "../../assets/images";
import CardFounder from "./CardFounder";

function FounderSection() {
  return (
    <div className="founders">
      <div className="founders__container"> 
        <div> ⠀</div>
        <h1>Founders</h1>
        <div className="founders__wrapper">
          <ul className="founders__items">
            <CardFounder
              src={images.img9}
              text="Yesennia Santisteban"
              label=""
              path="/services"
            />
            <CardFounder
              src={images.img2}
              text="Rosa Santisteban"
              label=""
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FounderSection;
