import Link from "next/link";

export default function ContactLink({ href, title }: { href: string, title: string }) {
    return (
        <li>
            <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            className="underline transition-all underline-offset-2 hover:underline-offset-4">
            {title}
            </Link>
        </li>
    )
}