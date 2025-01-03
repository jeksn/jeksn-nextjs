import type { Metadata } from "next";
import "@/app/global/globals.css";
import { Inter } from 'next/font/google'
import Header from "@/app/global/Header";
import Footer from "@/app/global/Footer";
import { ViewTransitions } from 'next-view-transitions'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "jeksn.me",
  description: "jeksn.me - my home on the web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ViewTransitions>
    <html lang="en" className={inter.className}>
      <body className="bg-black text-white">
          <Header />
          <main className="min-h-[70vh]">
            {children}
          </main>
          <Footer />
        </body>
    </html>
    </ViewTransitions>
  )
}