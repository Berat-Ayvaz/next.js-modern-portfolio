'use client';
import myprofile from '@/public/assets/profilephotos.jpg';
import handicon from '@/public/assets/hand-icon.png';
import righticon from '@/public/assets/right-arrow.png';
import resumeicon from '@/public/assets/download-icon.png';
import Image from 'next/image';


const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>

            <div>
                <Image
                    alt="My Profile"
                    src={myprofile}
                    className='rounded-full w-32 mt-20' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
                Hello Everyone! I am Berat Ayvaz <Image src={handicon} alt='hand icon' className='w-6' />
            </h3>
            <h1 className='text-3xl sm:text:6xl lg:text-[66px] font-ovo'>
                Front-end Web Developer based in Türkiye
            </h1>
            <p className='max-w-2xl mx-auto font-ovo'>I am a developer who enjoys coding and designing user interfaces. 
                I love creating modern solutions to real-world problems.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border border-white flex items-center rounded-full bg-black text-white gap-2' >
                    Contact me<Image
                        alt="right icon"
                        src={righticon}
                        className='w-4' /></a>
                <a href="/public/Berat_AYVAZ_CV.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                    My resume<Image
                        alt="resume icon"
                        src={resumeicon}
                        className='w-4' /></a>
            </div>
        </div>
    )
}

export default Header
