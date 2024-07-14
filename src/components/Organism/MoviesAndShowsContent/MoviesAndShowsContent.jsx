import CardFreeTrail from '@/components/Molecule/CardFreeTrail/CardFreeTrail'
import Movies from '@/components/Molecule/Movies/Movies'
import Shows from '@/components/Molecule/Shows/Shows'
import React from 'react'

function MoviesAndShowsContent() {
    return (
        <div className='px-40 lg_1:px-20 sm_1:px-5 bg-black-08 space-y-24'>
            <Movies />
            <Shows />
            <CardFreeTrail />
        </div>
    )
}

export default MoviesAndShowsContent