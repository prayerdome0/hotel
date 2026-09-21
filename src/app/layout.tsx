import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zambezi Palms Hotel & Conference Centre | Lusaka, Zambia",
  description:
    "Zambezi Palms Hotel & Conference Centre in Lusaka, Zambia — comfortable rooms & suites, conference halls, restaurant, dining hall, weddings and events. Book your stay or event with us.",
  keywords: [
    "Hotel Lusaka",
    "Zambezi Palms Hotel",
    "Conference centre Zambia",
    "Hotel rooms Lusaka",
    "Wedding venue Lusaka",
    "Restaurant Lusaka",
    "Events hall Zambia",
  ],
  openGraph: {
    title: "Zambezi Palms Hotel & Conference Centre",
    description:
      "Comfortable rooms, conference facilities, restaurant and event spaces in Lusaka, Zambia.",
    siteName: "Zambezi Palms Hotel",
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
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-amber-400 selection:text-slate-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
