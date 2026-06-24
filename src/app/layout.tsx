import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from 'next';
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist( {
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
} );

const geistMono = Geist_Mono( {
  variable: "--font-geist-mono",
  subsets: [ "latin" ],
} );

export const metadata: Metadata = {
  title: 'DeepKit',
  description: 'Lightweight developer utilities with no backend, no tracking, and no nonsense.',
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
    ],
  },

  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en" className={ `${geistSans.variable} ${geistMono.variable} h-full antialiased` }
      suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen flex flex-col" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <div className="flex-1 pt-14">{ children }</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
