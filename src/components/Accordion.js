import React, {useEffect, useState} from 'react';
import '../assets/styles/accordion.css'
import {useLocation} from "react-router-dom";

const Accordion = ({title, content}) => {

    const [isActive, setIsActive] = useState(false)
    const [isAbout, setIsAbout] = useState(false)
    let location = useLocation()
    useEffect(() => {
        if (location.pathname === '/about') {
            setIsAbout(true)
        } else {
            setIsAbout(false)
        }
    }, [location])

    return (
        <>
            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-title-wrapper"
                    onClick={() => setIsActive(!isActive)}
                    >
                        <div className="accordion-title">{title}</div>
                        <div className="accordion-icon">{isActive ? <i className="fa-solid fa-chevron-down" style={{ transform: 'rotate(180deg)' }}></i> : <i className="fa-solid fa-chevron-down"></i> }</div>
                    </div>
                    {isActive && <div className="accordion-content">
                        {typeof content === 'string' ?
                            isAbout === true ?
                                    <span className="accordion-content-full" style={{ fontSize: '24px', minHeight: '20px'}}>{content}</span>
                                    : <span className="accordion-content-full" style={{ fontSize: '18px', minHeight: '190px'}}>{content}</span>

                            :
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