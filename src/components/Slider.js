import React, {useState} from 'react';

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
            <span onClick={prevSlide}>Précédent</span>
            <span onClick={nextSlide}>Suivant</span>
            {slides.map((id, index) => {
                return (
                    <div key={index}>
                        {index === current && (
                            <img src={id} />
                        )}
                    </div>
                )
            })}
        </div>
    );
};

export default Slider;