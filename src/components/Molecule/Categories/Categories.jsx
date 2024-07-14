'use client'
import CarouselCategories from '@/components/Atoms/CarouselCategories/CarouselCategories';
import React from 'react'

function Categories() {
    const cards = [
        { image: 'images/cards/action.png', genre: 'Action' },
        { image: 'images/cards/adventure.png', genre: 'Adventure' },
        { image: 'images/cards/comedy.png', genre: 'Comedy' },
        { image: 'images/cards/drama.png', genre: 'Drama' },
        { image: 'images/cards/horror.png', genre: 'Horror' },
    ];

    return (
        <div className='pb-32'>
            <CarouselCategories
                cards={cards}
                title="Explore our wide variety of categories"
                description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
            />
        </div>
    )
}

export default Categories