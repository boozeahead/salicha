import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Logo, Graphic, Motion & Web Design | UI UX Design & many more",
  description:
    "Salicha is your go-to platform for custom graphic design, social media post, motion graphics, from logos to websites and beyond. Work with a talented designer or start a design project to bring your vision to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D2HQM8B80D"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D2HQM8B80D');
  `}
        </Script>
      </head>
      <body
        className={`${outfit.className} ${inter.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
