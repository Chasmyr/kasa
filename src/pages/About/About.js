import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Accordion from "../../components/Accordion/Accordion";
import './about.css'

const About = () => {
    const fiable = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements , et toutes les informations sont régulièrement vérifiées par nos équipes.'
    const respect = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discrimatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme'
    const service = `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous conctacter si vous avez la moindre question.`
    const secu = `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standerds sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.`

    return (
        <>
            <Header />
            <main className="aboutMain">
                <div className="about-img">

                </div>
                <div className="about-container">
                    <div className="about-item">
                        <Accordion title="Fiabilité" content={fiable}/>
                    </div>
                    <div className="about-item">
                        <Accordion title="Respect" content={respect}/>
                    </div>
                    <div className="about-item">
                        <Accordion title="Service" content={service}/>
                    </div>
                    <div className="about-item">
                        <Accordion title="Sécurité" content={secu}/>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
};

export default About;