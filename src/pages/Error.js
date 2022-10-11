import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../assets/styles/error.css'

const Error = () => {
    return (
        <>
            <Header />
            <main className="errorMain">
                <h2 className="errorTitle">404</h2>
                <h4 className="errorDesc">Oups! La page que vous demandez n'existe pas.</h4>
                <span className="errorLink"><a href="/">Retourner sur la page d'accueil</a></span>
            </main>
            <Footer />
        </>
    );
};

export default Error;