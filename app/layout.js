import Nav from './Components/Nav'
import './globals.css'
import {  Work_Sans } from 'next/font/google'




const WorkSans = Work_Sans({ subsets: ['latin'] })


export const metadata = {
  title: 'G3 Architects',
  description: 'We build the future',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={WorkSans.className}>
        
        <Nav/>
        
        {children}
        </body>
    </html>
  )
}
