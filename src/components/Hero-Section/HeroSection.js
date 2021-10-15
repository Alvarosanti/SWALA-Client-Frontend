import React from 'react';
import { Button } from '../Button-SignUp/Button';
import './HeroSection.css';
import '../../App.css';

function HeroSection() {
	return (
		<div className="hero-container">
			<h1>Pasteleria Fina</h1>
			<p>Descripcion acerca del servicio que ofrecemos sobre decoracion y pedidos personalizados, delivery y ofertas.</p>
			<div className="hero-btns">
				<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
					Catalogo
				</Button>
				<Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
					Ver mas <i class="fas fa-arrow-down"></i>
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
