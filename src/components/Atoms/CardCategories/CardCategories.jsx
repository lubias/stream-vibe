import React from 'react'

function CardCategories({ image, genre }) {
    return (
        <div className='bg-black-10 p-8 rounded-md flex flex-col items-center'>
            <img src={image} className='md_1:w-full' />
            <div className='w-full flex justify-between mt-3'>
                <p>{genre}</p>
                <img src="icons/arrowRight.svg" />
            </div>
        </div>
    )
}

export default CardCategories