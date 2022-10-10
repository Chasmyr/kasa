import React from 'react';

const Host = ({host}) => {
    return (
        <div className="host-container">
            <img src={host.picture} alt={host.name} />
            <span>{host.name}</span>
        </div>
    );
};

export default Host;