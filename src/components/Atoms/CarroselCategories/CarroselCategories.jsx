import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import './styles.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

export default function CarroselCategories({ slides }) {
    return (
        <>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide>{slide}</SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
