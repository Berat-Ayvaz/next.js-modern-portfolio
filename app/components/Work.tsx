import React from 'react'
import { workData } from '@/public/assets/assets'
import Image from 'next/image'
import send_icon from '@/public/assets/send-icon.png'


const Work = () => {
    return (
        <div id='Work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo mt-10'>My portfolio</h4>
            <h2 className='text-center text-5xl font-ovo'>My latest work</h2>
            <p className='font-ovo flex items-center justify-center pt-5'>
                Welcome to my web development portfolio! Explore a collection of projects showcasing
            </p>
            <p className='font-ovo flex items-center justify-center '>
                my expertise in front-end development.
            </p>
            <div className='grid grid-cols-auto-fit gap-5 my-10'>
                {workData.map((project, index) => (
                    <div key={index}
                        className=''>
                        <Image
                            src={project.bgImage}
                            alt={project.title}
                            width={500}
                            height={400}
                            className='aspect-square bg-no-repeatbg-cover rounded-lg relative cursor-pointer group'
                        />

                        <div className='absolute'>
                            <h2>{project.title}
                                <p>{project.description}</p>
                            </h2>
                        </div>
                        <div>
                            <Image
                                src={send_icon}
                                alt='send icon' />
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Work
