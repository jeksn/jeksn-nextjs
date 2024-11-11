import { Metadata } from "next"
import Hero from "../components/Hero"
import ListItem from "../components/ListItem"

export const metadata: Metadata = {
    title: 'Uses',
    description: 'A list of tools I use',
}

const appsData = require('@/public/data/apps-services.json')
const gearData = require('@/public/data/gear.json')
const headphoneData = require('@/public/data/headphones.json')

export default function Uses() {
    return (
        <>
        <Hero heading="Uses" subHeading="A list of tools I use" />
        <div className="mt-6 max-w-screen-lg mx-auto">
            <div className="py-12">
                <ListItem data={appsData} title="Apps & Services" />            
                <ListItem data={gearData} title="Gear" />
                <ListItem data={headphoneData} title="Headphones" />
            </div>
        </div>
        </>
    )
}