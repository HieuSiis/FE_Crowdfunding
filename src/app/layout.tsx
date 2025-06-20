import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Navbar from '@/components/layout/Navbar'
import { ThemeProviders } from '@/providers/ThemeProviders'
import PersistProvider from '@/providers/PersistProvider'
import { NextAuthProvider } from '@/providers/NextAuthProvider'

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-epilogue',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={epilogue.variable} >
      <body>
        <ThemeProviders>
          <main className="flex min-h-screen flex-col md:p-10 px-6 py-4 gap-[30px] bg-whitish-300 relative overflow-hidden dark:bg-black">
            <PersistProvider>
              <NextAuthProvider>
                <Header />
                <div className='flex'>
                  <Navbar />
                  {children}
                </div>
              </NextAuthProvider>
            </PersistProvider>
          </main>
        </ThemeProviders>
      </body>
    </html>
  )
}
