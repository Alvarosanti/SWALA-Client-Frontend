import React from "react";
import "./FoundersSection.css";
import images from "../../assets/images";
import CardFounder from "./CardFounder";

export const FoundersSection = () => {
  return (
    <div className="container_box">
      <div className="box_founders">
        <div className="box_1">
          <h1> Founders</h1>
        </div>
        <div className="box_for_founders">
          <CardFounder src={images.img2} path="/" />
          <CardFounder src={images.img2} path="/" />
       
        </div>
      </div>
    </div>
  );
};
