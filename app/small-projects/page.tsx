import { Link } from 'next-view-transitions'
import Hero from "../components/Hero";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Small Projects',
    description: 'My small projects',
}

export default function SmallProjects() {
    
    return (
            <>
            <Hero heading="Small Projects" subHeading="" />
            <div className="max-w-screen-lg mx-auto px-4 my-12">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <li>
                    <Link href="https://alpinist.jeksn.me" className="flex flex-col gap-3 p-6 my-2 transition-all duration-300 hover:border-l-[6px] rounded-sm hover:border-white hover:translate-x-1 bg-gray-600/20 h-[150px] text-sm">
                        <span className="text-lg">Alpinist</span>
                        <span className="text-sm text-white/80">A collection of Alpine.js components</span>
                    </Link>
                </li>
                <li>
                    <Link href="https://weeek.xyz/" className="flex flex-col gap-3 p-6 my-2 transition-all duration-300 hover:border-l-[6px] rounded-sm hover:border-white hover:translate-x-1 bg-gray-600/20 h-[150px] text-sm">
                        <span className="text-lg">Weeek</span>
                        <span className="text-sm text-white/80">Small site that displays the week number</span>
                    </Link>
                </li>
                </ul>
            </div>
            </>
        )
    }