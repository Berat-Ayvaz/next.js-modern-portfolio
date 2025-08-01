import React from 'react'
import { workData } from '@/public/assets/assets'
import Image from 'next/image'
import send_icon from '@/public/assets/send-icon.png'


const Work = () => {
    return (
        <div id='Work' className='w-full h-500 py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo mt-10'>My portfolio</h4>
            <h2 className='text-center text-5xl font-ovo'>My latest work</h2>
            <p className='text-center  max-w-2xl mx-auto mt-5 mb-12 font-ovo'>Welcome to my web development portfolio! Explore a collection of projects
                showcasing my expertise in front-end development.</p>

            <div className='grid grid-cols-auto-fit gap-5 my-10 px-5 md:px-20 lg:px-20'>
                {workData.map((project, index) => (
                    <div key={index}
                        className='aspect-square bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    >
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2>{project.title}
                                    <p>{project.description}</p>
                                </h2>
                            </div>
                            <div>
                                <Image
                                    src={send_icon}
                                    alt='send icon'
                                    className='w-5' />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Work
