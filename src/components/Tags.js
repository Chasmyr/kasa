import React from 'react';

const Tags = ({tag}) => {
    return (
        <>
            {tag.map((el, index) => {
                return (
                        <span key={el + index}>{el}</span>
                    )
            })}
        </>
    );
};

export default Tags;