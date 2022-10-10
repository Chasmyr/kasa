import React from 'react';
import logo from '../assets/images/logoFooter.png'
import '../assets/styles/footer.css'

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo kasa" />
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    );
};

export default Footer;