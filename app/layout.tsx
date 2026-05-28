import type { Metadata, Viewport } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: {
    default: "Pixory Flow | Decentralize Everything",
    template: "%s | Pixory Flow",
  },
  description: "A powerful Web3 infrastructure that allows you to create, trade, and manage digital assets with full transparency and security.",
  keywords: ["Web3", "Blockchain", "Crypto", "Digital Assets", "Decentralization"],
  authors: [{ name: "Gideon Abe" }],
  creator: "Gideon Abe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixoryflow.vercel.app",
    title: "Pixory Flow | Decentralize Everything",
    description: "Build, scale, and innovate with blockchain technology.",
    siteName: "Pixory Flow",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Pixory Flow Hero Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixory Flow | Decentralize Everything",
    description: "Build, scale, and innovate with blockchain technology.",
    images: ["/og-image.webp"],
    creator: "@gideon_abe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}