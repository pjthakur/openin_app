import AuthProvider from '@/components/sessionprovider/AuthProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import  { useRouter } from 'next/navigation'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Openin',
  description: 'Openin app project deployment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <AuthProvider>
      <body className={inter.className}>
          <div className='container'>
          {children}
          </div>
        </body>
        </AuthProvider>
    </html>
  )
}
