import React from 'react'

function CardEpisode({ number, title, image, duration, description }) {
    return (
        <div className='px-12 w-full'>
            <div className='border-t border-gray-60/30 flex md_3:flex-col items-center lg_2:items-start justify-between gap-10 py-10 w-full'>
                <h1 className='text-3xl'>{number}</h1>
                <div className='flex lg_2:flex-col lg_2:justify-center gap-5 flex-1 w-full'>
                    <img src={image} alt='Show Image' className='lg_2:w-full' />
                    <div className='w-28 text-nowrap bg-black-08 lg_2:flex items-center justify-center gap-1 px-2 py-1 rounded-lg hidden'>
                        <img src='/icons/clock.svg' className='w-6 h-6' />
                        <p className='text-base text-gray-60'>{duration}</p>
                    </div>
                    <div className='flex flex-col justify-around w-full'>
                        <div className='flex items-center justify-between w-full'>
                            <h3 className='text-xl font-semibold'>{title}</h3>
                            <div className='w-28 text-nowrap bg-black-08 flex items-center justify-center gap-1 px-2 py-1 rounded-lg lg_2:hidden'>
                                <img src='/icons/clock.svg' className='w-6 h-6' />
                                <p className='text-base text-gray-60'>{duration}</p>
                            </div>
                        </div>
                        <p className='text-lg text-gray-60 md_2:hidden'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardEpisode