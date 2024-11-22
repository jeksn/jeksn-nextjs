import Hero from "../components/Hero";
import BlogPostItem from "../components/BlogPostItem";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Blog',
    description: 'My Blog',
}

export default function Blog() {
    
    return (
            <>
            <Hero heading="Blog" subHeading="" />
            <div className="max-w-screen-lg mx-auto px-4 my-12">
                <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4">
                    <BlogPostItem href="/blog/on-music-streaming" title="On Music Streaming" date="2024-11-15" />
                    <BlogPostItem href="/blog/taking-notes" title="Taking Notes" date="2024-10-07" />
                    <BlogPostItem href="/blog/never-satisfied" title="Never being satisfied (with software)" date="2024-09-25" />
                    <BlogPostItem href="/blog/personal-website" title="Why I keep a personal website" date="2024-01-01" />
                </ul>
            </div>
            </>
        )
    }