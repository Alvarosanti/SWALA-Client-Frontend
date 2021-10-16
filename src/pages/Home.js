import React from 'react'
import HeroSection from '../../src/components/Hero-Section/HeroSection';
import '../../src/App.css';
import Card from '../../src/components/CardItem/Cards';


import { ProductSection } from '../components/Product-Section/ProductSection';
import { FoundersSection } from '../components/Founders-Section/FoundersSection';

import Footer from '../../src/components/Footer-ContactUs/Footer';


function Home() {
    return (
        <>
            <HeroSection />
            <ProductSection />
            <FoundersSection />
            <Card />
            <Footer />
        </>
    )
}

export default Home
