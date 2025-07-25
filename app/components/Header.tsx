'use client';
import myprofile from '@/public/assets/profilephotos.jpg';
import handicon from '@/public/assets/hand-icon.png';
import righticon from '@/public/assets/right-arrow.png';
import resumeicon from '@/public/assets/download-icon.png';
import Image from 'next/image';


const Header = () => {
    return (
        <div className=''>

            <div>
                <Image
                    alt="My Profile"
                    width={200}
                    src={myprofile}
                    className='rounded-full w-32' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
                Hello Everyone! I am Berat Ayvaz <Image src={handicon} alt='hand icon' className='w-6' />
            </h3>
            <h1 className='text-3xl sm:text:6xl lg:text-[66px] font-ovo'>
                Full-stack Web Developer based in Türkiye
            </h1>
            <p className='max-w-2xl mx-auto font-ovo'>I am a Management Information Systems graduate from Mersin University with hands-on experience in full-stack development.
                I work with HTML, CSS, JavaScript, Git, GitHub, and Figma.
                Through my internships in web development and project management,
                I gained practical knowledge of both frontend and backend processes.
                I am constantly improving myself and building modern web applications with a full-stack mindset.
            </p>
            <a href="#contact" >Contact me<Image
                alt="right icon"
                src={righticon}
                className='w-4' /></a>
            <a href="/public/Berat_AYVAZ_CV.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'> My resume<Image
                alt="resume icon"
                src={resumeicon}
                className='w-4' /></a>
        </div>
    )
}

export default Header
