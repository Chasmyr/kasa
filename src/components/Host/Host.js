import React from 'react';
import './host.css'

const Host = ({host}) => {
    return (
        <div className="host-container">
            <span className="host-name">{host.name}</span>
            <img src={host.picture} alt={host.name} className="host-img"/>
        </div>
    );
};

export default Host;