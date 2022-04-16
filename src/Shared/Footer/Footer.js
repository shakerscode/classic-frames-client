import React from 'react';

import facebook from '../../images/Icons/facebook.png'
import instagram from '../../images/Icons/instagram.png'
import linkdin from '../../images/Icons/linkedin.png'
import twitter from '../../images/Icons/twitter-sign.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer-section'>
            <h1 className='footer-logo'>Classic Frames</h1>
           <div className='footer-pages'>
           <p>Privacy and Police</p>
            <p>Terms and Conditions</p>
            <p>Help</p>
            <p>FAQ</p>
           </div>
            <div className='icon-sec'>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={linkdin} alt="" />
                <img src={twitter} alt="" />
            </div>
            <div className='footer-credit'>
                <p>Copyright &copy; {new Date().getFullYear()} All right reserved by Shaker Ahamed</p>
            </div>
        </footer> 
    );
};

export default Footer;