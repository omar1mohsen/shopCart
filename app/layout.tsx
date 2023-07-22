import { AuthContextProvider } from './context/AuthContext'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['100','300','500','400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
 })

export const metadata = {
  title: 'Shop Cart',
  description: 'E-commerce by create next app',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={roboto.className}>
      <AuthContextProvider>
        {children}
        </AuthContextProvider>
        </body>
    </html>
  )
}
