import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinuth Sri Arampath - Software Developer & Full Stack Engineer",
  description: "A showcase of Vinuth Sri Arampath's projects, skills, and experience in software development, featuring innovative solutions, clean code, and a passion for building impactful digital products.",
  keywords: [
    "Vinuth Sri Arampath",
    "Software Developer",
    "Full Stack Engineer", 
    "Web Development Portfolio", 
    "React Developer",
    "Angular Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Vinu",
    "Vinu Gaming",

  ],
  authors: [{name: "Vinuth Sri Arampath"}],
  creator: "Vinuth Sri Arampath",
  publisher: "Vinuth Sri Arampath",
  applicationName: "Vinuth Sri Arampath Portfolio",
  category: "portfolio",
  classification: "Personal Portfolio",
  viewport: 'width=device-width, initial-scale=1',
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
    url: 'https://vinuthsriarampath.com',
    siteName: 'Vinuth Sri Arampath Portfolio',
    title: 'Vinuth Sri Arampath - Software Developer & Full Stack Engineer',
    description: 'A showcase of Vinuth Sri Arampath\'s projects, skills, and experience in software development, featuring innovative solutions, clean code, and a passion for building impactful digital products.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vinuth Sri Arampath - Software Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinuth Sri Arampath - Full Stack Developer',
    description: 'A showcase of Vinuth Sri Arampath\'s projects, skills, and experience in software development, featuring innovative solutions, clean code, and a passion for building impactful digital products.',
    images: ['/og-image.jpg'],
    creator: '@vinuthsriarampath',
    site: '@vinuthsriarampath',
  },
  alternates: {
    canonical: 'https://vinuthsriarampath.com',
  },
  verification: {
    google: 'R2lxzEAjGOEQmNhdhjJ50QyvGFMmbish7UyZDTHp1DA',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'theme-color': '#10b981',
    'color-scheme': 'dark light',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Vinuth Portfolio',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileColor': '#10b981',
    'msapplication-tap-highlight': 'no',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
