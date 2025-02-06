import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="app-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Museum Address</h3>
                    <p>Prinsengracht 296 K</p>
                    <p>1016 HW Amsterdam</p>
                    <p><a href="mailto:info@houseboatmuseum.nl">info@houseboatmuseum.nl</a></p>
                    <p><a href="tel:+31642893868">+31 (0) 642 893 868</a></p>
                </div>
                <div className="footer-section">
                    <h3>Opening Hours</h3>
                    <p>We are open today from 10:00 - 17:00</p>
                    <p><a href="https://houseboatmuseum.nl/visit" target="_blank" rel="noopener noreferrer">More Information</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
