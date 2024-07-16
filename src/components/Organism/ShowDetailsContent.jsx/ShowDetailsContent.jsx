import React from 'react'

function ShowDetailsContent() {
    return (
        <div className='px-40 lg_1:px-20 md_1:px-10 sm_1:px-3 bg-black-08 space-y-24'>
            <div className='grid grid-cols-3 gap-5 lg_4:grid-cols-1'>
                <MovieDetails />
                <MovieInformation />
            </div>
            <CardFreeTrail />
        </div>
    )
}

export default ShowDetailsContent