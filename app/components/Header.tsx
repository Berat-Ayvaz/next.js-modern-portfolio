'use client';
import myprofile from '@/public/assets/profilephotos.jpg';
import handicon from '@/public/assets/hand-icon.png';
<<<<<<< HEAD
import righticon from '@/public/assets/right-arrow.png';
import resumeicon from '@/public/assets/download-icon.png';
=======
>>>>>>> 52cc42667ae2d6b6dd98dffea1bec6ad90454258
import Image from 'next/image';


const Header = () => {
    return (
<<<<<<< HEAD
        <div className=''>
=======
        <div>
>>>>>>> 52cc42667ae2d6b6dd98dffea1bec6ad90454258

            <div>
                <Image
                    alt="My Profile"
                    width={200}
                    src={myprofile}
                    className='rounded-full w-32' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
<<<<<<< HEAD
                Hello Everyone! I am Berat Ayvaz <Image src={handicon} alt='hand icon' className='w-6' />
=======
                Merhaba! Ben Berat Ayvaz <Image src={handicon} alt='hand icon' className='w-6' />
>>>>>>> 52cc42667ae2d6b6dd98dffea1bec6ad90454258
            </h3>
            <h1 className='text-3xl sm:text:6xl lg:text-[66px] font-ovo'>
                Full-stack Web Developer based in Türkiye
            </h1>
<<<<<<< HEAD
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
=======
>>>>>>> 52cc42667ae2d6b6dd98dffea1bec6ad90454258
        </div>
    )
}

export default Header
