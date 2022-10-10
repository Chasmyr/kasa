import React from 'react';
import '../assets/styles/header.css'
import logo from '../assets/images/logo.jpg'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-item">
                    <img src={logo} alt="Logo" className="header-logo"/>
                </div>
                <div className="nav-item">
                    <a href="#" className="nav-link">
                        Accueil
                    </a>
                    <a href="#" className="nav-link">
                        A Propos
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;