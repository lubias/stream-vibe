import Link from 'next/link'
import React from 'react'

function SupportForm() {
    return (
        <form className='bg-black-06 p-12 md_3:p-6 sm_1:p-3 space-y-10 rounded-lg'>
            <div className='grid grid-cols-2 lg_2:grid-cols-1 gap-12 lg_2:gap-10'>
                <div className='flex flex-col gap-4'>
                    <label htmlFor="">First Name</label>
                    <input type='text' placeholder='Enter First Name' className='w-full bg-black-08 border border-gray-60/30 outline-none text-lg p-5 rounded-lg' />
                </div>
                <div className='flex flex-col gap-4'>
                    <label htmlFor="">Last Name</label>
                    <input type='text' placeholder='Enter Last Name' className='w-full bg-black-08 border border-gray-60/30 outline-none text-lg p-5 rounded-lg' />
                </div>
            </div>
            <div className='grid grid-cols-2 lg_2:grid-cols-1 gap-12 lg_2:gap-10'>
                <div className='flex flex-col gap-4'>
                    <label htmlFor="">Email</label>
                    <input type='email' placeholder='Enter your Email' className='w-full bg-black-08 border border-gray-60/30 outline-none text-lg p-5 rounded-lg' />
                </div>
                <div className='flex flex-col gap-4'>
                    <label htmlFor="">Phone Number</label>
                    <div className='flex gap-3'>
                        <div className='bg-black-08 border border-gray-60/30 rounded-lg flex items-center gap-2 justify-center p-4'>
                            <img src='/icons/indiaFlag.svg' />
                            <img src='/icons/chevron.svg' />
                        </div>
                        <input type='text' placeholder='Enter Phone Number' className='w-full bg-black-08 border border-gray-60/30 outline-none text-lg p-5 flex-1 rounded-lg' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <label htmlFor="">Message</label>
                <textarea placeholder='Enter your Message' className='w-full h-40 bg-black-08 border border-gray-60/30 outline-none text-lg p-5 flex-1 rounded-lg'></textarea>
            </div>
            <div className='flex justify-between lg_2:flex-col lg_2:gap-7'>
                <div className='flex gap-3 items-center lg_2:justify-center'>
                    <input type='checkbox' id='terms' name='terms' />
                    <label htmlFor="terms">I agree with Terms of Use and Privacy Policy</label>
                </div>
                <Link href="#" className='bg-red-45 py-3 px-4 rounded-md h-12 flex justify-center items-center'>
                    Send Message
                </Link>
            </div>
        </form>
    )
}

export default SupportForm