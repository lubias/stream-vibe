'use client'
import PlansTable from '@/components/Atoms/PlansTable/PlansTable'
import PlansTableMobile from '@/components/Atoms/PlansTableMobile/PlansTableMobile'
import { useAnimation, useInView, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

function ComparePlans() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("show")
        }
    }, [isInView]);

    return (
        <div className='bg-black-08 pb-14'>
            <motion.div
                variants={{
                    hidden: { x: 10, opacity: 0 },
                    show: { x: 0, opacity: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className='flex justify-between items-center mb-14'
            >
                <div>
                    <h1 className='text-2xl font-bold'>Compare our plans and find the right one for you</h1>
                    <p className='text-xl'>StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.</p>
                </div>
            </motion.div>
            <div id='motionPoint' className='absolute' ref={containerRef}></div>
            <motion.div
                variants={{
                    hidden: { x: -10, opacity: 0 },
                    show: { x: 0, opacity: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                exit={{ x: 10, opacity: 0 }}
                transition={{ duration: 1 }}
                className='md_2:hidden'
            >
                <PlansTable />
            </motion.div>
            <div className='hidden md_2:block'>
                <PlansTableMobile />
            </div>
        </div>
    )
}

export default ComparePlans