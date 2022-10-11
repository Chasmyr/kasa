import React from 'react';
import '../assets/styles/rating.css'

const Rating = ({rate}) => {

    const note = []
    note.push(<div className="note container"></div>)
    for (let i = 0; i < 5; i++) {
        if ( i + 1 <= rate) {
            note.push(<span key={rate + i} className="active"><i className="fa-solid fa-star"></i></span>)
        } else {
            note.push(<span key={rate + i} className="negative"><i className="fa-solid fa-star"></i></span>)
        }
    }


    return note
};

export default Rating;