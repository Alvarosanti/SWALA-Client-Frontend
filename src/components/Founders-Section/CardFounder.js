import React from 'react';
import { Link } from 'react-router-dom';
import "./FoundersSection.css";

function CardFounder(props) {
    return (
        <>
            <div className='cards_founder'>
                <Link className='cards_founder_link' to={props.path}>
                    <figure className='cards_founder_pic-wrap' data-category={props.label}>
                        <img className='cards_founder_img' alt='Travel Image' src={props.src} />
                    </figure>
                </Link>
            </div>   
        </>
    );  
}


export default CardFounder;
