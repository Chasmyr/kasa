import React, {useState} from 'react';
import '../assets/styles/slider.css'

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div>
            <div className="slider-container">
                <span onClick={prevSlide} className="slideOptions slideOption-1"><i
                    className="fa-solid fa-chevron-left"></i></span>
                <span onClick={nextSlide} className="slideOptions slideOption-2"><i
                    className="fa-solid fa-chevron-right"></i></span>
                {slides.map((id, index) => {
                    return (
                        <>
                            {index === current && (
                                <div key={index + id + 'slide'} className="slide" style={{ backgroundImage: `url(${id})` }}>
                                </div>
                            )}
                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default Slider;