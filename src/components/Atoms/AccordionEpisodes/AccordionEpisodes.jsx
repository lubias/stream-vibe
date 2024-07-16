'use client'
import React, { useState } from 'react'
import CardEpisode from '../CardEpisode/CardEpisode';

function AccordionEpisodes({ season, episodes }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="bg-black-06 border border-gray-60/50 rounded-xl">
                <button
                    className="w-full focus:outline-none flex justify-between items-center px-12 py-6 md_3:px-6"
                    onClick={toggleAccordion}
                >
                    <div className='flex md_3:flex-col items-center md_3:items-start gap-2'>
                        <h1 className='text-2xl font-semibold'>Season {season}</h1>
                        <p className='text-lg text-gray-60'>{episodes.length} Episodes</p>
                    </div>
                    <img src={isOpen ? '/icons/arrowUp.svg' : '/icons/ArrowDown.svg'} className="bg-black-8 border border-gray-60/30 p-4 rounded-full" alt={isOpen ? 'Arrow Up Icon' : 'Arrow Down Icon'} />
                </button>
                {isOpen && (
                    episodes.map((episode, index) => (
                        <CardEpisode
                            key={index}
                            title={episode.title}
                            duration={episode.duration}
                            description={episode.description}
                            number={episode.number}
                            image={episode.image}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default AccordionEpisodes