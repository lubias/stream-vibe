import Link from 'next/link'
import React from 'react'

function CardPlans({ name, description, price }) {
    return (
        <div className='bg-black-10 w-full p-10 rounded-lg'>
            <h1 className='font-bold text-xl mb-5'>
                {name}
            </h1>
            <p className='font-normal text-sm mb-12'>
                {description}
            </p>
            <div className='flex items-end gap-1 mb-12'>
                <p className='text-3xl'>{price}</p>
                <p className='text-md'>/month</p>
            </div>
            <div className='flex gap-4 justify-between'>
                <Link href="#" className='bg-black-08 w-1/2 h-14 rounded-md flex justify-center items-center border border-black-15'>Start Free Trial</Link>
                <Link href="#" className='bg-red-45 w-1/2 h-14 rounded-md flex justify-center items-center border border-black-15'>Choose Plan</Link>
            </div>
        </div>
    )
}

export default CardPlans