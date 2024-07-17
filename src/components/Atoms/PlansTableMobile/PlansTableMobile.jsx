'use client'
import React, { useState } from 'react'

function PlansTableMobile() {
    const [tabActive, setTabActive] = useState('basic')

    function activeTab(tab) {
        setTabActive(tab);
    };

    return (
        <div className='space-y-7'>
            <div className='w-full border border-gray-60/30 rounded-xl px-8 sm_1:px-2 py-4'>
                <div className='grid grid-cols-3'>
                    <button onClick={() => activeTab('basic')} className={`p-4 sm_1:px-1 text-gray-60 ${tabActive == 'basic' ? 'bg-black-12 text-white rounded-lg' : ''}`}>Basic</button>
                    <button onClick={() => activeTab('standard')} className={`p-4 sm_1:px-1 text-gray-60 ${tabActive == 'standard' ? 'bg-black-12 text-white rounded-lg' : ''}`}>Standard</button>
                    <button onClick={() => activeTab('premium')} className={`p-4 sm_1:px-1 text-gray-60 ${tabActive == 'premium' ? 'bg-black-12 text-white rounded-lg' : ''}`}>Premium</button>
                </div>
            </div>
            {tabActive == 'basic' && (
                <div className='w-full border border-gray-60/30 rounded-xl p-6 md_2:px-3 space-y-6'>
                    <div className='grid grid-cols-2 sm_1:flex sm_1:justify-between'>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Price</p>
                            <p className='text-lg'>$9.99/Month</p>
                        </div>
                        <div className='space-y-1 sm_1:text-end'>
                            <p className='text-gray-60 text-lg'>Free Trail</p>
                            <p className='text-lg'>7 Days</p>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-gray-60 text-lg'>Content</p>
                        <p className='text-lg'>Access to a wider selection of movies and shows, including most new releases and exclusive content</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-gray-60 text-lg'>Devices</p>
                        <p className='text-lg'>Watch on Two device simultaneously</p>
                    </div>
                    <div className='grid grid-cols-2 sm_1:flex sm_1:justify-between'>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Cancel Anytime</p>
                            <p className='text-lg'>Yes</p>
                        </div>
                        <div className='space-y-1 sm_1:text-end'>
                            <p className='text-gray-60 text-lg'>HDR</p>
                            <p className='text-lg'>No</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 sm_1:flex sm_1:justify-between'>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Dolby Atmos</p>
                            <p className='text-lg'>No</p>
                        </div>
                        <div className='space-y-1 sm_1:text-end'>
                            <p className='text-gray-60 text-lg'>Ad - Free</p>
                            <p className='text-lg'>No</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 sm_1:flex sm_1:flex-col sm_1:gap-5'>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Offline Viewing</p>
                            <p className='text-lg'>No</p>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Family Sharing</p>
                            <p className='text-lg'>No</p>
                        </div>
                    </div>
                </div>
            )}
            {tabActive == 'standard' && (
                <div className='w-full border border-gray-60/30 rounded-xl p-6 md_2:px-3 space-y-6'>
                    <div className='grid grid-cols-2 sm_1:flex sm_1:justify-between'>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Price</p>
                            <p className='text-lg'>$12.99/Month</p>
                        </div>
                        <div className='space-y-1 sm_1:text-end'>
                            <p className='text-gray-60 text-lg'>Free Trail</p>
                            <p className='text-lg'>7 Days</p>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-gray-60 text-lg'>Content</p>
                        <p className='text-lg'>Access to a wider selection of movies and shows, including most new releases and exclusive content</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-gray-60 text-lg'>Devices</p>
                        <p className='text-lg'>Watch on Two device simultaneously</p>
                    </div>
                    <div className='grid grid-cols-2 sm_1:flex sm_1:justify-between'>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Cancel Anytime</p>
                            <p className='text-lg'>Yes</p>
                        </div>
                        <div className='space-y-1 sm_1:text-end'>
                            <p className='text-gray-60 text-lg'>HDR</p>
                            <p className='text-lg'>Yes</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 sm_1:flex sm_1:justify-between'>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Dolby Atmos</p>
                            <p className='text-lg'>Yes</p>
                        </div>
                        <div className='space-y-1 sm_1:text-end'>
                            <p className='text-gray-60 text-lg'>Ad - Free</p>
                            <p className='text-lg'>Yes</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 sm_1:flex sm_1:flex-col sm_1:gap-5'>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Offline Viewing</p>
                            <p className='text-lg'>Yes, for select titles.</p>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Family Sharing</p>
                            <p className='text-lg'>5 family members.</p>
                        </div>
                    </div>
                </div>
            )}
            {tabActive == 'premium' && (
                <div className='w-full border border-gray-60/30 rounded-xl p-6 md_2:px-3 space-y-6'>
                    <div className='grid grid-cols-2 sm_1:flex sm_1:justify-between'>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Price</p>
                            <p className='text-lg'>$14.99/Month</p>
                        </div>
                        <div className='space-y-1 sm_1:text-end'>
                            <p className='text-gray-60 text-lg'>Free Trail</p>
                            <p className='text-lg'>7 Days</p>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-gray-60 text-lg'>Content</p>
                        <p className='text-lg'>Access to a wider selection of movies and shows, including most new releases and exclusive content</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-gray-60 text-lg'>Devices</p>
                        <p className='text-lg'>Watch on Two device simultaneously</p>
                    </div>
                    <div className='grid grid-cols-2 sm_1:flex sm_1:justify-between'>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Cancel Anytime</p>
                            <p className='text-lg'>Yes</p>
                        </div>
                        <div className='space-y-1 sm_1:text-end'>
                            <p className='text-gray-60 text-lg'>HDR</p>
                            <p className='text-lg'>Yes</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 sm_1:flex sm_1:justify-between'>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Dolby Atmos</p>
                            <p className='text-lg'>Yes</p>
                        </div>
                        <div className='space-y-1 sm_1:text-end'>
                            <p className='text-gray-60 text-lg'>Ad - Free</p>
                            <p className='text-lg'>Yes</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 sm_1:flex sm_1:flex-col sm_1:gap-5'>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Offline Viewing</p>
                            <p className='text-lg'>Yes, for all titles.</p>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-gray-60 text-lg'>Family Sharing</p>
                            <p className='text-lg'>Yes, up to 6 family members.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PlansTableMobile
