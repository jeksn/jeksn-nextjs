'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NavItem from '@/app/components/NavItem';


export default function Header() {
    // toggle the dropdown menu
    const [toggle, setToggle] = useState(false);

    // close the dropdown menu when the page changes
    const pathname = usePathname();
    
    useEffect(() => {
        setToggle(false);
    }, [pathname]);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setToggle(false);
            }
        };
        document.addEventListener('keydown', handleEsc);

        return () => document.removeEventListener('keydown', handleEsc);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (toggle && !(event.target instanceof Element && event.target.closest('.dropdown'))) {
                setToggle(false);
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, [toggle]);

    return (
        <header className="sticky top-0 w-full">
            <div className="flex items-center justify-between max-w-screen-lg px-8 py-4 mx-auto">
                <div>
                <Link href="/" className="duration-300 ease-in-out">
                    <Image 
                    src="/blue.png" 
                    className="transition-all duration-200 rounded-full size-10 hover:scale-110" 
                    width={80} 
                    height={80} 
                    alt="blue profile picture" 
                    loading="lazy"/>
                </Link>
                </div>
                <div className="flex items-center justify-center">
                <button onClick={() => setToggle(!toggle)} className="flex items-center justify-center size-12">
                    {toggle ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                    )}
                </button>
                </div>
            </div>
            <div className={`absolute ${toggle ? 'block' : 'hidden'} px-8 w-full left-0 top-[4rem] dropdown`}>
                <ul className="max-w-screen-lg px-4 pt-4 pb-8 mx-auto text-white">
                    <NavItem href="/uses" title="Uses" />
                    <NavItem href="/reading-list" title="Reading List" />
                    <NavItem href="/small-projects" title="Small Projects" />
                    <NavItem href="https://github.com/jeksn/jeksn-nextjs" title="Repo" />
                    {/* <NavItem href="/blog" title="Blog" /> */}
                    {/* <NavItem href="/now" title="Now" /> */}
                </ul>
            </div>
        </header>
     );
}

