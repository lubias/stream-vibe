
'use client'
import AccordionFaq from '@/components/Atoms/Arccordion/Accordion'
import { useAnimation, useInView, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'

function FAQ() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("show")
        }
    }, [isInView]);

    const items = [
        { number: '01', title: 'What is StreamVibe?', content: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.' },
        { number: '02', title: 'How much does StreamVibe cost?', content: 'Conteúdo do Item 2' },
        { number: '03', title: 'What content is available on StreamVibe?', content: 'Conteúdo do Item 3' },
        { number: '04', title: 'How can I watch StreamVibe?', content: 'Conteúdo do Item 3' },
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
                className='flex justify-between items-center mb-14 gap-5 md_1:flex-col md_1:items-start'
            >
                <div className='flex-1 md_1:flex-none'>
                    <h1 className='text-2xl font-bold'>Frequently Asked Questions</h1>
                    <p className='text-xl'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
                </div>
                <Link href="#" className='bg-red-45 py-3 px-4 rounded-md h-12 flex justify-center items-center'>
                    Ask a Question
                </Link>
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
                className='grid grid-cols-2 lg_3:grid-cols-1 gap-20'
            >
                <AccordionFaq items={items} />
                <AccordionFaq items={items} />
            </motion.div>
        </div>
    )
}

export default FAQ