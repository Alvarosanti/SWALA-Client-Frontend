import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import images from '../../assets/images';

function Cards() {
    return (
        <div className='cards'>
            <h1>Prodructos</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                       <CardItem 
                        src={images.img9} 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle' 
                        label='Adventure' 
                        path='/services'
                       />            
                        <CardItem 
                        src={images.img2} 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle' 
                        label='Adventure' 
                        path='/services'
                       />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src= {images.img3}
                        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'
                        path='/services'
                        />
                        <CardItem
                        src={images.img4}
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Adventure'
                        path='/products'
                        />
                        <CardItem
                        src={images.img8}
                        text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adrenaline'
                        path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;