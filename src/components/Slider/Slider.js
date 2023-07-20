import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Parallax, FreeMode } from 'swiper/modules';

import { useRef, useEffect, useState } from 'react';

import 'swiper/css';

import './Slider.scss';

const Slider = (props) => {

    const sliderRef = useRef(null);

    const [isSliderHovered, setIsSliderHovered ] = useState(false);

    const handleScroll = (e) => {

        const sliderElement = sliderRef.current;
        
        if (
            sliderElement &&
            window.scrollY >= (sliderElement.offsetTop - sliderElement.clientHeight) && 
            window.scrollY <= sliderElement.offsetTop
        ) {
            e.preventDefault();
            setIsSliderHovered(true);
        } else setIsSliderHovered(false);
    };

    useEffect(() => {
        const sliderElement = sliderRef.current;
        if (isSliderHovered && sliderElement) {
            console.log('focused');
            sliderElement.focus();
        }
    }, [isSliderHovered])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line
    }, []);

    const slides = props.slides;

    return (
        <section 
            className="slider">
            <h3 className="slider__title title">
                Lorem ipsum dolor sit amet
            </h3>
            <div 
                
                className="slider__wrapper">
                <Swiper
                    tabIndex={0}
                    ref={sliderRef} 
                    modules={[Mousewheel, Parallax, FreeMode]}
                    slidesPerView={'auto'}
                    spaceBetween={40}
                    mousewheel={true}
                    freeMode={true}
                    parallax={true}
                    >
                    {slides.map((slide, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="slider__image" data-swiper-parallax="20" >
                                    <img src={slide} alt={`slide nubmer ${i + 1}`} />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Slider;