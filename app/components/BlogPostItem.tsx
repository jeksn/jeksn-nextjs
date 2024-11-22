import { Link } from 'next-view-transitions'

interface BlogPostItemProps {
    href: string
    title: string
    date: string
}

export default function BlogPostItem({ href, title, date }: BlogPostItemProps) {
    return (
        <li>
            <Link href={href} className="flex flex-col gap-3 p-6 my-2 transition-all duration-300 hover:border-l-[6px] rounded-sm hover:border-white hover:translate-x-1 bg-gray-600/20 h-[150px] text-sm">
                <span className="text-lg">{title}</span>
                <span className="text-sm text-white/80">{date}</span>
            </Link>
        </li>
    )
}