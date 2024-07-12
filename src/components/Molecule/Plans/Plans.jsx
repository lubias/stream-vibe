import CardPlans from '@/components/Atoms/CardPlans/CardPlans'
import React from 'react'

function Plans() {
    const plans = [
        { name: 'Basic Plan', description: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.', price: '$9.99' },
        { name: 'Standard Plan', description: 'Access to a wider selection of movies and shows, including most new releases and exclusive content', price: '$12.99' },
        { name: 'Premium Plan', description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing', price: '$14.99' },
    ];

    return (
        <div className='bg-black-08 pb-32'>
            <div className='flex justify-between items-center mb-14'>
                <div>
                    <h1 className='text-2xl font-bold'>Choose the plan that's right for you</h1>
                    <p className='text-xl'>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
                </div>
            </div>
            <div className='w-full grid grid-cols-3 lg_2:grid-cols-2 lg_3:grid-cols-1 gap-7'>
                {plans.map((plan, index) => (
                    <CardPlans key={index} name={plan.name} description={plan.description} price={plan.price} />
                ))}
            </div>
        </div>
    )
}

export default Plans