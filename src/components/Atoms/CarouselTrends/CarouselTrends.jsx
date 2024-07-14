import React, { useState, useEffect } from 'react';
import CardCategories from '../CardCategories/CardCategories';
import CardTrends from '../CardTrends/CardTrends';

function CarouselTrends({ cards, title, type = 1 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(0);

    useEffect(() => {
        const updateVisibleCards = () => {
            const width = window.innerWidth;
            if (width > 1920) {
                if (cards.length >= 5) {
                    setVisibleCards(5);
                } else {
                    setVisibleCards(cards.length);
                }
            } else if (width > 1635) {
                if (cards.length >= 4) {
                    setVisibleCards(4);
                } else {
                    setVisibleCards(cards.length);
                }
            } else if (width > 1180) {
                if (cards.length >= 3) {
                    setVisibleCards(3);
                } else {
                    setVisibleCards(cards.length);
                }
            } else if (width > 768) {
                if (cards.length >= 2) {
                    setVisibleCards(2);
                } else {
                    setVisibleCards(cards.length);
                }
            }
            else {
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
        <div className='flex flex-col'>
            <div className='flex items-center justify-between gap-10 mb-10'>
                <div>
                    <h1 className='text-4xl md_3:text-2xl font-bold'>{title}</h1>
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
                                className={`h-1 w-4 rounded-full bg-gray-300 ${index === currentIndex ? 'bg-red-45 w-6' : ''}`}
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
                            <CardTrends type={type} image={card.image} duration={card.duration} views={card.views} released={card.released} icon={card.icon} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='hidden lg_3:flex items-center justify-center gap-10 mt-5 flex-1'>
                <div className='flex items-center gap-4 bg-black-06 border-black-20 p-4 rounded-lg'>
                    <button
                        onClick={goToPrevious}
                        className="bg-black-10 rounded-lg w-12 h-12 md_2:w-10 md_2:h-10 flex justify-center items-center"
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
                        className="bg-black-10 rounded-lg w-12 h-12 md_2:w-10 md_2:h-10 flex justify-center items-center"
                    >
                        <img src='/icons/arrowRight.svg' alt='' className='w-6 h-6 md_2:w-5 md_2:h-5' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarouselTrends