import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Parallax, FreeMode } from 'swiper/modules';

import 'swiper/css';

import './Slider.scss';

const Slider = (props) => {

    const slides = props.slides;

    return (
        <section className="slider">
            <h3 className="title">
                Lorem ipsum dolor sit amet
            </h3>
            <div className="slider__wrapper">
                <Swiper
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