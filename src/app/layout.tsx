import {Zilla_Slab_Highlight, Cormorant_Garamond} from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";

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

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={zillaSlabHighlight.variable} data-theme="light">
      <body
        className={`${cormorantGaramond.className} min-h-screen w-screen overflow-x-hidden`}>
        <div className="flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-grow w-full pt-24">{children}</main>
        </div>
      </body>
    </html>
  );
}
