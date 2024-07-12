import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <div>
            <div className='flex justify-center mt-12 mb-14 lg_4:mt-7 lg_4:mb-7'>
                <img src='images/logo_hero.svg' className='w-96 lg_2:w-80 lg_4:w-40' />
            </div>
            <div className='flex flex-col items-center px-96 lg_2:px-60 lg_3:px-40 md_2:px-5'>
                <h1 className='text-4xl lg_2:text-3xl mb-4 font-bold text-center'>The Best Streaming Experience</h1>
                <p className='text-base text-center font-normal mb-10 text-gray-60'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                <Link href="#" className='bg-red-45 py-3 px-4 rounded-md flex gap-1 justify-center items-center mb-8'>
                    <img src='icons/play.svg' />
                    <span>Start Watching Now</span>
                </Link>
            </div>
        </div>
    )
}

export default Hero