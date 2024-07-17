import CardFreeTrail from '@/components/Molecule/CardFreeTrail/CardFreeTrail'
import ComparePlans from '@/components/Molecule/ComparePlans/ComparePlans'
import Plans from '@/components/Molecule/Plans/Plans'
import React from 'react'

function SubscriptionsContent() {
    return (
        <div className='px-40 lg_1:px-20 md_1:px-10 sm_1:px-5 bg-black-08 pt-20'>
            <Plans />
            <ComparePlans />
            <CardFreeTrail />
        </div>
    )
}

export default SubscriptionsContent