import React from 'react';
import './rating.css'

const Rating = ({rate}) => {

    const note = []
    for (let i = 0; i < 5; i++) {
        if ( i + 1 <= rate) {
            note.push(<div key={i} className="active"><i className="fa-solid fa-star"></i></div>)
        } else {
            note.push(<div key={i} className="negative"><i className="fa-solid fa-star"></i></div>)
        }
    }


    return note
};

export default Rating;