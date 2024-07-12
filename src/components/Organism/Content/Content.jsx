import CardFreeTrail from '@/components/Molecule/CardFreeTrail/CardFreeTrail'
import Categories from '@/components/Molecule/Categories/Categories'
import Devices from '@/components/Molecule/Devices/Devices'
import FAQ from '@/components/Molecule/FAQ/FAQ'
import Plans from '@/components/Molecule/Plans/Plans'
import React from 'react'

function Content() {
    return (
        <div className='px-40 lg_1:px-20 sm_1:px-5 bg-black-08'>
            <Categories />
            <Devices />
            <FAQ />
            <Plans />
            <CardFreeTrail />
        </div>
    )
}

export default Content