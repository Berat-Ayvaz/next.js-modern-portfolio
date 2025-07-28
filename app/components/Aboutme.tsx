'use client'
import React from 'react'
import Image from 'next/image'
import profilephoto from '@/public/assets/profilephotos.jpg'
import { infoList } from '@/public/assets/assets'

const AboutMe = () => {
  return (
    <div id='aboutme' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>About me</h2>
      <div className='flex w-full flex-col lg:flex-row items-center justify-center mt-20 gap-20'>
        <div className='w-80 sm:w-100 max-w-none'>
          <Image src={profilephoto} alt='Profile Photo' className='max-w-full rounded-2xl lg:mb-20' />
        </div>
        <div className='flex-1'>
          <p className='mb-5 lg:mb-10 max-w-2xl font-ovo'>
            I graduated from Mersin University with a
            degree in Management Information Systems.
            I have hands-on experience in Front-end
            development and actively use platforms VScode, Visiual Studio, Git, GitHub and Figma in my projects.
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

          <h4 className='font-ovo'><b>Languages & Tools</b></h4>
          {/* Front-end */}
          <h4 className='font-ovo'><strong>Front-end</strong></h4>
          <p className='flex gap-4 flex-wrap mt-2 '>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width={40} height={40} />
            </a>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width={40} height={40} />
            </a>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width={40} height={40} />
            </a>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <Image src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width={40} height={40} />
            </a>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <Image src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width={40} height={40} />
            </a>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://getbootstrap.com" target="_blank" rel="noreferrer">
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width={40} height={40} />
            </a>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://sass-lang.com" target="_blank" rel="noreferrer">
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width={40} height={40} />
            </a>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width={40} height={40} />
            </a>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width={40} height={40} />
            </a>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://www.figma.com/" target="_blank" rel="noreferrer">
              <Image src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="css3" width={40} height={40} />
            </a>
          </p>
          {/* Back-end Kısmı */}
          <h4 className='font-ovo'><strong>Back-end</strong></h4>
          <p className='flex flex-wrap items-center gap-4 mt-2 '>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://dotnet.microsoft.com/" target="_blank" rel="noreferrer">
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" width={40} height={40} />
            </a>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noreferrer">
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width={40} height={40} />
            </a>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer">
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" alt="mssql" width={40} height={40} />
            </a>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://firebase.google.com/" target="_blank" rel="noreferrer">
              <Image src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width={40} height={40} />
            </a>
            <a className='border-3 p-2 rounded-2xl border-gray-600  hover:bg-lightHover
               hover:-translate-y-2 duration-500 hover:shadow-black' href="https://www.sqlite.org/" target="_blank" rel="noreferrer">
              <Image src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="SQLite" width={40} height={40} />
            </a>
          </p>

        </div>
      </div>
    </div>
  )
}

export default AboutMe
