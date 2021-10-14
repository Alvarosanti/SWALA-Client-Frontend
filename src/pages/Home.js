import React from 'react'
import HeroSection from '../../src/components/Hero-Section/HeroSection';
import '../../src/App.css';
import Card from '../../src/components/CardItem/Cards';
import Footer from '../../src/Footer';

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
