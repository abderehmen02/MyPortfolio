import { sendEmail} from '@/utils/sendEmail'
import './globals.css'
import "bootstrap-icons/font/bootstrap-icons.css"


export const metadata = {
  title: 'My Portfolio',
  description: 'My Portfolio that includes all my experience and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  sendEmail( "Visiting Portfolio" , {durration : 0})
  return (
    <html lang="en">
      <head></head>
      <body ><div className='appContainer' >{children}</div></body>
    </html>
  )
}
