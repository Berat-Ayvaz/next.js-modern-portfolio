'use client'
import React from 'react'
import Image from 'next/image'
import profilephoto from '@/public/assets/profilephotos.jpg'
import { assets } from '@/public/assets/assets'
import { StaticImageData } from 'next/image'



// Tür tanımı
type InfoItem = {
  icon: StaticImageData;
  iconDark: StaticImageData;
  title: string;
  description: string;
};

// Bilgi listesi
const infoList: InfoItem[] = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Languages',
    description: 'C#,HTML, CSS, JavaScript, React.js, Next.js,Tailwind CSS, TypeScript',
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'Management Information Systems, Mersin University',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Built more than 5 projects',
  },
];

const AboutMe = () => {
  return (
    <div id='aboutme' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>About me</h2>
      <div className='flex w-full flex-col lg:flex-row items-center justify-center mt-20 gap-20'>
        <div className='w-64 sm:w-80 max-w-none'>
          <Image src={profilephoto} alt='Profile Photo' className='w-full rounded-2xl' />
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-ovo'>
            I graduated from Mersin University with a
            degree in Management Information Systems.
            I have hands-on experience in full-stack
            development and actively use tools like HTML,
            CSS, JavaScript, Git, GitHub, and Figma in my projects.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 max-w-2xl gap-6'>
            {infoList.map(({ icon, title, description }, index) => (
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
          <h4>Tools I use</h4>


        </div>
      </div>
    </div>
  )
}

export default AboutMe
