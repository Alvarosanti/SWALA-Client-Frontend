import React from "react";
import "./FounderSection.css";
import images from "../../assets/images";
import { Link } from "react-router-dom";

const FounderSection = () => {
  return (
    <div className="container">
      <div className="container-1">
        <div className="titulo-container">
          <h1> Founders </h1>
        </div>
        <div className="container-founder">
          <div className="founder1">
            <img
              className="founders__item__img"
              alt="Travel"
              src={images.img9}
            />
            <h3> Rosa Santisteban </h3>
            <div className="social-icons-wrap">
              <Link
                className="social-icon-link-facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="social-icon-link-instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
          <div className="founder2">
            <img
              className="founders__item__img"
              alt="Travel"
              src={images.img9}
            />
            <h3> Yesennia Santisteban</h3>
            <div className="social-icons-wrap">
              {/* <div classname="social_icons_founder"> */}
              <Link
                className="social-icon-link-facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="social-icon-link-instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
