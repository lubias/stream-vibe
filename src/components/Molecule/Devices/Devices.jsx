'use client'
import CardDevices from '@/components/Atoms/CardDevices/CardDevices'
import { useAnimation, useInView, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

function Devices() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("show")
        }
    }, [isInView]);

    const devices = [
        { "name": "Smartphone", "description": "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store", "image": "/icons/smartphone.svg" },
        { "name": "Tablet", "description": "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store", "image": "/icons/tablet.svg" },
        { "name": "SmartTV", "description": "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store", "image": "/icons/smartTv.svg" },
        { "name": "Laptops", "description": "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store", "image": "/icons/laptops.svg" },
        { "name": "Gaming Consoles", "description": "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store", "image": "/icons/console.svg" },
        { "name": "VR Headsets ", "description": "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store", "image": "/icons/vr.svg" },
    ];

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
                className='mb-10'
            >
                <h1 className='text-2xl font-bold'>We Provide you streaming experience across various devices.</h1>
                <p className='text-xl'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { x: -10, opacity: 0 },
                    show: { x: 0, opacity: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                exit={{ x: 10, opacity: 0 }}
                transition={{ duration: 1 }}
                className='grid grid-cols-3 lg_2:grid-cols-2 lg_3:grid-cols-1 justify-between gap-8'
            >
                <div id='motionPoint' className='absolute' ref={containerRef}></div>
                {devices.map((device, idex) => (
                    <CardDevices key={idex} image={device.image} name={device.name} description={device.description} />
                ))}
            </motion.div>
        </div>
    )
}

export default Devices