'use client';
import React from 'react';
import Image from 'next/image';
import logo from '@/public/assets/logo (2).png';
import arrowIcon from '@/public/assets/arrow-icon.png';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4">
            <a href="#">
                <Image
                    src={logo}
                    alt="Logo"
                    width={112}
                    height={32}
                    className="cursor-pointer mr-14"
                />
            </a>
            <ul className="flex gap-6">
                <li><a href="#top">Ana Sayfa</a></li>
                <li><a href="#aboutme">Hakkımda</a></li>
                <li><a href="#services">Servisler</a></li>
                <li><a href="#mywork">İşlerim</a></li>
            </ul>
            <div className="flex items-center gap-1">
                <a href="#contact" className="flex items-center">
                    İletişim
                    <Image src={arrowIcon} alt="İletişim ikonu" width={12} height={12} className="ml-1" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
