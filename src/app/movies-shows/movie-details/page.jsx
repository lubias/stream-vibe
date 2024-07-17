import ScrollToTopButton from '@/components/Atoms/ScrollToTopButton/ScrollToTopButton'
import Footer from '@/components/Molecule/Footer/Footer'
import Header from '@/components/Molecule/Header/Header'
import MoviesDetailHero from '@/components/Molecule/MoviesDetailHero/MoviesDetailHero'
import MovieDetailsContent from '@/components/Organism/MovieDetailsContent/MovieDetailsContent'
import React from 'react'

function page() {
    return (
        <div className='bg-black-08'>
            <Header page="movies" />
            <MoviesDetailHero />
            <MovieDetailsContent />
            <Footer />
            <ScrollToTopButton />
        </div>
    )
}

export default page