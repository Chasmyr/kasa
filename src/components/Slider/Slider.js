import React, {Fragment, useState} from 'react';
import './slider.css'

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    let numberOfSlide = `${current +1}/${length}`

    return (
        <div>
            <div className="slider-container">
                {slides[1] != null ?
                    <>
                        <span onClick={prevSlide} className="slideOptions slideOption-1"><i
                            className="fa-solid fa-chevron-left"></i></span>
                        <span onClick={nextSlide} className="slideOptions slideOption-2"><i
                            className="fa-solid fa-chevron-right"></i></span>
                        <span className="slide-number">{numberOfSlide}</span>
                    </>
                 : null }
                {slides.map((id, index) => {
                    return (
                        <Fragment key={id + index }>
                            {index === current && (
                                <div key={id} className="slide" style={{ backgroundImage: `url(${id})` }}>
                                </div>
                            )}
                        </Fragment>
                    )
                })}
            </div>
        </div>
    );
};

export default Slider;