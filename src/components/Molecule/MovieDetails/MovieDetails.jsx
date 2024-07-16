import CarouselCast from '@/components/Atoms/CarouselCast/CarouselCast'
import CarouselReviews from '@/components/Atoms/CarouselReviews/CarouselReviews'
import React from 'react'

function MovieDetails() {
    const cast = [
        { image: '/images/cards/cast/cast_1.png' },
        { image: '/images/cards/cast/cast_2.png' },
        { image: '/images/cards/cast/cast_3.png' },
        { image: '/images/cards/cast/cast_4.png' },
        { image: '/images/cards/cast/cast_5.png' },
        { image: '/images/cards/cast/cast_6.png' },
        { image: '/images/cards/cast/cast_7.png' },
        { image: '/images/cards/cast/cast_8.png' },
    ]

    const reviews = [
        { name: "Aniket Roy", from: "From India", review: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it." },
        { name: "Swaraj", from: "From India", review: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind." },
        { name: "Luana", from: "From Portugal", review: "Very good" },
    ]

    return (
        <div className='col-span-2 lg_4:col-span-1 space-y-8'>
            <div className='bg-black-10 rounded-lg p-12 md_2:p-6 space-y-3'>
                <h1 className='text-lg text-gray-60'>Description</h1>
                <p className='text-lg'>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
            </div>
            <div className='bg-black-10 rounded-lg p-12 md_2:p-6'>
                <CarouselCast title="Cast" cards={cast} />
            </div>
            <div className='bg-black-10 rounded-lg p-12 md_2:p-6'>
                <CarouselReviews title="Reviews" cards={reviews} />
            </div>
        </div>
    )
}

export default MovieDetails