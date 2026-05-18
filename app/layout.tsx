import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const baseUrl = "https://www.othmanalobayyat.online";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Othman Alobayyat — Intelligent Systems Engineering",
    template: "%s — Othman Alobayyat",
  },
  description:
    "Portfolio of Othman Alobayyat — Intelligent Systems Engineering student building real-world systems across embedded hardware, IoT, and full-stack software.",
  keywords: [
    "Othman Alobayyat",
    "Intelligent Systems Engineering",
    "embedded systems",
    "IoT",
    "portfolio",
    "software engineer",
    "React",
    "ESP32",
  ],
  authors: [{ name: "Othman Alobayyat" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Othman Alobayyat",
    title: "Othman Alobayyat — Intelligent Systems Engineering",
    description:
      "Building real-world systems across embedded hardware, IoT, and full-stack software.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Othman Alobayyat — Intelligent Systems Engineering",
    description:
      "Building real-world systems across embedded hardware, IoT, and full-stack software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
