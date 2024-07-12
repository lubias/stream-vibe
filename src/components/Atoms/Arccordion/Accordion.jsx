import React, { useState } from 'react';

const AccordionItem = ({ number, title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-red-45">
            <button
                className="w-full py-2 focus:outline-none flex justify-between items-center"
                onClick={toggleAccordion}
            >
                <div className='text-left text-md font-medium text-white flex gap-5 items-center'>
                    <div className='bg-black-12 w-16 h-16 flex justify-center items-center rounded-lg'>
                        <p className='text-sm'>{number}</p>
                    </div>
                    {title}
                </div>
                <img src={isOpen ? 'icons/minus.svg' : 'icons/plus.svg'} className={isOpen ? 'w-4' : 'w-5'} alt={isOpen ? 'Minus Icon' : 'Plus Icon'} />
            </button>
            {isOpen && (
                <div className='pl-20 pr-7 mb-7'>
                    <p className='text-sm'>{content}</p>
                </div>
            )}
        </div>
    );
};

const AccordionFaq = ({ items }) => {
    return (
        <div className="w-full">
            {items.map((item, index) => (
                <AccordionItem key={index} number={item.number} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default AccordionFaq;
