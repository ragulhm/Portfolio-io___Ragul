import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.title} Portfolio`,
  description: `Portfolio of ${siteConfig.name}, an ${siteConfig.title} specializing in React, Express.js, MongoDB, and AI integration. View projects, skills, and get in touch.`,
  keywords: [
    "MERN Stack Developer",
    "AI Developer",
    "React",
    "Express.js",
    "MongoDB",
    "Full Stack Developer",
    "Web Development",
    "AI Integration",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.title} Portfolio`,
    description: `Explore the portfolio of ${siteConfig.name}, featuring innovative AI and web development projects using MERN stack technologies.`,
    type: "website",
    url: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteConfig.gaId}');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
