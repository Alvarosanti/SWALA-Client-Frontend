import React from 'react'
import HeroSection from '../../src/components/Hero-Section/HeroSection';
import '../../src/App.css';
import Card from '../../src/components/CardItem/Cards';
import Footer from '../../src/Footer';
import { ProductSection } from '../components/Product-Section/ProductSection';
import { FoundersSection } from '../components/Founders-Section/FoundersSection';

function Home() {
    return (
        <>
            <HeroSection />
            <Card />
            <ProductSection />
            <FoundersSection />
            <Footer />
        </>
    )
}

export default Home
