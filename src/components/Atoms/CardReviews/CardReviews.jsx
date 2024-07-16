import React from 'react'

function CardReviews({ name, from, review }) {
    return (
        <div className='bg-black-06 p-10 md_3:p-5 h-64 rounded-lg space-y-4 flex flex-col justify-center'>
            <div className='flex justify-between items-center sm_1:flex-col sm_1:gap-2'>
                <div>
                    <h1 className='text-xl'>{name}</h1>
                    <p className='text-lg text-gray-60'>{from}</p>
                </div>
                <div className='flex items-center gap-1 bg-black-08 border border-gray-60/20 p-2 rounded-full'>
                    <img src='/icons/stars.svg' />
                    <p className='text-base text-gray-60'>4.5</p>
                </div>
            </div>
            <p className='text-base text-gray-60 line-clamp-4 sm_1:line-clamp-3'>
                {review}
            </p>
        </div>
    )
}

export default CardReviews