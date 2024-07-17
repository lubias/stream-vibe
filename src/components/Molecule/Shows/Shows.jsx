'use client'
import CarouselCategories from '@/components/Atoms/CarouselCategories/CarouselCategories'
import CarouselTrends from '@/components/Atoms/CarouselTrends/CarouselTrends'
import Link from 'next/link'
import React from 'react'

function Shows() {
    const our_genres = [
        { image: 'images/cards/genres/action.png', genre: 'Action' },
        { image: 'images/cards/genres/adventure.png', genre: 'Adventure' },
        { image: 'images/cards/genres/comedy.png', genre: 'Comedy' },
        { image: 'images/cards/genres/drama.png', genre: 'Drama' },
        { image: 'images/cards/genres/horror.png', genre: 'Horror' },
    ]

    const top_genres = [
        { image: 'images/cards/genres/action_2.png', genre: 'Action' },
        { image: 'images/cards/genres/adventure_2.png', genre: 'Adventure' },
        { image: 'images/cards/genres/comedy_2.png', genre: 'Comedy' },
        { image: 'images/cards/genres/drama_2.png', genre: 'Drama' },
    ]

    const trending = [
        { image: '/images/cards/shows/stranger_things.png', duration: '8h 20min', views: '4 Seasons', released: '', icon: '/icons/rectangle_stack.svg' },
        { image: '/images/cards/shows/money_heist.png', duration: '12h 23min', views: '5 Seasons', released: '', icon: '/icons/rectangle_stack.svg' },
        { image: '/images/cards/shows/lucifer.png', duration: '14h 30min', views: '3 Seasons', released: '', icon: '/icons/rectangle_stack.svg' },
        { image: '/images/cards/shows/the_gray_man.png', duration: '7h 40min', views: '2 Seasons', released: '', icon: '/icons/rectangle_stack.svg' },
    ]

    const releases = [
        { image: '/images/cards/shows/high_town.png', duration: '12h 23min', views: '5 Seasons', released: '', icon: '/icons/rectangle_stack.svg' },
        { image: '/images/cards/shows/mirzapur.png', duration: '7h 40min', views: '2 Seasons', released: '', icon: '/icons/rectangle_stack.svg' },
        { image: '/images/cards/shows/breathe.png', duration: '8h 20min', views: '4 Seasons', released: '', icon: '/icons/rectangle_stack.svg' },
        { image: '/images/cards/shows/peaky_blinders.png', duration: '10h 30min', views: '3 Seasons', released: '', icon: '/icons/rectangle_stack.svg' },
    ]

    const must = [
        { image: '/images/cards/shows/duranga.png', duration: '7h 40min', views: '12K', released: '', icon: '' },
        { image: '/images/cards/shows/money_heist_2.png', duration: '12h 23min', views: '28K', released: '', icon: '' },
        { image: '/images/cards/shows/mai.png', duration: '10h 30min', views: '2K', released: '', icon: '' },
        { image: '/images/cards/shows/stranger_things_2.png', duration: '8h 20min', views: '32K', released: '', icon: '' },
    ]

    return (
        <div className='border border-black-15 rounded-lg p-12 md_3:px-5 relative'>
            <Link href="/movies-shows/show-details" className='w-28 py-2 h-12 rounded-lg bg-red-45 flex items-center justify-center text-xl absolute -top-6'>Shows</Link>
            <div className='space-y-24'>
                <CarouselCategories cards={our_genres} title="Our Genres" />
                <CarouselCategories cards={top_genres} title="Popular Top 10 In Genres" type="2" />
                <CarouselTrends cards={trending} title="Trending Shows Now" type="1" />
                <CarouselTrends cards={releases} title="New Releases Shows" type="1" />
                <CarouselTrends cards={must} title="Must - Watch Shows" type="3" />
            </div>
        </div>
    )
}

export default Shows