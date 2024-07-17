import PlansTable from '@/components/Atoms/PlansTable/PlansTable'
import PlansTableMobile from '@/components/Atoms/PlansTableMobile/PlansTableMobile'
import React from 'react'

function ComparePlans() {
    return (
        <div className='bg-black-08 pb-32'>
            <div className='flex justify-between items-center mb-14'>
                <div>
                    <h1 className='text-2xl font-bold'>Compare our plans and find the right one for you</h1>
                    <p className='text-xl'>StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.</p>
                </div>
            </div>
            <div className='md_2:hidden'>
                <PlansTable />
            </div>
            <div className='hidden md_2:block'>
                <PlansTableMobile />
            </div>
        </div>
    )
}

export default ComparePlans