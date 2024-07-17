'use client'
import { useAnimation, useInView, motion } from 'framer-motion';
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

function CardFreeTrail() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("show")
        }
    }, [isInView]);

    return (
        <>
            <div className='w-full pb-14 bg-black-08 flex'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1 }}
                    className='bg-[url("/images/background_card.png")] bg-no-repeat bg-cover h-80 w-full flex items-center justify-between px-20 gap-14 lg_4:flex-col lg_4:justify-center lg_4:px-5 rounded-lg'
                >
                    <div className='flex-1 lg_4:flex-none lg_4:text-center'>
                        <h1 className='text-2xl mb-2'>Start your free trial today!</h1>
                        <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                    </div>
                    <Link href="#" className='bg-red-45 w-48 h-14 rounded-md flex justify-center items-center border border-black-15'>Start a Free Trail</Link>
                </motion.div>
            </div>
            <div id='motionPoint' className='absolute' ref={containerRef}></div>
        </>
    )
}

export default CardFreeTrail