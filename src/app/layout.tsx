import { SendEmailFunctionality } from '@/utils/sendEmail'
import './globals.css'
import "bootstrap-icons/font/bootstrap-icons.css"


export const metadata = {
  title: 'My Portfolio',
  description: 'My Portfolio that includes all my experience and projects',
  openGraph  : {
    images : '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body >
        <SendEmailFunctionality>
        <div className='appContainer' >
        {children}</div>
        </SendEmailFunctionality>
        </body>
    </html>
  )
}
