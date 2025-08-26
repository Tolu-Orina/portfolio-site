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
    description: "AWS Golden Jacket holder with expertise in cloud architecture, machine learning, and full-stack development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolulope Orina - Solutions Architect & Data Scientist",
    description: "AWS Golden Jacket holder with expertise in cloud architecture, machine learning, and full-stack development.",
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
