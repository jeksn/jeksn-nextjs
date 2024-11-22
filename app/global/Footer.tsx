import { Link } from 'next-view-transitions'
import Image from 'next/image'

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
    <div className="w-full mt-12 pt-12 pb-6 bg-gray-600/20 px-8">
        <div className="max-w-screen-lg py-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-32 gap-y-12">
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
                <div className="flex flex-col space-y-2">
                    <h2 className="text-lg">Links</h2>
                    <ul className="flex flex-col space-y-2">
                        <Link href="/blog" className="transition-all text-sm hover:underline hover:underline-offset-4">Blog</Link>
                        <Link href="/uses" className="transition-all text-sm hover:underline hover:underline-offset-4">Uses</Link>
                        <Link href="/reading-list" className="transition-all text-sm hover:underline hover:underline-offset-4">Reading List</Link>
                        {/* <Link href="/now" className="transition-all text-sm hover:underline hover:underline-offset-4">Now</Link> */}
                        <Link href="https://github.com/jeksn/jeksn-nextjs" className="transition-all text-sm hover:underline hover:underline-offset-4">Repo</Link>
                    </ul>
                </div>
                <div className="flex flex-col space-y-2">
                    <h2 className="text-lg">Where to find me</h2>
                    <ul className="flex flex-col space-y-2">
                        <Link href="https://github.com/jeksn" className="transition-all text-sm hover:underline hover:underline-offset-4">GitHub</Link>
                        <Link href="https://bsky.app/profile/jeksn.bsky.social" className="transition-all text-sm hover:underline hover:underline-offset-4">Bluesky</Link>
                        <Link href="https://www.linkedin.com/in/jeksn/" className="transition-all text-sm hover:underline hover:underline-offset-4">LinkedIn</Link>
                        <Link href="https://read.cv/jeksn" className="transition-all text-sm hover:underline hover:underline-offset-4">Read.cv</Link>
                        <Link href="mailto:johan@jeksn.me" className="transition-all text-sm hover:underline hover:underline-offset-4">E-mail me</Link>
                    </ul>
                </div>
            </div>
            <div className="flex justify-start md:justify-center mt-24">
                <span className="text-sm text-white/80">Copyright © { currentYear } Johan Eriksson / jeksn</span>
            </div>
        </div>
    </div>
    )
}
