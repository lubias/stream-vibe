import React from 'react'

function MovieInformation() {
    return (
        <div className='bg-black-10 rounded-lg p-12 space-y-8 lg_2:px-6 h-fit'>
            <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                    <img src='/icons/calendar.svg' />
                    <p className='text-lg text-gray-60'>Released Year</p>
                </div>
                <p className='text-xl font-semibold'>2022</p>
            </div>
            <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                    <img src='/icons/languages.svg' />
                    <p className='text-lg text-gray-60'>Available Languages</p>
                </div>
                <div className='flex flex-wrap gap-3'>
                    <div className='bg-black-08 border border-black-15 rounded-lg px-3 py-2 text-lg'>English</div>
                    <div className='bg-black-08 border border-black-15 rounded-lg px-3 py-2 text-lg'>Hindi</div>
                    <div className='bg-black-08 border border-black-15 rounded-lg px-3 py-2 text-lg'>Tamil</div>
                    <div className='bg-black-08 border border-black-15 rounded-lg px-3 py-2 text-lg'>Telegu</div>
                    <div className='bg-black-08 border border-black-15 rounded-lg px-3 py-2 text-lg'>Kannada</div>
                </div>
            </div>
            <div className='space-y-3'>
                <div className='flex items-center gap-2'>
                    <img src='/icons/star.svg' />
                    <p className='text-lg text-gray-60'>Ratings</p>
                </div>
                <div className='flex gap-3 flex-wrap'>
                    <div className='bg-black-08 border border-black-15 rounded-lg px-4 py-4'>
                        <p className='text-xl font-semibold'>IMDb</p>
                        <div className='flex gap-2'>
                            <img src='/icons/stars.svg' />
                            <p>4.5</p>
                        </div>
                    </div>
                    <div className='bg-black-08 border border-black-15 rounded-lg px-4 py-4'>
                        <p className='text-xl font-semibold'>Streamvibe</p>
                        <div className='flex gap-2'>
                            <img src='/icons/stars.svg' />
                            <p>4.5</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                    <img src='/icons/squares.svg' />
                    <p className='text-lg text-gray-60'>Genres</p>
                </div>
                <div className='flex flex-wrap gap-3'>
                    <div className='bg-black-08 border border-black-15 rounded-lg px-3 py-2 text-lg'>Action</div>
                    <div className='bg-black-08 border border-black-15 rounded-lg px-3 py-2 text-lg'>Adventure</div>
                </div>
            </div>
            <div className='space-y-2'>
                <p className='text-lg text-gray-60'>Director</p>
                <div className='bg-black-08 border border-black-15 rounded-lg px-3 py-3 flex items-center gap-3'>
                    <img src='/images/cards/movies/director.svg' />
                    <div>
                        <p className='text-lg'>Rishab Shetty</p>
                        <p className='text-gray-60'>From India</p>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <p className='text-lg text-gray-60'>Music</p>
                <div className='bg-black-08 border border-black-15 rounded-lg px-3 py-3 flex items-center gap-3'>
                    <img src='/images/cards/movies/music.svg' />
                    <div>
                        <p className='text-lg'>B. Ajaneesh Loknath</p>
                        <p className='text-gray-60'>From India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInformation