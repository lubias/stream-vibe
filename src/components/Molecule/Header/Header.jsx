'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Header({ page }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (pathname) => {
        return page === pathname;
    };

    return (
        <div className='h-32 flex justify-around items-center'>
            <Link href="/home"><img src='/images/logo.svg' /></Link>
            <div className='lg_4:hidden'>
                <nav className='flex gap-6 items-center bg-black-06 border-4 rounded-md border-black-12 py-2 px-4'>
                    <Link href="/home" className={`${isActive('home') ? 'bg-black-12 py-3 px-6 rounded-md' : ''}`}>Home</Link>
                    <Link href="/movies-shows" className={`${isActive('movies') ? 'bg-black-12 py-3 px-6 rounded-md' : ''}`}>Movies & Shows</Link>
                    <Link href="/support" className={`${isActive('support') ? 'bg-black-12 py-3 px-6 rounded-md' : ''}`}>Support</Link>
                    <Link href="/subscriptions" className={`${isActive('subscriptions') ? 'bg-black-12 py-3 px-6 rounded-md' : ''}`}>Subscriptions</Link>
                </nav>
            </div>
            <div className='flex gap-8 lg_4:hidden'>
                <img src='/icons/search.svg' />
                <img src='/icons/bell.svg' />
            </div>
            <div className="hidden lg_4:block h-full">
                <div className='relative mt-10'>
                    <button onClick={toggleMenu} className="text-white">
                        <img src='/icons/menu.svg' />
                    </button>
                    {isOpen && (
                        <nav className='absolute top-12 right-0 mt-2 bg-black-12 shadow-lg py-2 text-nowrap rounded-md flex flex-col'>
                            <Link href="/home" className={`py-2 px-4 ${isActive('/') ? 'bg-black-12' : ''}`}>Home</Link>
                            <Link href="/movies-shows" className={`py-2 px-4 ${isActive('/movies') ? 'bg-black-12' : ''}`}>Movies & Shows</Link>
                            <Link href="/support" className={`py-2 px-4 ${isActive('/support') ? 'bg-black-12' : ''}`}>Support</Link>
                            <Link href="/subscriptions" className={`py-2 px-4 ${isActive('/subscriptions') ? 'bg-black-12' : ''}`}>Subscriptions</Link>
                        </nav>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
