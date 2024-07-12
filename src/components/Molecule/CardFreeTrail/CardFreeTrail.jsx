import Link from 'next/link'
import React from 'react'

function CardFreeTrail() {
    return (
        <div className='w-full pb-32 bg-black-08 flex'>
            <div className='bg-[url("/images/background_card.png")] h-80 w-full flex items-center justify-between px-20 gap-14 lg_4:flex-col lg_4:justify-center lg_4:px-5'>
                <div className='flex-1 lg_4:flex-none lg_4:text-center'>
                    <h1 className='text-2xl mb-2'>Start your free trial today!</h1>
                    <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                </div>
                <Link href="#" className='bg-red-45 w-48 h-14 rounded-md flex justify-center items-center border border-black-15'>Start a Free Trail</Link>
            </div>
        </div>
    )
}

export default CardFreeTrail