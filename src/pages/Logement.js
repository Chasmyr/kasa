import React from 'react';
import {useParams} from "react-router-dom";
import data from '../assets/json/data.json'
import Header from "../components/Header";
import Accordion from "../components/Accordion";
import Host from "../components/Host";
import Rating from "../components/Rating";

const Logement = () => {
    const { logementId } = useParams()
    let logement = {}
    for(let i = 0; i < data.length; i++) {
        if(data[i].id === logementId) {
            logement = data[i]
        }
    }
    console.log(typeof logement.description)

    return (
        <div>
            <Header />
            <img src={logement.cover} />
            <h2>{logement.title}</h2>
            <h4>{logement.location}</h4>
            <Host />
            <Rating />
            <Accordion title="Equipements" content={logement.equipments} />
            <Accordion title="Description" content={logement.description} />
        </div>
    );
};

export default Logement;