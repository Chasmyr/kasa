import React from 'react';
import {useParams} from "react-router-dom";
import data from '../assets/json/data.json'
import Header from "../components/Header";
import Accordion from "../components/Accordion";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Slider from "../components/Slider";
import Tags from "../components/Tags";
import Footer from "../components/Footer";

const Logement = () => {
    const { logementId } = useParams()
    let logement = {}
    for(let i = 0; i < data.length; i++) {
        if(data[i].id === logementId) {
            logement = data[i]
        }
    }


    return (
        <>
            <Header />
            <main>
                <Slider slides={logement.pictures}/>
                <div className="logement-title">
                    <h2>{logement.title}</h2>
                    <h4>{logement.location}</h4>
                </div>
                <Host host={logement.host} />
                <Tags tag={logement.tags}/>
                <Rating rate={logement.rating} />
                <Accordion title="Equipements" content={logement.equipments} />
                <Accordion title="Description" content={logement.description} />
            </main>
            <Footer />
        </>
    );
};

export default Logement;