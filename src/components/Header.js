import React from 'react';
import '../assets/styles/header.css'
import logo from '../assets/images/logo.jpg'
import {useLocation} from "react-router-dom";

const Header = () => {
    let location = useLocation()
    return (
        <header>
            <nav>
                <div className="nav-item">
                    <a href="/"><img src={logo} alt="Logo" className="header-logo"/></a>
                </div>
                <div className="nav-item">
                    {location.pathname === '/' ?
                    <a href="/" className="nav-link" style={{ textDecoration: 'underline' }}>
                        Accueil
                    </a> : <a href="/" className="nav-link" style={{ textDecoration: 'none' }}>
                            Accueil
                        </a>}
                    {location.pathname === '/about' ? <a href="/about" className="nav-link">
                        A Propos
                    </a> : <a href="/about" className="nav-link" style={{ textDecoration: 'none' }}>
                        A Propos
                    </a> }
                </div>
            </nav>
        </header>
    );
};

export default Header;