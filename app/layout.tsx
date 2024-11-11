import type { Metadata } from "next";
import "@/app/global/globals.css";
import { Inter } from 'next/font/google'
import Header from "@/app/global/Header";
import Footer from "@/app/global/Footer";

// If loading a variable font, you don't need to specify the font weight
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
    <html lang="en" className={inter.className}>
      <body className="bg-black text-white">
        <main>
          <Header />
          {children}
          <Footer />
        </main>
        </body>
    </html>
  )
}