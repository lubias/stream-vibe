import React from 'react'

function CardDevices({ image, name, description }) {
    return (
        <div className='bg-black-06 bg-gradient-card w-full h-[283px] flex flex-col justify-center px-10'>
            <div className='flex gap-3 items-center mb-10'>
                <div className='bg-black-12 p-3 rounded-lg w-16 h-16 flex justify-center items-center'>
                    <img src={image} className='w-8 h-8' />
                </div>
                <p>{name}</p>
            </div>
            <p>
                {description}
            </p>
        </div>
    )
}

export default CardDevices