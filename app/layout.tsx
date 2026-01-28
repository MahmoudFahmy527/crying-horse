import type { Metadata } from "next";
import { Sigmar, Paytone_One } from "next/font/google";
import "./globals.css";

const sigmar = Sigmar({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sigmar",
});

const paytone = Paytone_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-paytone",
});

export const metadata: Metadata = {
  title: "Crying Horse Meme Token",
  description: "Why are you holding? Just cry with us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sigmar.variable} ${paytone.variable} antialiased bg-yellow-50 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
