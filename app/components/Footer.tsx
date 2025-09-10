import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image
                    src={assets.logo}
                    alt='logo'
                    className='w-20 mx-auto mb-2'
                />
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image
                        src={assets.mail_icon}
                        alt='mail icon'
                        className='w-6'
                    />
                    beeratayvaz@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t  border-gray-400 mx-[12%] mt-12 py-6'>
                <p>© 2025 Berat Ayvaz. All rights reserved.</p>
                <ul className='flex items-center justify-center gap-6 mt-4 sm:mt-0'>
                    <li><a href="https://www.linkedin.com/in/berat-ayvaz-2751611b5/" target='blank'>
                        <Image
                            src={assets.linkedIn}
                            alt='' className='w-8 hover:-translate-y-2 duration-500' /></a>
                    </li>
                    <li><a href="https://github.com/Berat-Ayvaz" target='blank'>
                        <Image src={assets.github}
                            alt='github' className='w-8 hover:-translate-y-2 duration-500' /></a>
                    </li>
                    <li><a href="https://codepen.io/Ayvazz" target='blank'>
                        <Image src={assets.codapen}
                            alt='' className='w-8 hover:-translate-y-2 duration-500' /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
