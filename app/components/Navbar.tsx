'use client';
import React from 'react';
import Image from 'next/image';
import logo from '@/public/assets/logo (2).png';
import arrowIcon from '@/public/assets/arrow-icon.png';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-4 w-full fixed px-5 lg:px-8 xl:[8%]
        z-50'>
            <a href="#top">
                <Image
                    src={logo}
                    alt="Logo"
                    width={112}
                    height={32}
                    className="cursor-pointer mr-14"
                />
            </a>
            <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
                <li><a href="#top">Ana Sayfa</a></li>
                <li><a href="#aboutme">Hakkımda</a></li>
                <li><a href="#services">Servisler</a></li>
                <li><a href="#mywork">İşlerim</a></li>
            </ul>
            <div className="">
                <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4">
                    İletişim
                    <Image src={arrowIcon} alt="İletişim ikonu" width={12} height={12} className="w-3" />
                </a>
            </div>
        </nav>

    );
};

export default Navbar;
