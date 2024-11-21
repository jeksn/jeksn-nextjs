import Link from "next/link";

export default function NavItem({ href, title }: { href: string, title: string }) {
    return (
        <li className="py-2">
             <Link href={href} className="text-sm transition-all ease-in-out hover:-translate-y-[2px]">
                {title}
            </Link>
        </li>
    )
}