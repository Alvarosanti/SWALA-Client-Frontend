import * as React from 'react';
import img from '../../assets/images';
import TestimonialItem from './ClientTestimonialItem';
import './ClientTestimonial.css';
import '../../App.css';



function ClientTestimonial(){
	return (
        <>
		<div className="cards-testimonials">
			<h1>Client Testimonials</h1>
			<div className="cards__testimonial-container">
				<div className="cards__testimonial-wrapper">
					<ul className="cards__testimonials">
						<TestimonialItem
							src={img.img1}
							description="Descripcion del producto de alta calidad super recomendado 1."
							rrss="Facebook"
						/>
						<TestimonialItem
							src={img.img2}
							description="Descripcion del producto de alta calidad super recomendado 2."
							rrss="Instagram"
						/>
						<TestimonialItem
							src={img.img3}
							description="Descripcion del producto de alta calidad super recomendado 3."
							rrss="Twitter"
						/>
					</ul>
				</div>
			</div>
		</div>
        </>
	);
};

export default ClientTestimonial;


