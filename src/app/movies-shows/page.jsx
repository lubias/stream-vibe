import ScrollToTopButton from '@/components/Atoms/ScrollToTopButton/ScrollToTopButton'
import Footer from '@/components/Molecule/Footer/Footer'
import Header from '@/components/Molecule/Header/Header'
import MoviesAndShowsHero from '@/components/Molecule/MoviesAndShowsHero/MoviesAndShowsHero'
import MoviesAndShowsContent from '@/components/Organism/MoviesAndShowsContent/MoviesAndShowsContent'
import React from 'react'

function page() {
    return (
        <div className='bg-black-08'>
            <Header page="movies" />
            <MoviesAndShowsHero />
            <MoviesAndShowsContent />
            <Footer />
            <ScrollToTopButton />
        </div>
    )
}

export default page