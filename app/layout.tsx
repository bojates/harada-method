import { Inter } from 'next/font/google'
import './globals.css'

import UserInfo from './components/user-info';
import SideNav from './components/side-nav';
import { auth } from "@/auth"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Harada Method',
  description: 'Set your qualities and goals.',
}

export default async function RootLayout({ 
  children,
 }: { 
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body className='bg-gray-100'>
          <SideNav session={session} />
          <main className="mx-auto max-w-5xl flex gap-p">
          <UserInfo session={session} />
          {children}
          </main>
        </body>
    </html>
  )
}
