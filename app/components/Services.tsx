import React from 'react'
import { serviceData } from '@/public/assets/assets'
import Image from 'next/image'


const Services = () => {
    return (
        <div id='Services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>What i offers</h4>
            <h2 className='text-center text-5xl font-ovo'>My services</h2>
            <p className='font-ovo flex items-center justify-center pt-5'>Blending design and code, I craft smooth,
                modern web experiences—turning ideas into interactive </p>
            <p className='font-ovo flex items-center justify-center'>realities with React, Next.js, and a passion for clean UI</p>
            <div> <ul className='grid grid-cols-1 sm:grid-cols-4 max-w-6xl gap-6  items-center justify-center mx-auto mt-10'>
                {serviceData.map(({ icon, title, description }, index) => (
                    <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover
                               hover:-translate-y-5 duration-500 hover:shadow-black'>
                        <Image src={icon} alt={title} className='w-7 mt-3' />
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{description}</p>
                        <div>

                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </div>


    )
}

export default Services
