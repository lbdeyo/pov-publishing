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
    <html lang="en" className={zillaSlabHighlight.variable}>
      <body className={cormorantGaramond.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
