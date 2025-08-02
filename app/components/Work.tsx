import React from 'react'
import { workData } from '@/public/assets/assets'
import Image from 'next/image'
import send_icon from '@/public/assets/send-icon.png'
import right_arrow from '@/public/assets/right-arrow.png'


const Work = () => {
    return (
        <div id='Work' className='w-full py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo '>My portfolio</h4>
            <h2 className='text-center text-5xl font-ovo'>My latest work</h2>
            <p className='text-center  max-w-2xl mx-auto mt-5 mb-12 font-ovo'>Welcome to my web development portfolio! Explore a collection of projects
                showcasing my expertise in front-end development.</p>

            <div className='grid grid-cols-auto-fit gap-5 my-10 px-5 md:px-20 lg:px-20'>
                {workData.map((project, index) => (
                    <div key={index}
                        className='aspect-square bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    >
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-3 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>
                                    {project.title}
                                </h2>
                                <p className='text-sm text-gray-700'>
                                    {project.description}

                                </p>
                            </div>
                            <div className='flex items-center justify-center border rounded-full border-black w-9   aspect-square shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-all duration-500'>
                                <Image
                                    src={send_icon}
                                    alt='send icon'
                                    className='w-5' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="#" className='w-max flex items-center justify-center gap-2  text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 mx-auto py-3 my-20  hover:bg-lightHover  hover:text-black trasition duration-500'>
                Show more <Image
                    src={right_arrow}
                    alt='Right Arrow'
                    className='w-4' />
            </a>
        </div>
    )
}

export default Work
