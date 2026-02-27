
import './globals.css'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // sesuaikan kebutuhan
  display: 'swap',
  preload: false
})

export const metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body
        className="
          min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50
          text-slate-900
        "
      >
        {children}
      </body>
    </html>
  )
}