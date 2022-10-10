import React from 'react';
import '../assets/styles/card.css'

const Card = ({title, cover}) => {
    return (
        <div className="card" style={{
            backgroundImage: `url(${cover}), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)`
        }}>
            <p className="card-desc">
                {title}
            </p>
        </div>
    );
};

export default Card;