import Link from 'next/link'
import React from 'react'

function MoviesAndShowsHero() {
    return (
        <div className='px-40 lg_1:px-20 sm_1:px-5 bg-black-08 mb-40'>
            <div className='bg-[url("/images/movies_hero.png")] bg-cover bg-no-repeat min-h-[800px] w-full flex flex-col gap-12 justify-end items-center px-48'>
                <div className='flex flex-col gap-5 items-center mb-32'>
                    <h1 className='text-4xl bold text-center'>Avengers : Endgame</h1>
                    <p className='text-lg text-gray-60 text-center'>
                        With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.
                    </p>
                    <div className='flex gap-5 items-center'>
                        <Link href="#" className='bg-red-45 py-3 px-4 rounded-md flex gap-1 justify-center items-center'>
                            <img src='icons/play.svg' />
                            <span>Play Now</span>
                        </Link>
                        <div className='h-14 w-14 bg-black-06 flex items-center justify-center rounded-lg'>
                            <img src='icons/plus.svg' />
                        </div>
                        <div className='h-14 w-14 bg-black-06 flex items-center justify-center rounded-lg'>
                            <img src='icons/hand_thumb_up.svg' />
                        </div>
                        <div className='h-14 w-14 bg-black-06 flex items-center justify-center rounded-lg'>
                            <img src='icons/speaker_wave.svg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviesAndShowsHero