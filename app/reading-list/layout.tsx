import Hero from "../components/Hero"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Reading List',
    description: 'My reading list',
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
        <Hero heading="Reading List" subHeading="" />
        <div className="max-w-screen-lg mx-auto px-4 my-12 markdown-format">
            {children}
        </div>
        </>
    )
  }