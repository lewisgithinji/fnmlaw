import './globals.css'
import './browser-support.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'FNM Law Advocates LLP - Professional Legal Services in Nairobi',
    template: '%s | FNM Law Advocates LLP'
  },
  description: 'Professional legal services in Nairobi, Kenya. Specialized in real estate, intellectual property, corporate law, litigation, debt recovery, and alternative dispute resolution. Commissioners for Oath & Notaries Public.',
  keywords: [
    'law firm Nairobi',
    'legal services Kenya',
    'real estate lawyers Nairobi',
    'intellectual property law Kenya',
    'corporate law Nairobi',
    'litigation lawyers Kenya',
    'debt recovery Nairobi',
    'commissioners for oath Kenya',
    'notaries public Nairobi',
    'FNM Law Advocates',
    'legal consultancy Kenya'
  ],
  authors: [{ name: 'FNM Law Advocates LLP' }],
  creator: 'FNM Law Advocates LLP',
  publisher: 'FNM Law Advocates LLP',
  metadataBase: new URL('https://fnmlawadvocates.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FNM Law Advocates LLP - Professional Legal Services in Nairobi',
    description: 'Professional legal services in Nairobi, Kenya. Specialized in real estate, intellectual property, corporate law, litigation, debt recovery, and alternative dispute resolution.',
    url: 'https://fnmlawadvocates.com',
    siteName: 'FNM Law Advocates LLP',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FNM Law Advocates LLP - Professional Legal Services',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FNM Law Advocates LLP - Professional Legal Services in Nairobi',
    description: 'Professional legal services in Nairobi, Kenya. Specialized in real estate, intellectual property, corporate law, litigation, debt recovery, and alternative dispute resolution.',
    images: ['/images/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "FNM Law Advocates LLP",
    "description": "Professional legal services in Nairobi, Kenya. Specialized in real estate, intellectual property, corporate law, litigation, debt recovery, and alternative dispute resolution.",
    "url": "https://fnmlawadvocates.com",
    "logo": "https://fnmlawadvocates.com/images/logo.png",
    "image": "https://fnmlawadvocates.com/images/og-image.jpg",
    "telephone": ["+254728657560", "+254713286796"],
    "email": "info@fnmlawadvocates.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Greyville Hub, 3rd Floor, Wing B Suite 8, Off Eastern Bypass",
      "addressLocality": "Ruai",
      "addressRegion": "Nairobi",
      "addressCountry": "Kenya"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.259438,
      "longitude": 36.9839557
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-14:00"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    },
    "serviceType": [
      "Real Estate & Conveyancing",
      "Intellectual Property Law",
      "Corporate & Commercial Law",
      "Litigation",
      "Debt Recovery",
      "Alternative Dispute Resolution",
      "Commissioners for Oath",
      "Notaries Public"
    ],
    "foundingDate": "2020",
    "sameAs": [
      "https://www.google.com/maps/place/GREYVILLE+HUB/@-1.259438,36.9839557,17z"
    ]
  }

  return (
    <html lang="en-KE" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}