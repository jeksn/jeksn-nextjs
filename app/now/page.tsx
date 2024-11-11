import { Metadata } from "next"
import Hero from "@/app/components/Hero"
import ListItem from "@/app/components/ListItem"
import nowData from '@/public/data/now.json'

export const metadata: Metadata = {
    title: 'Now',
    description: 'This is my /now page',
}

export default function Now() {
    return (
        <>
        <Hero heading="Now" subHeading={<>
                This is my <a href="https://sive.rs/now2" className="underline">/now </a>page.
                <br />
                These are some of the things I&apos;m focusing on right now.
            </>} />
        <div className="mt-6 max-w-screen-lg mx-auto my-20 min-h-[40vh]">
            <ListItem data={nowData} title="" />
        </div>
        </>   
    )
}