import React from 'react'

function CardCategories({ image, genre, type }) {
    return (
        <div className='bg-black-10 p-8 rounded-md flex flex-col'>
            <img src={image} className='md_1:w-full' />
            <div className='w-full flex justify-between mt-3'>
                <div className='space-y-2'>
                    {type == 2 ? <div className='w-24 py-2 h-9 rounded-lg bg-red-45 flex items-center justify-center font-semibold'>Top 10 In</div> : ""}
                    <p>{genre}</p>
                </div>
                <img src="icons/arrowRight.svg" />
            </div>
        </div>
    )
}

export default CardCategories