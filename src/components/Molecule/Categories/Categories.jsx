'use client'
import CardCategories from '@/components/Atoms/CardCategories/CardCategories'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

function Categories() {
    return (
        <div className='pb-32'>
            <div className='mb-20'>
                <h1 className='text-2xl font-bold'>Explore our wide variety of categories</h1>
                <p className='text-xl'>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
            </div>
            <div className='flex gap-7 justify-between lg_4:hidden'>
                <CardCategories image='images/cards/action.svg' genre="Action" />
                <CardCategories image='images/cards/adventure.svg' genre="Adventure" />
                <CardCategories image='images/cards/comedy.svg' genre="Comedy" />
                <CardCategories image='images/cards/drama.svg' genre="Drama" />
                <CardCategories image='images/cards/horror.svg' genre="Horror" />
            </div>
            <div className='hidden lg_4:block'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper"
                >
                    <SwiperSlide><CardCategories image='images/cards/action.svg' genre="Action" /></SwiperSlide>
                    <SwiperSlide><CardCategories image='images/cards/adventure.svg' genre="Adventure" /></SwiperSlide>
                    <SwiperSlide><CardCategories image='images/cards/comedy.svg' genre="Comedy" /></SwiperSlide>
                    <SwiperSlide><CardCategories image='images/cards/drama.svg' genre="Drama" /></SwiperSlide>
                    <SwiperSlide><CardCategories image='images/cards/horror.svg' genre="Horror" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Categories