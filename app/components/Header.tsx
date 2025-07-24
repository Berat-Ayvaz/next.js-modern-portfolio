'use client';
import myprofile from '@/public/assets/profilephotos.jpg';
import handicon from '@/public/assets/hand-icon.png';
import Image from 'next/image';


const Header = () => {
    return (
        <div>

            <div>
                <Image
                    alt="My Profile"
                    width={200}
                    src={myprofile}
                    className='rounded-full w-32' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
                Merhaba! Ben Berat Ayvaz <Image src={handicon} alt='hand icon' className='w-6' />
            </h3>
            <h1 className='text-3xl sm:text:6xl lg:text-[66px] font-ovo'>
                Full-stack Web Developer based in Türkiye
            </h1>
        </div>
    )
}

export default Header
