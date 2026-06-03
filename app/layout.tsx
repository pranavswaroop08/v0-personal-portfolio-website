import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Pranav Swaroop | CS Student & AI Builder',
  description: 'Second-year Computer Science student at PES University building AI-powered systems, automation workflows, analytics platforms, and cybersecurity solutions.',
  keywords: ['Pranav Swaroop', 'Computer Science', 'AI', 'Cybersecurity', 'Portfolio', 'Developer'],
  authors: [{ name: 'Pranav Swaroop' }],
  openGraph: {
    title: 'Pranav Swaroop | CS Student & AI Builder',
    description: 'Second-year Computer Science student building AI-powered systems and cybersecurity solutions.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
