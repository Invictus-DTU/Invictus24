'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { useSearchParams } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] })
import SessionProvider from "./Components/SessionProvider";

export default function RootLayout({ children }) {
  const searchParams = useSearchParams()
  
  const search = searchParams.get('status')
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar status={search}/>
          {children}
          {search==="admin"?<></>:<Footer />}
        </SessionProvider>
      </body>
    </html>
  )
}
