import React, {useState} from 'react';
import '../assets/styles/accordion.css'

const Accordion = ({title, content}) => {

    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-title-wrapper"
                    onClick={() => setIsActive(!isActive)}
                    >
                        <div className="accordion-title">{title}</div>
                        <div className="accordion-icon">{isActive ? '-' : '+'}</div>
                    </div>
                    {isActive && <div className="accordion-content">
                        {typeof content === 'string' ?
                        <span className="accordion-content-full">{content}</span> :
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