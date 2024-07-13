import React, { useState, useEffect } from 'react';
import CardCategories from '../CardCategories/CardCategories';

function Carousel({ cards, title, description }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(5);

    useEffect(() => {
        const updateVisibleCards = () => {
            const width = window.innerWidth;
            if (width > 1015) {
                setVisibleCards(5);
            } else if (width > 768) {
                setVisibleCards(3);
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
        <div className='flex flex-col mt-40'>
            <div className='flex items-center justify-between gap-10 mb-10'>
                <div className=''>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p className='text-xl'>{description}</p>
                </div>
                <div className='flex lg_3:hidden items-center gap-4 bg-black-06 border-black-20 p-4 rounded-lg'>
                    <button
                        onClick={goToPrevious}
                        className="bg-black-10 rounded-lg w-12 h-12 flex justify-center items-center"
                    >
                        <img src='/icons/arrowLeft.svg' alt='' className='w-6 h-6' />
                    </button>
                    <di className="flex gap-2">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`h-1 w-4 rounded-full bg-gray-300 ${index === currentIndex ? 'bg-red-45 w-6 h-2' : ''}`}
                            />
                        ))}
                    </di>
                    <button
                        onClick={goToNext}
                        className="bg-black-10 rounded-lg w-12 h-12 flex justify-center items-center"
                    >
                        <img src='/icons/arrowRight.svg' alt='' className='w-6 h-6' />
                    </button>
                </div>
            </div>
            <div className="relative w-full">
                <div className="grid gap-7 overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out" style={{ gridTemplateColumns: `repeat(${visibleCards}, minmax(0, 1fr))` }}>
                    {getVisibleCards().map((card, index) => (
                        <div key={index} className="col-span-1">
                            <CardCategories image={card.image} genre={card.genre} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='hidden lg_3:flex items-center justify-center gap-10 mt-5 flex-1'>
                <div className='flex items-center gap-4 bg-black-06 border-black-20 p-4 rounded-lg'>
                    <button
                        onClick={goToPrevious}
                        className="bg-black-10 rounded-lg w-12 h-12 flex justify-center items-center"
                    >
                        <img src='/icons/arrowLeft.svg' alt='' className='w-6 h-6' />
                    </button>
                    <di className="flex gap-2 sm_1:hidden">
                        {cards && cards.map((card, index) => (
                            <div
                                key={index}
                                className={`h-1 w-4 rounded-full bg-gray-300 ${index === currentIndex ? 'bg-red-45 w-6 h-2' : ''}`}
                            />
                        ))}
                    </di>
                    <button
                        onClick={goToNext}
                        className="bg-black-10 rounded-lg w-12 h-12 flex justify-center items-center"
                    >
                        <img src='/icons/arrowRight.svg' alt='' className='w-6 h-6' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel