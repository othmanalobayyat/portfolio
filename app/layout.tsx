import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Othman Alobayyat — Intelligent Systems Engineering",
  description:
    "Personal portfolio of Othman Alobayyat — Intelligent Systems Engineering student building intelligent real-world systems using software, embedded systems, and modern technologies.",
  keywords: [
    "Othman Alobayyat",
    "Intelligent Systems Engineering",
    "embedded systems",
    "IoT",
    "portfolio",
    "software engineer",
  ],
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
