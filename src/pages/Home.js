import React from 'react'
import HeroSection from '../../src/components/Hero-Section/HeroSection';
import '../../src/App.css';
import Card from '../../src/components/CardItem/Cards';
import { ProductSection } from '../components/Product-Section/ProductSection';
import Footer from '../../src/components/Footer-ContactUs/Footer';
import  FounderSection  from '../components/Founder-Section/FounderSection';


function Home() {
    return (
        <>
            <HeroSection />
            <ProductSection />
            <FounderSection />
            {/* <Card /> */}
            <Footer />
        </>
    )
}

export default Home
