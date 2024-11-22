import { Link } from 'next-view-transitions'

export default function BackToBlog() {
    return (
    <div className="max-w-screen-md px-4 mx-auto mt-12">
        <Link href="/blog" className="flex px-4 py-3 mt-4 duration-300 ease-in-out rounded gap-x-2 w-fit bg-gray-600/20 hover:bg-gray-600/40 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
            Go back
        </Link>
    </div>
    )
}