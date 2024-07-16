'use client'
import Footer from '@/components/Molecule/Footer/Footer'
import Header from '@/components/Molecule/Header/Header'
import ShowsDetailHero from '@/components/Molecule/ShowsDetailHero/ShowsDetailHero'
import ShowDetailsContent from '@/components/Organism/ShowDetailsContent.jsx/ShowDetailsContent'
import React from 'react'

function page() {
    return (
        <div className='bg-black-08'>
            <Header page="movies" />
            <ShowsDetailHero />
            <ShowDetailsContent />
            <Footer />
        </div>
    )
}

export default page