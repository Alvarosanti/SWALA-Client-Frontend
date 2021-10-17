import React from "react";
import { Link } from "react-router-dom";

function CardFounder(props) {
  return (
    <>
      <li className="founders__item">
        <div className="founders__item__div" to={props.path}>
          <figure
            className="founders__item__pic-wrap"
            data-category={props.label}
          >
            <img className="founders__item__img" alt="Travel" src={props.src} />
          </figure>
          <div className="founders__item__info">
            <h5 justify="center" className="founders__item__text">
              {props.text}
            </h5>

          </div>
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
        {/* </div> */}
      </li>
    </>
  );
}

export default CardFounder;
