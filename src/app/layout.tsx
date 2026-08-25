import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ForSaleBanner from "@/components/ForSaleBanner";
import { HOTEL_INFO } from "@/data/hotelData";

export const metadata: Metadata = {
  title: "SWDL | Ultra-Luxury 5-Star Resort & Prime Hospitality Asset For Sale",
  description:
    "SWDL is an iconic 5-star coastal resort & residential enclave on 5.8 freehold acres, now available for private acquisition. Copyrighted by Seedwel Investment Limited. Contact: xxxxx, Email: xxxxx, Address: abc.",
  keywords: [
    "SWDL",
    "Seedwel Investment Limited",
    "Hotel For Sale",
    "Hospitality Commercial Real Estate",
    "Luxury Resort Acquisition",
    "5-Star Hotel Freehold",
    "Deal Room",
    "Luxury Penthouse Suites",
  ],
  authors: [{ name: "Seedwel Investment Limited" }],
  creator: "Seedwel Investment Limited",
  publisher: "Seedwel Investment Limited",
  openGraph: {
    title: "SWDL | 5-Star Luxury Resort & Asset For Sale",
    description:
      "240 Keys, 5.8 Freehold Acres, $16.4M EBITDA. Prime commercial hospitality asset available for acquisition by Seedwel Investment Limited.",
    siteName: "SWDL Hotel & Residences",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-amber-400 selection:text-slate-950">
        <ForSaleBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
