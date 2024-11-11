export default function Hero({ heading, subHeading }: { heading: string, subHeading: any }) {
    return (
    <section className="w-screen bg-gradient-to-b from-zinc-900">
        <div className="flex justify-center max-w-screen-lg px-4 py-20 mx-auto text-center text-white">
           <div className="space-y-4">
               <h1 className="text-4xl">{heading}</h1>
               <p className="text-lg">{subHeading}</p>
           </div>
        </div>
    </section>
    )
}   