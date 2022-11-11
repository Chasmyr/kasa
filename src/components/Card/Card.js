import React from 'react';
import './card.css'

const Card = ({title, cover, idUrl}) => {
    const url = '/logement/' + idUrl
    return (
        <div className="card-parent">
            <a href={url} className="card" style={{
                backgroundImage: `url(${cover}), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)`
            }}>
            <span className="card-desc">
                {title}
            </span>

            </a>
        </div>
    );
};

export default Card;