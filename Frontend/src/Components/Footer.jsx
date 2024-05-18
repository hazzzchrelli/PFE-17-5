import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footerContainer'>
      <div className='footerSection'>
        <h3>ACS</h3>
        <p>ACS est une solution de management et de digitalisation des process Qualité et HSE qui répond aux exigences de différents référentiels: ISO 9001:2015.</p>
      </div>
      
      <div className='footerSection'>
        <h3>Contact :</h3>
        <p>Email: info@acs.com</p>
        <p>Phone: (216) 98-445-667</p>
        <p>Address: Diar sokra bloc D4-72, L'aouina , Tunis</p>
      </div>

      <div className='footerSection'>
        <h3>Réseaux sociaux :</h3>
        <div className='socialMediaLinks'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./facebook.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="./twitter.png" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="./linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
