import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'Constanza Esquivel | Software Developer & Digital Systems',
  description: 'Software Developer focused on backend systems, web platforms, data-driven products, and digital operations for modern businesses. Based near Geneva, available for remote work.',
  keywords: ['Software Developer', 'Backend Engineer', 'Full-Stack Developer', 'Digital Systems', 'Geneva', 'Remote Work', 'Web Development'],
  authors: [{ name: 'Constanza Esquivel' }],
  openGraph: {
    title: 'Constanza Esquivel | Software Developer & Digital Systems',
    description: 'Building digital systems and online experiences. Software Developer focused on backend systems, web platforms, and digital operations.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
