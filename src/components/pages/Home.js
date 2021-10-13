import React from 'react'
import HeroSection from '../Hero-Section/HeroSection';
import '../../App.css';
import Card from '../CardItem/Cards';
import Footer from '../../Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <Card />
            <Footer />
        </>
    )
}

export default Home
