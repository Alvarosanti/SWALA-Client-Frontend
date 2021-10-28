import React from "react";
import '../../src/App.css';
import ProductCatalog from "../components/ProductCatalog/ProductCatalog";
import Footer from '../../src/components/Footer-ContactUs/Footer';

function Products(){
    return(
        <>
            <ProductCatalog />
            <Footer/>
        </>

    ) 
}

export default Products