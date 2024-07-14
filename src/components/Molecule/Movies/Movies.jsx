'use client'
import CarouselCategories from '@/components/Atoms/CarouselCategories/CarouselCategories'
import CarouselTrends from '@/components/Atoms/CarouselTrends/CarouselTrends'
import React from 'react'

function Movies() {
    const our_genres = [
        { image: 'images/cards/genres/action.png', genre: 'Action' },
        { image: 'images/cards/genres/adventure.png', genre: 'Adventure' },
        { image: 'images/cards/genres/comedy.png', genre: 'Comedy' },
        { image: 'images/cards/genres/drama.png', genre: 'Drama' },
        { image: 'images/cards/genres/horror.png', genre: 'Horror' },
    ]

    const top_genres = [
        { image: 'images/cards/genres/action_2_shows.png', genre: 'Action' },
        { image: 'images/cards/genres/adventure_2_shows.png', genre: 'Adventure' },
        { image: 'images/cards/genres/comedy_2_shows.png', genre: 'Comedy' },
        { image: 'images/cards/genres/drama_2_shows.png', genre: 'Drama' },
    ]

    const trending = [
        { image: '/images/cards/movies/morbius.png', duration: '1h 30min', views: '2K', released: '', icon: '/icons/eye.svg' },
        { image: '/images/cards/movies/bhai.png', duration: '1h 57min', views: '1.5K', released: '', icon: '/icons/eye.svg' },
        { image: '/images/cards/movies/suraj_pe_mangal.png', duration: '2h 10min', views: '1.8K', released: '', icon: '/icons/eye.svg' },
        { image: '/images/cards/movies/pathan.png', duration: '2h 20min', views: '3K', released: '', icon: '/icons/eye.svg' },
        { image: '/images/cards/movies/ant_man.png', duration: '1h 42min', views: '5K', released: '', icon: '/icons/eye.svg' },
    ]

    const releases = [
        { image: '/images/cards/movies/adipurush.png', duration: '', views: '', released: 'Released at 14 April 2023' },
        { image: '/images/cards/movies/arma.png', duration: '', views: '', released: 'Released at 22 April 2023' },
        { image: '/images/cards/movies/sin_city.png', duration: '', views: '', released: 'Released at 13 April 2023' },
        { image: '/images/cards/movies/the_tomorrow_war.png', duration: '', views: '', released: 'Released at 19 April 2023' },
        { image: '/images/cards/movies/misfire.png', duration: '', views: '', released: 'Released at 11 April 2023' },
    ]

    const must = [
        { image: '/images/cards/movies/kantara.png', duration: '1h 57min', views: '20K', released: '', icon: '' },
        { image: '/images/cards/movies/pushpa.png', duration: '1h 30min', views: '20K', released: '', icon: '' },
        { image: '/images/cards/movies/blade_runner_2049.png', duration: '1h 42min', views: '20K', released: '', icon: '' },
        { image: '/images/cards/movies/adipurush_2.png', duration: '2h 10min', views: '20K', released: '', icon: '' },
    ]

    return (
        <div className='border border-black-15 rounded-lg p-12 md_3:px-5 relative'>
            <div className='w-28 py-2 h-12 rounded-lg bg-red-45 flex items-center justify-center text-xl absolute -top-6'>Movies</div>
            <div className='space-y-24'>
                <CarouselCategories cards={our_genres} title="Our Genres" />
                <CarouselCategories cards={top_genres} title="Popular Top 10 In Genres" type="2" />
                <CarouselTrends cards={trending} title="Trending Shows Now" type="1" />
                <CarouselTrends cards={releases} title="New Releases Shows" type="2" />
                <CarouselTrends cards={must} title="Must - Watch Shows" type="3" />
            </div>
        </div>
    )
}

export default Movies