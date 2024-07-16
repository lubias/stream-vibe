import SupportForm from '@/components/Atoms/SupportForm/SupportForm'
import React from 'react'

function SupportFormContent() {
    return (
        <div className='bg-black-08 pb-32 pt-20'>
            <div className='grid grid-cols-3 gap-20 lg_2:gap-10 md_2:flex md_2:flex-col'>
                <div className='flex flex-col justify-between lg_2:justify-normal lg_2:gap-7'>
                    <div className='space-y-5'>
                        <h1 className='text-4xl font-bold md_2:text-center'>Welcome to our support page!</h1>
                        <p className='text-lg text-gray-60 md_2:text-center'>We're here to help you with any problems you may be having with our product.</p>
                    </div>
                    <img src='/images/support.png' className='h-fit w-fit' />
                </div>
                <div className='col-span-2'>
                    <SupportForm />
                </div>
            </div>
        </div>
    )
}

export default SupportFormContent