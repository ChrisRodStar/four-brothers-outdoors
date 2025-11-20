import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fourbrothersoutdoors.com'),
  title: {
    default: "Four Brothers Outdoors | Professional Landscaping Services",
    template: "%s | Four Brothers Outdoors"
  },
  description: "Transform your outdoor space with Four Brothers Outdoors. Expert landscaping, lawn care, and outdoor design services in North Carolina.",
  keywords: ["landscaping", "lawn care", "hardscape", "outdoor design", "North Carolina", "Four Brothers Outdoors"],
  authors: [{ name: "Four Brothers Outdoors" }],
  creator: "Four Brothers Outdoors",
  publisher: "Four Brothers Outdoors",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Four Brothers Outdoors | Professional Landscaping Services",
    description: "Transform your outdoor space with Four Brothers Outdoors. Expert landscaping, lawn care, and outdoor design services.",
    url: 'https://www.fourbrothersoutdoors.com',
    siteName: 'Four Brothers Outdoors',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Four Brothers Outdoors Landscaping',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Four Brothers Outdoors | Professional Landscaping Services",
    description: "Transform your outdoor space with Four Brothers Outdoors. Expert landscaping, lawn care, and outdoor design services.",
    images: ['/opengraph.png'],
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
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    "name": "Four Brothers Outdoors",
    "image": "https://www.fourbrothersoutdoors.com/opengraph.png",
    "description": "Professional landscaping, lawn care, and outdoor design services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "North Carolina",
      "addressRegion": "NC",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.7796,
      "longitude": -78.6382
    },
    "url": "https://www.fourbrothersoutdoors.com",
    "telephone": "+15551234567",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
