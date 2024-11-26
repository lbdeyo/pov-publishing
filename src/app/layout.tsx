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
  metadataBase: new URL("https://povpublishing.com"), // Replace with your actual domain
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
