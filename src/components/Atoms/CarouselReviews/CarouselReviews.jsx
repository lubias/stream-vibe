'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import CardReviews from '../CardReviews/CardReviews';

function CarouselReviews({ title, cards }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(2);

    useEffect(() => {
        const updateVisibleCards = () => {
            const width = window.innerWidth;
            if (width > 1365) {
                if (cards.length > 2) {
                    setVisibleCards(2);
                } else {
                    setVisibleCards(cards.length);
                }
            } else {
                setVisibleCards(1);
            }
        };

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);
        return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
    };

    const getVisibleCards = () => {
        const visible = [];
        for (let i = 0; i < visibleCards; i++) {
            visible.push(cards[(currentIndex + i) % cards.length]);
        }
        return visible;
    };

    return (
        <div className='space-y-10 sm_1:space-y-5'>
            <div className='flex justify-between items-center sm_1:flex-col gap-5'>
                <h1 className='text-lg text-gray-60'>{title}</h1>
                <Link href="#" className='flex gap-3 items-center justify-center bg-black-08 border border-gray-60 px-4 py-3 rounded-lg sm_1:w-full'>
                    <img src='/icons/plus.svg' className='w-8 h-8' />
                    <p className='text-lg'>Add Your Review</p>
                </Link>
            </div>
            <div className="relative w-full">
                <div className="grid gap-7 overflow-hidden rounded-lg transition-transform duration-500 ease-in-out" style={{ gridTemplateColumns: `repeat(${visibleCards}, minmax(0, 1fr))` }}>
                    {getVisibleCards().map((card, index) => (
                        <div key={index} className="col-span-1">
                            <CardReviews name={card.name} from={card.from} review={card.review} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center w-full justify-center gap-10 mt-5'>
                <div className='flex items-center p-4 rounded-lg gap-3'>
                    <button
                        onClick={goToPrevious}
                        className="bg-black-08 rounded-full w-12 h-12 flex justify-center items-center"
                    >
                        <img src='/icons/arrowLeft.svg' alt='' className='w-6 h-6 md_2:w-5 md_2:h-5' />
                    </button>
                    <di className="flex gap-2">
                        {cards && cards.map((card, index) => (
                            <div
                                key={index}
                                className={`h-1 w-4 md_2:w-2 rounded-full bg-gray-300 ${index === currentIndex ? 'bg-red-45 w-6' : ''}`}
                            />
                        ))}
                    </di>
                    <button
                        onClick={goToNext}
                        className="bg-black-08 rounded-full w-12 h-12 flex justify-center items-center"
                    >
                        <img src='/icons/arrowRight.svg' alt='' className='w-6 h-6 md_2:w-5 md_2:h-5' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarouselReviews