import Header from '@/components/layout/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Next Project with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <span>Sou o Header</span>
        <Header/>
        {children}</body>
    </html>
  )
}

