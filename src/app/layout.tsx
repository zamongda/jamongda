import type { Metadata } from "next";
import localFont from "next/font/local";
import "@styled-system/reset.css";
import "@styled-system/globals.css";
import "swiper/css";

const godoB = localFont({
  src: "./fonts/GodoB.ttf",
  variable: "--font-godo-b",
  weight: "400",
});

const godoM = localFont({
  src: "./fonts/GodoM.ttf",
  variable: "--font-godo-m",
  weight: "400",
});

const godoL = localFont({
  src: "./fonts/godoRoundedL.woff2",
  variable: "--font-godo-l",
  weight: "400",
});

const godoR = localFont({
  src: "./fonts/godoRoundedR.woff2",
  variable: "--font-godo-r",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/styles$.css" rel="stylesheet" />
      </head>
      <body
        className={`${godoB.variable} ${godoM.variable} ${godoL.variable} ${godoR.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
