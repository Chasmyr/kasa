import React from 'react';
import '../assets/styles/header.css'
import logo from '../assets/images/logo.jpg'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-item">
                    <a href="/"><img src={logo} alt="Logo" className="header-logo"/></a>
                </div>
                <div className="nav-item">
                    <a href="/" className="nav-link">
                        Accueil
                    </a>
                    <a href="/about" className="nav-link">
                        A Propos
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;