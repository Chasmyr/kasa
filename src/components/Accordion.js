import React, {useState} from 'react';

const Accordion = ({title, content}) => {

    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-title"
                    onClick={() => setIsActive(!isActive)}
                    >
                        <div>{title}</div>
                        <div>{isActive ? '-' : '+'}</div>
                    </div>
                    {isActive && <div className="accordion-content">
                        {typeof content === 'string' ?
                        <span>{content}</span> :
                        <ul>
                            {content.map((id, index) => (
                                <li key={id}>{content[index]}</li>
                                ))}
                        </ul>}
                    </div>}
                </div>
            </div>
        </>
    );
};

export default Accordion;