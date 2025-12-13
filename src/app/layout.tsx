import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://kuwaitvisachecker.com'),
  title: {
    default: 'Kuwait Visa Validity Checker | Check Visa Status Online | تحقق من صلاحية التأشيرة',
    template: '%s | Kuwait Visa Checker'
  },
  description: 'Free Kuwait visa validity checker tool. Check your Kuwait visa status, expiry date, and validity online. Complete guide for Kuwait work visa, visit visa, and residence permit. تحقق من صلاحية تأشيرة الكويت',
  keywords: [
    'Kuwait visa check',
    'Kuwait visa validity',
    'Kuwait visa status',
    'Kuwait visa expiry',
    'check Kuwait visa online',
    'MOI Kuwait visa',
    'Kuwait work visa',
    'Kuwait visit visa',
    'Kuwait residence permit',
    'Kuwait visa inquiry',
    'تأشيرة الكويت',
    'صلاحية التأشيرة',
    'فحص التأشيرة الكويت',
    'وزارة الداخلية الكويت',
    'إقامة الكويت',
    'Kuwait e-visa',
    'Kuwait visa renewal',
    'Kuwait visa fees',
    'Kuwait visa requirements',
    'Kuwait immigration'
  ],
  authors: [{ name: 'Kuwait Visa Checker Team' }],
  creator: 'Kuwait Visa Checker',
  publisher: 'Kuwait Visa Checker',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_KW',
    url: 'https://kuwaitvisachecker.com',
    siteName: 'Kuwait Visa Validity Checker',
    title: 'Kuwait Visa Validity Checker | Check Visa Status Online',
    description: 'Free tool to check Kuwait visa validity, status, and expiry date. Complete guide for all Kuwait visa types.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kuwait Visa Validity Checker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kuwait Visa Validity Checker | Check Visa Status Online',
    description: 'Free tool to check Kuwait visa validity, status, and expiry date online.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://kuwaitvisachecker.com',
    languages: {
      'en-US': 'https://kuwaitvisachecker.com',
      'ar-KW': 'https://kuwaitvisachecker.com/ar',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Google AdSense - Replace with your actual AdSense code */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Kuwait Visa Validity Checker",
              "description": "Free online tool to check Kuwait visa validity, status, and expiry date",
              "url": "https://kuwaitvisachecker.com",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "Kuwait Visa Checker"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kuwait Visa Checker",
              "url": "https://kuwaitvisachecker.com",
              "logo": "https://kuwaitvisachecker.com/logo.png",
              "sameAs": []
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
