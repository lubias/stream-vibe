import React from 'react'
import CarouselCast from '@/components/Atoms/CarouselCast/CarouselCast'
import CarouselReviews from '@/components/Atoms/CarouselReviews/CarouselReviews'
import AccordionEpisodes from '@/components/Atoms/AccordionEpisodes/AccordionEpisodes'

function ShowDetails() {
    const cast = [
        { image: '/images/cards/cast/cast_show_1.png' },
        { image: '/images/cards/cast/cast_show_2.png' },
        { image: '/images/cards/cast/cast_show_3.png' },
        { image: '/images/cards/cast/cast_show_4.png' },
        { image: '/images/cards/cast/cast_show_5.png' },
        { image: '/images/cards/cast/cast_show_6.png' },
        { image: '/images/cards/cast/cast_show_7.png' },
        { image: '/images/cards/cast/cast_show_8.png' },
    ]

    const reviews = [
        { name: "Aniket Roy", from: "From India", review: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it." },
        { name: "Swaraj", from: "From India", review: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind." },
    ]

    const episodes = [
        { title: 'Chapter One : The Vanishing of Will Byers', duration: '49min', description: 'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.', number: '01', image: '/images/cards/shows/eps/ep_1.svg' },
        { title: 'Chapter Two: The Weirdo on Maple Street', duration: '56min', description: 'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.', number: '02', image: '/images/cards/shows/eps/ep_2.svg' },
        { title: 'Chapter Three: Holly, Jolly', duration: '52min', description: 'An increasingly concerned Nancy looks for Barb and finds out what Jonathan\'s been up to. Joyce is convinced Will is trying to talk to her.', number: '03', image: '/images/cards/shows/eps/ep_3.svg' },
        { title: 'Chapter Four: The Body', duration: '51min', description: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover.', number: '04', image: '/images/cards/shows/eps/ep_4.svg' },
        { title: 'Chapter Five: The Flea and the Acrobat', duration: '53min', description: 'Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.', number: '05', image: '/images/cards/shows/eps/ep_5.svg' },
    ]

    return (
        <div className='col-span-2 lg_4:col-span-1 space-y-8'>
            <div className='bg-black-10 rounded-lg p-12 lg_2:p-6 space-y-5'>
                <h1 className='text-2xl font-semibold'>Seasons and Episodes</h1>
                <AccordionEpisodes season="01" episodes={episodes} />
                <AccordionEpisodes season="02" episodes={episodes} />
                <AccordionEpisodes season="03" episodes={episodes} />
            </div>
            <div className='bg-black-10 rounded-lg p-12 md_2:p-6 space-y-3'>
                <h1 className='text-lg text-gray-60'>Description</h1>
                <p className='text-lg'>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
            </div>
            <div className='bg-black-10 rounded-lg p-12 md_2:p-6'>
                <CarouselCast title="Cast" cards={cast} />
            </div>
            <div className='bg-black-10 rounded-lg p-12 md_2:p-6'>
                <CarouselReviews title="Reviews" cards={reviews} />
            </div>
        </div>
    )
}

export default ShowDetails