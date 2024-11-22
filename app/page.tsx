import { Metadata } from "next"
import Link from "next/link";
import ContactLink from '@/app/components/ContactLink';

export const metadata: Metadata = {
    title: 'jeksn.me',
    description: 'My home on the web',
}

export default function Home() {
  return (
    <section>
			<div className="flex flex-col items-center justify-center h-[70vh] px-4">
					<div className="flex flex-col items-start justify-center gap-6">
						<div className="flex flex-col text-base gap-y-1 md:text-xl">
						  <h1 className="my-3 text-6xl font-light">Hello! 👋</h1>
              <p>
                I&apos;m a design-minded developer in Stockholm <span className="text-2xl">🇸🇪</span>
              </p>
              <p>
                Currently working at <Link href="https://wtmg.se" target="_blank" className="underline transition-all underline-offset-4 hover:underline-offset-8">WTMG.</Link>
              </p>
					  </div>
            {/* <div className="mt-8">
              <h2 className="text-lg md:text-xl">Where to find me</h2>
              <ul className="mt-1 space-y-1 text-base">
                <ContactLink href="https://github.com/jeksn" title="GitHub" />
                <ContactLink href="https://www.linkedin.com/in/jeksn/" title="LinkedIn" />
                <ContactLink href="https://read.cv/jeksn" title="Read.cv" />
                <ContactLink href="mailto:johan@jeksn.me" title="E-mail me" />
              </ul>
            </div> */}
						</div>
				</div>
    </section>
  );
}
