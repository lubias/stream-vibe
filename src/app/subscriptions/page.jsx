import ScrollToTopButton from '@/components/Atoms/ScrollToTopButton/ScrollToTopButton'
import Footer from '@/components/Molecule/Footer/Footer'
import Header from '@/components/Molecule/Header/Header'
import SubscriptionsContent from '@/components/Organism/SubscriptionsContent/SubscriptionsContent'
import React from 'react'

function page() {
    return (
        <div className='bg-black-08'>
            <Header page="subscriptions" />
            <SubscriptionsContent />
            <Footer />
            <ScrollToTopButton />
        </div>
    )
}

export default page