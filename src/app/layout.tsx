import {Zilla_Slab_Highlight, Cormorant_Garamond} from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";
import type {Metadata} from "next";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const zillaSlabHighlight = Zilla_Slab_Highlight({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-zilla",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pov-publishing.com"),
  title: {
    default: "Persistence of Vision Publishing",
    template: "%s | POV Publishing",
  },
  description:
    "Great conversations are one of life's deepest pleasures. At Persistence of Vision Publishing, our mission is to inspire more of these meaningful exchanges by publishing daring and innovative work across media.",
  openGraph: {
    type: "website",
    url: "https://pov-publishing.com",
    title: "Persistence of Vision Publishing",
    description:
      "Great conversations are one of life's deepest pleasures. At Persistence of Vision Publishing, our mission is to inspire more of these meaningful exchanges by publishing daring and innovative work across media.",
    images: [
      {
        url: "/img/pov-og.jpg",
        width: 1200,
        height: 630,
        alt: "Welcome to Persistence of Vision Publishing",
      },
    ],
    siteName: "POV Publishing",
  },
  other: {
    "fb:app_id": "123456789",
  },
  twitter: {
    card: "summary_large_image",
    title: "Persistence of Vision Publishing",
    description:
      "Great conversations are one of life's deepest pleasures. At Persistence of Vision Publishing, our mission is to inspire more of these meaningful exchanges by publishing daring and innovative work across media.",
    images: ["/img/pov-og.jpg"],
  },
  icons: {
    icon: [
      {url: "/favicon.ico"},
      {url: "/favicon-16x16.png", sizes: "16x16", type: "image/png"},
      {url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"},
    ],
    apple: [{url: "/apple-touch-icon.png"}],
    other: [
      {rel: "android-chrome-192x192", url: "/android-chrome-192x192.png"},
      {rel: "android-chrome-512x512", url: "/android-chrome-512x512.png"},
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={zillaSlabHighlight.variable} data-theme="light">
      <body
        className={`${cormorantGaramond.className} min-h-screen w-screen overflow-x-hidden`}>
        <div className="flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-grow w-full pt-24 pb-16 transition-[padding] duration-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
