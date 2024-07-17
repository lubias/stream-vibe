'use client'
import React from 'react'

function CardTrends({ type, image, duration, views, released, icon }) {
    return (
        <div className='bg-black-10 flex flex-col justify-center p-4 rounded-lg space-y-4'>
            <img src={image} />
            {type == 1 && (
                <div className='flex justify-between items-center'>
                    <div className='w-28 text-nowrap bg-black-08 flex items-center gap-1 px-2 py-1 rounded-full'>
                        <img src='/icons/clock.svg' className='w-5 h-5' />
                        <p className='text-sm'>{duration}</p>
                    </div>
                    <div className='bg-black-08 flex items-center gap-1 px-2 py-1 rounded-full'>
                        <img src={icon} className='w-5 h-5' />
                        <p className='text-sm font-medium'>{views}</p>
                    </div>
                </div>
            )}
            {type == 2 && (
                <div className='bg-black-08 px-2 py-1 rounded-full text-center'>
                    {released}
                </div>
            )}
            {type == 3 && (
                <div className='flex justify-between items-center md_3:flex-col md_3:gap-2'>
                    <div className='w-28 text-nowrap bg-black-08 flex items-center gap-1 px-2 py-1 rounded-full'>
                        <img src='/icons/clock.svg' className='w-5 h-5' />
                        <p className='text-sm'>{duration}</p>
                    </div>
                    <div className='w-36 bg-black-08 flex items-center gap-1 px-2 py-1 rounded-full'>
                        <img src='/icons/stars.svg' className='w-24 h-5' />
                        <p className='text-sm'>{views}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CardTrends