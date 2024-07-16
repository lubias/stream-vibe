'use client'
import React, { useEffect, useState } from 'react'

function CarouselCast({ title, cards }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(5);

    useEffect(() => {
        const updateVisibleCards = () => {
            const width = window.innerWidth;
            if (width > 1015) {
                if (cards.length > 8) {
                    setVisibleCards(8);
                } else {
                    setVisibleCards(cards.length);
                }
            } else {
                setVisibleCards(4);
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
        <div className='space-y-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg text-gray-60'>{title}</h1>
                <div className='flex gap-3'>
                    <button
                        onClick={goToPrevious}
                        className="bg-black-08 rounded-full w-12 h-12 flex justify-center items-center"
                    >
                        <img src='/icons/arrowLeft.svg' alt='' className='w-6 h-6' />
                    </button>
                    <button
                        onClick={goToNext}
                        className="bg-black-08 rounded-full w-12 h-12 flex justify-center items-center"
                    >
                        <img src='/icons/arrowRight.svg' alt='' className='w-6 h-6' />
                    </button>
                </div>
            </div>
            <div className="relative w-full">
                <div className="grid gap-7 overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out" style={{ gridTemplateColumns: `repeat(${visibleCards}, minmax(0, 1fr))` }}>
                    {getVisibleCards().map((card, index) => (
                        <div key={index} className="col-span-1">
                            <img src={card.image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CarouselCast