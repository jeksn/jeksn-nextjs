'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DropdownItem from './DropdownItem';

export default function Header() {
    // toggle the dropdown menu
    const [toggle, setToggle] = useState(false);

    // close the dropdown menu when the page changes
    const pathname = usePathname();
    
    useEffect(() => {
        setToggle(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 w-full">
            <div className="flex items-center justify-between max-w-screen-lg px-4 py-4 mx-auto">
                <div>
                <Link href="/" className="px-4 py-2 text-sm text-black duration-300 ease-in-out bg-white rounded-sm hover:bg-[#151515] hover:text-white">
                    jeksn.me
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
                    <DropdownItem href="/uses" title="Uses" />
                    <DropdownItem href="/reading-list" title="Reading list" />
                    <DropdownItem href="/now" title="Now" />
                    <DropdownItem href="/small-projects" title="Small projects" />
                    <DropdownItem href="https://github.com/jeksn/jeksn.me" title="Repo" />
                </ul>
            </div>
        </header>
     );
}

