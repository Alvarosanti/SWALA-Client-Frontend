import React from 'react'
import '../../src/App.css';
import HeroSection from '../../src/components/Hero-Section/HeroSection';
import { ProductSection } from '../components/Product-Section/ProductSection';
import  FounderSection  from '../components/Founder-Section/FounderSection';
import  ClientTestimonial  from '../components/ClientTestimonials-Section/ClientTestimonialSection';
import Card from '../components/CardItem/Cards'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../../src/components/Footer-ContactUs/Footer';


function Home() {
    return (
        <>
            <Navbar/>
            <HeroSection />
            <ProductSection />
            <FounderSection />
            <ClientTestimonial />
            <Footer />
        </>
    )
}

export default Home
