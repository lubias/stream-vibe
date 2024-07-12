import CardDevices from '@/components/Atoms/CardDevices/CardDevices'
import React from 'react'

function Devices() {
    const devices = [
        { "name": "Smartphone", "description": "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store", "image": "icons/smartphone.svg" },
        { "name": "Tablet", "description": "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store", "image": "icons/tablet.svg" },
        { "name": "SmartTV", "description": "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store", "image": "icons/smartTv.svg" },
        { "name": "Laptops", "description": "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store", "image": "icons/laptops.svg" },
        { "name": "Gaming Consoles", "description": "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store", "image": "icons/console.svg" },
        { "name": "VR Headsets ", "description": "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store", "image": "icons/vr.svg" },
    ];

    return (
        <div className='bg-black-08 pb-32'>
            <div className='mb-20'>
                <h1 className='text-2xl font-bold'>We Provide you streaming experience across various devices.</h1>
                <p className='text-xl'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
            </div>
            <div className='grid grid-cols-3 lg_2:grid-cols-2 lg_3:grid-cols-1 justify-between gap-8'>
                {devices.map((device, idex) => (
                    <CardDevices key={idex} image={device.image} name={device.name} description={device.description} />
                ))}
            </div>
        </div>
    )
}

export default Devices