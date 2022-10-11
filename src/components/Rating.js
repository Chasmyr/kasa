import React from 'react';

const Rating = ({rate}) => {

    const note = []
    note.push(<div className="note container"></div>)
    for (let i = 0; i < 5; i++) {
        if ( i + 1 <= rate) {
            note.push(<span>1</span>)
        } else {
            note.push(<span>0</span>)
        }
    }

    return note
};

export default Rating;