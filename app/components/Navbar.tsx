'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import logo from '@/public/assets/logo (2).png';
import headercolor from '@/public/assets/header-bg-color.png';
import arrowIcon from '@/public/assets/arrow-icon.png';
import moonIcon from '@/public/assets/moon_icon.png';
import menu_black from '@/public/assets/menu-black.png';
import close_black from '@/public/assets/close-black.png';
const Navbar = () => {
    const [IsScroll, setIsScroll] = React.useState(false);
    const sideMenuRef = useRef<HTMLUListElement>(null);
    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)';
        }
    };
    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)';
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, []);
    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'> <Image
                src={headercolor}
                alt='Header background color'
                className='w-full'
            />
            </div>
            <nav className={`flex items-center justify-between py-4 w-full fixed px-5 lg:px-8 xl:[8%]
        z-50 ${IsScroll ? "bg-white/75 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#top">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={112}
                        height={32}
                        className="cursor-pointer mr-14"
                    />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${IsScroll ? "" : "bg-white/50 shadow-sm"} `}>
                    <li><a className='font-ovo' href="#Top">Home</a></li>
                    <li><a className='font-ovo' href="#About-me">About me</a></li>
                    <li><a className='font-ovo' href="#Services">Services</a></li>
                    <li><a className='font-ovo' href="#Work">My work</a></li>
                    <li><a className='font-ovo' href="#Contact-me">Contact me</a></li>
                </ul>
                <div className="flex items-center gap-4">
                    <button className=''><Image
                        src={moonIcon}
                        alt='moon icon'
                        className='w-8 h-8 hidden lg:block mr-5 rounded-full p-1 hover:bg-gray-200 transition duration-500 cursor-pointer'
                    /></button>
                    <a href="#Contact" className=" hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo  hover:bg-gray-200 transition duration-500">
                        Contact
                        <Image src={arrowIcon} alt="İletişim ikonu" className="w-3" />
                    </a>
                    <button className='block md:hidden ml-3' onClick={openMenu}><Image
                        src={menu_black}
                        alt='menu black'
                        className='w-6 cursor-pointer pb-10'
                    /></button>
                </div>

                {/* ----------------Mobile Menu----------------- */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 
                bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>


                    <div className='absolute top-6 right-6' onClick={closeMenu}>
                        <Image src={close_black}
                            alt='close black'
                            className='w-5 cursor-pointer'
                        />
                    </div>
                    <li><a className='font-ovo' onClick={closeMenu} href="#Top">Home</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#About-me">About me</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#Services">Services</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#Work">My work</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#Contact-me">Contact me</a></li>
                </ul>
            </nav>
        </>
    );
};
export default Navbar;
