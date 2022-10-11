import React from 'react';
import '../assets/styles/tag.css'

const Tags = ({tag}) => {
    return (
        <div className="tag-container">
            {tag.map((el, index) => {
                return (
                        <span key={el + index} className="tag">{el}</span>
                    )
            })}
        </div>
    );
};

export default Tags;