import React from 'react';
import './Footer.css';
import { Button } from '../Button-SignUp/Button';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					Pasteleria fina Los alfajores de la Lola
				</p>
				<p className="footer-subscription-text">Puedes suscribirte ingresando tu correo para recibir todas las ofertas.</p>
				<div className="input-areas">
					<form>
						<input type="email" name="email" placeholder="Your Email" className="footer-input" />
						<Button buttonStyle="btn--outline">Subscribe</Button>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>About Us</h2>
						<Link to="/sign-up">How it works</Link>
						<Link to="/">Testimonials</Link>
						<Link to="/">Careers</Link>
						<Link to="/">Investors</Link>
						<Link to="/">Terms of Service</Link>
					</div>
					<div className="footer-link-items">
						<h2>Contact Us</h2>
						<Link to="/sign-up">How it works</Link>
						<Link to="/">Testimonials</Link>
						<Link to="/">Careers</Link>
						<Link to="/">Investors</Link>
						<Link to="/">Terms of Service</Link>
					</div>
				</div>
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>About Us</h2>
						<Link to="/sign-up">How it works</Link>
						<Link to="/">Testimonials</Link>
						<Link to="/">Careers</Link>
						<Link to="/">Investors</Link>
						<Link to="/">Terms of Service</Link>
					</div>
					<div className="footer-link-items">
						<h2>Contact Us</h2>
						<Link to="/sign-up">How it works</Link>
						<Link to="/">Testimonials</Link>
						<Link to="/">Careers</Link>
						<Link to="/">Investors</Link>
						<Link to="/">Terms of Service</Link>
					</div>
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						<Link to="/" className="social-logo logofooter">
							<a href="/">
								<img
									alt="ladlolalogo"
									src="https://res.cloudinary.com/dzsitpxzw/image/upload/v1634182321/swala/logo_white_large_c2nnmp.png"
								/>
							</a>
						</Link>
					</div>
					<div className="social-icons">
						<Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
							<i className="fab fa-facebook-f" />
						</Link>
						<Link className="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
							<i className="fab fa-instagram" />
						</Link>
						<Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
							<i className="fab fa-twitter" />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
