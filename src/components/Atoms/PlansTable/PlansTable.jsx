import React from 'react'

function PlansTable() {
    return (
        <div className='w-full border border-gray-60/30 rounded-xl'>
            <div className='grid grid-cols-4 bg-black-06 rounded-t-xl'>
                <div className='text-xl text-start lg_4:text-center font-semibold p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Features</div>
                <div className='text-xl text-start lg_4:text-center font-semibold p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Basic</div>
                <div className='text-xl text-start lg_4:text-center font-semibold p-8 lg_3:px-4 border-r border-b border-gray-60/30 flex lg_4:flex-col gap-3 items-center'>Standard <div className='bg-red-45 text-sm px-2 py-1'>Popular</div></div>
                <div className='text-xl text-start lg_4:text-center font-semibold p-8 lg_3:px-4 border-b border-gray-60/30'>Premium</div>
            </div>
            <div className='grid grid-cols-4'>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Price</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>$9.99/Month</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>$12.99/Month</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-b border-gray-60/30'>$14.99/Month</div>
            </div>
            <div className='grid grid-cols-4'>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Content</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Access to a wide selection of movies and shows, including some new releases.</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Access to a wider selection of movies and shows, including most new releases and exclusive content</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-b border-gray-60/30'>Access to a widest selection of movies and shows, including all new releases and Offline Viewing</div>
            </div>
            <div className='grid grid-cols-4'>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Devices</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Watch on one device simultaneously</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Watch on Two device simultaneously</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-b border-gray-60/30'>Watch on Four device simultaneously</div>
            </div>
            <div className='grid grid-cols-4'>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Free Trail</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>7 Days</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>7 Days</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-b border-gray-60/30'>7 Days</div>
            </div>
            <div className='grid grid-cols-4'>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Cancel Anytime</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Yes</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Yes</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-b border-gray-60/30'>Yes</div>
            </div>
            <div className='grid grid-cols-4'>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>HDR</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>No</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Yes</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-b border-gray-60/30'>Yes</div>
            </div>
            <div className='grid grid-cols-4'>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Dolby Atmos</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>No</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Yes</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-b border-gray-60/30'>Yes</div>
            </div>
            <div className='grid grid-cols-4'>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Ad - Free</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>No</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Yes</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-b border-gray-60/30'>Yes</div>
            </div>
            <div className='grid grid-cols-4'>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Offline Viewing</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>No</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-b border-gray-60/30'>Yes, for select titles.</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-b border-gray-60/30'>Yes, for all titles.</div>
            </div>
            <div className='grid grid-cols-4'>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-gray-60/30'>Family Sharing</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-gray-60/30'>No</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-r border-gray-60/30'>Yes, up to 5 family members.</div>
                <div className='text-lg text-start text-gray-60 p-8 lg_3:px-4 border-gray-60/30'>Yes, up to 6 family members.</div>
            </div>
        </div>
    )
}

export default PlansTable