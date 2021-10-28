import React from 'react';
import { Link } from 'react-router-dom';
import "./ProductSection.css";

function CardProduct(props) {
    return (
        <>
            <div className='cards_product'>
                <Link className='cards_product_link' to={props.path}>
                    <figure className='cards_product_pic-wrap' data-category={props.label}>
                        <img className='cards_product_img' alt='Travel' src={props.src} />
                    </figure>
                </Link>
            </div>   
        </>
    );  
}


export default CardProduct;
