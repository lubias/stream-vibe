import CardFreeTrail from '@/components/Molecule/CardFreeTrail/CardFreeTrail'
import FAQ from '@/components/Molecule/FAQ/FAQ'
import SupportFormContent from '@/components/Molecule/SupportFormContent/SupportFormContent'
import React from 'react'

function SupportContent() {
    return (
        <div className='px-40 lg_1:px-20 md_1:px-10 sm_1:px-5 bg-black-08'>
            <SupportFormContent />
            <FAQ />
            <CardFreeTrail />
        </div>
    )
}

export default SupportContent