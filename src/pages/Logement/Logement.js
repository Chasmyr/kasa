import React from 'react';
import {Navigate, useParams} from "react-router-dom";
import data from '../../assets/json/data.json'
import Header from "../../components/Header/Header";
import Accordion from "../../components/Accordion/Accordion";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import Slider from "../../components/Slider/Slider";
import Tags from "../../components/Tags/Tags";
import Footer from "../../components/Footer/Footer";
import './logement.css'

const Logement = () => {
    const { logementId } = useParams()
    let logement = {}
    let shouldRedirect = 0
    for(let i = 0; i < data.length; i++) {
        if(data[i].id === logementId) {
            logement = data[i]
        }
        else {
            shouldRedirect += 1
        }
    }
    if (shouldRedirect === data.length) {
        return <Navigate to="/404" replace />
    }

    return (
        <>
            <Header />
            <main  className="logeMain">
                <div className="slider">
                    <Slider slides={logement.pictures}/>
                </div>
                <div className="logement-title">
                    <h2>{logement.title}</h2>
                    <h4>{logement.location}</h4>
                </div>
                <div className="host">
                    <Host host={logement.host} />
                </div>
                <div className="tags">
                    <Tags tag={logement.tags}/>
                </div>
                <div className="desc">
                    <Accordion title="Description" content={logement.description} />
                </div>
                <div className="rating">
                    <Rating rate={logement.rating} />
                </div>
                <div className="equip">
                    <Accordion title="Equipements" content={logement.equipments} />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Logement;