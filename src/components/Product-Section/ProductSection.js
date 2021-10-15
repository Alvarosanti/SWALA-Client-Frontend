import React from "react";
import { Link } from "react-router-dom";
import images from "../../assets/images";
import CardProduct from "./CardProduct";

import "./ProductSection.css";

export const ProductSection = () => {
  return (
    <>
      <div className="product_container">
        <div className="box_product_1">
          <h1> Productos </h1>
          <p justify="center">
            Brindamos productos de gran variedad, utilizando los mejores
            ingredientes y frutos frescos para satisfacer las necesidades y
            exigencias de nuestros clientes.
          </p>
          <Link to="/products" className="product_link">
            Ver más
          </Link>
        </div>
        <div className="box_product_2">
          <div className="product_1">
            <CardProduct src={images.img2} path="/products" />{" "}
          </div>
          <div className="product_2">
            <CardProduct src={images.img3} path="/products" />{" "}
          </div>
        </div>
      </div>
    </>
  );
};
