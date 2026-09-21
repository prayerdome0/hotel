import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SDL Lodge & Events | XXXX XXXX",
  description:
    "SDL Lodge & Events in XXXX XXXX — comfortable rooms & suites, conference halls, restaurant, dining hall, weddings and events. Book your stay or event with us.",
  keywords: [
    "Lodge XXXX XXXX",
    "SDL Lodge",
    "Conference centre Zambia",
    "Lodge rooms XXXX XXXX",
    "Wedding venue XXXX XXXX",
    "Restaurant XXXX XXXX",
    "Events hall Zambia",
  ],
  openGraph: {
    title: "SDL Lodge & Events",
    description:
      "Comfortable rooms, conference facilities, restaurant and event spaces in XXXX XXXX.",
    siteName: "SDL Lodge",
    type: "website",
    locale: "en_ZM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-black min-h-screen flex flex-col antialiased selection:bg-red-400 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
