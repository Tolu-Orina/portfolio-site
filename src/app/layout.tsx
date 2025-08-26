import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tolulope Orina - Solutions Architect & Data Scientist",
  description: "AWS Golden Jacket holder and Solutions Architect with expertise in cloud architecture, machine learning, and full-stack development. Currently working as a pre-sales solutions engineer.",
  keywords: [
    "Tolulope Orina",
    "Solutions Architect",
    "Data Scientist",
    "AWS",
    "Cloud Architecture",
    "Machine Learning",
    "DevOps",
    "Data Engineering",
    "Pre-sales Solutions Engineer",
    "Technical Architect"
  ],
  authors: [{ name: "Tolulope Orina" }],
  creator: "Tolulope Orina",
  openGraph: {
    title: "Tolulope Orina - Solutions Architect & Data Scientist",
    description: "AWS Golden Jacket holder with expertise in cloud architecture, machine learning, and full-stack development. Currently working as a pre-sales solutions engineer.",
    type: "website",
    locale: "en_US",
    url: "https://trex01.conquerorfoundation.com", // Replace with your actual domain
    siteName: "Tolulope Orina Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image to public folder
        width: 1200,
        height: 630,
        alt: "Tolulope Orina - Solutions Architect & Data Scientist",
        type: "image/jpeg",
      },
      {
        url: "/og-image.png", // Alternative PNG version
        width: 1200,
        height: 630,
        alt: "Tolulope Orina - Solutions Architect & Data Scientist",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolulope Orina - Solutions Architect & Data Scientist",
    description: "AWS Golden Jacket holder with expertise in cloud architecture, machine learning, and full-stack development.",
    images: ["/og-image.jpg"], // Same image for Twitter
    creator: "@trexdevops", // Replace with your Twitter handle
    site: "@trexdevops", // Replace with your Twitter handle
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
  // verification: {
  //   google: "your-google-verification-code", // Replace with your Google verification code
  //   // yandex: "your-yandex-verification-code",
  //   // yahoo: "your-yahoo-verification-code",
  // },
  alternates: {
    canonical: "https://your-domain.com", // Replace with your actual domain
  },
  other: {
    // WhatsApp specific metadata
    "whatsapp-meta": "Tolulope Orina - AWS Golden Jacket holder and Solutions Architect with expertise in cloud architecture, machine learning, and full-stack development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300,400,500,600,700,800,900&family=Playfair+Display:wght@400,500,600,700,800,900&family=Amarante:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Faculty+Glyphic&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
