import { Inter } from 'next/font/google'
import './globals.css'
import SideNav from './components/side-nav-wrapper';
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
      <div className="min-h-screen">
         <div className="flex">
            <SideNav session={session} />
            <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
               <main className='p-5'>
                  {children}
               </main>
            </div>
         </div>
      </div>
      </body>
    </html>
  )
}

