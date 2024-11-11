import { Metadata } from "next"
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'jeksn.me',
    description: 'My home on the web',
}

export default function Home() {
  return (
    <section className="min-h-[60vh]">
			<div className="flex flex-col items-center justify-start mt-[20vh] px-4">
				<div>
					<div className="flex flex-col items-start justify-center gap-6 md:flex-row">
						<div className="flex items-start justify-center">
              <h1 className="hidden">jeksn.me</h1>
							<Image 
                src="/blue.png" 
                className="transition-all duration-200 rounded-full size-24 hover:scale-110" 
                width={200} 
                height={200} 
                alt="blue profile picture" 
                loading="lazy"/>
						</div>
						<div className="flex flex-col">
							<p className="text-base md:text-2xl">
                I&apos;m a design-minded developer working at 
							  <Link
                  href="https://wtmg.se"
                  className="underline transition-all underline-offset-4 hover:underline-offset-8 ml-2">
                    WTMG.
							  </Link>
							  <br />
							  This is my small home on the web.
							  <br />
							  DonI&apos;mt hesitate to get in touch.
							</p>
							<div className="mt-16">
						   <h2 className="text-lg md:text-xl">Where to find me:</h2>
						   <ul className="mt-1 space-y-1 text-base">
							  <li>
                  <Link
                    href="https://github.com/jeksn"
                    target="_blank"
                    rel="noreferrer"
                    className="underline transition-all underline-offset-2 hover:underline-offset-4">
                    Github
                  </Link>
							  </li>
							  <li>
                  <Link
                    href="https://www.linkedin.com/in/jeksn/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline transition-all underline-offset-2 hover:underline-offset-4">
                    LinkedIn
                  </Link>
							  </li>
							  <li>
                  <Link
                    href="https://read.cv/jeksn"
                    target="_blank"
                    rel="noreferrer"
                    className="underline transition-all underline-offset-2 hover:underline-offset-4">
                    Read.cv
                  </Link>
							  </li>
							  <li>
                  <Link
                    href="mailto:johan@jeksn.me"
                    target="_blank"
                    rel="noreferrer"
                    className="underline transition-all underline-offset-2 hover:underline-offset-4">
                    E-mail me
                  </Link>
							  </li>
						   </ul>
						</div>
						</div>
					</div>
				</div>
			 </div>
    </section>
  );
}
