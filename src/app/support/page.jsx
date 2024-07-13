import Footer from '@/components/Molecule/Footer/Footer'
import Header from '@/components/Molecule/Header/Header'
import React from 'react'

function page() {
    return (
        <div className='bg-black-08'>
            <Header page="support" />
            <Footer />
        </div>
    )
}

export default page