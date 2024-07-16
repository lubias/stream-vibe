import Link from 'next/link'
import React from 'react'

function MoviesDetailHero() {
    return (
        <div className='px-40 lg_1:px-20 sm_1:px-5 bg-black-08 mb-40'>
            <div className='bg-[url("/images/movie_details_hero.png")] bg-cover bg-no-repeat min-h-[800px] lg_4:px-2 w-full flex flex-col gap-12 justify-end items-center px-48'>
                <div className='flex flex-col gap-5 items-center mb-10'>
                    <h1 className='text-4xl lg_4:text-2xl bold text-center'>Kantara</h1>
                    <p className='text-lg text-gray-60 text-center lg_4:hidden'>
                        A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.
                    </p>
                    <div className='flex gap-5 items-center lg_4:flex-col'>
                        <Link href="#" className='bg-red-45 py-3 px-4 rounded-md flex gap-1 justify-center items-center lg_4:w-full'>
                            <img src='/icons/play.svg' />
                            <span>Play Now</span>
                        </Link>
                        <div className='flex gap-5 items-center'>
                            <div className='h-14 w-14 bg-black-06 flex items-center justify-center rounded-lg'>
                                <img src='/icons/plus.svg' />
                            </div>
                            <div className='h-14 w-14 bg-black-06 flex items-center justify-center rounded-lg'>
                                <img src='/icons/hand_thumb_up.svg' />
                            </div>
                            <div className='h-14 w-14 bg-black-06 flex items-center justify-center rounded-lg'>
                                <img src='/icons/speaker_wave.svg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviesDetailHero