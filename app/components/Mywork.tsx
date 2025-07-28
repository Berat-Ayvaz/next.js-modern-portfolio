import React from 'react'
import { workData } from '@/public/assets/assets'
import Image from 'next/image'

const Mywork = () => {
    return (
        <div id='Mywork' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo mt-10'>My portfolio</h4>
            <h2 className='text-center text-5xl font-ovo'>My latest work</h2>
            <p className='font-ovo flex items-center justify-center pt-5'>
                Welcome to my web development portfolio! Explore a collection of projects showcasing
            </p>
            <p className='font-ovo flex items-center justify-center '>
                my expertise in front-end development.
            </p>
            
        </div>
    )
}

export default Mywork
