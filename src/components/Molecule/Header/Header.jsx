'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log("teste");
    };

    return (
        <div className='h-32 flex justify-around items-center'>
            <img src='images/logo.svg' />
            <div className='lg_4:hidden'>
                <nav className='flex gap-6 items-center bg-black-06 border-4 rounded-md border-black-12 py-2 px-4'>
                    <Link href="#" className='bg-black-12 py-3 px-6 rounded-md'>Home</Link>
                    <Link href="#">Movies&Shows</Link>
                    <Link href="#">Support</Link>
                    <Link href="#">Subscriptions</Link>
                </nav>
            </div>
            <div className='flex gap-8 lg_4:hidden'>
                <img src='icons/search.svg' />
                <img src='icons/bell.svg' />
            </div>
            <div className="hidden lg_4:block h-full">
                <div className='relative mt-10'>
                    <button onClick={toggleMenu} className="text-white">
                        <img src='icons/menu.svg' />
                    </button>
                    {isOpen && (
                        <nav className='absolute top-12 right-0 mt-2 bg-black-12 shadow-lg py-2 text-nowrap rounded-md flex flex-col'>
                            <Link href="#" className='py-2 px-4 hover:bg-gray-200'>Home</Link>
                            <Link href="#" className='py-2 px-4 hover:bg-gray-200'>Movies & Shows</Link>
                            <Link href="#" className='py-2 px-4 hover:bg-gray-200'>Support</Link>
                            <Link href="#" className='py-2 px-4 hover:bg-gray-200'>Subscriptions</Link>
                        </nav>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
