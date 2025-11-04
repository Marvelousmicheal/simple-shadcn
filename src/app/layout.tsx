import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadcn Component Playground",
  description: "An interactive playground to discover and experiment with Shadcn UI components. Select your project type and purpose to see a curated list of components, then view live demos and get the installation code.",
  keywords: ["Shadcn", "UI Components", "React", "Next.js", "Tailwind CSS", "Component Playground", "Web Development"],
  authors: [{ name: "Shadcn" }],
  openGraph: {
    title: "Shadcn Component Playground",
    description: "Discover and experiment with Shadcn UI components in an interactive playground.",
    url: "https://simple-shadcn.vercel.app/",
    siteName: "Shadcn Playground",
    images: [
      {
        url: "/og-image.png", // It's good practice to have an OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadcn Component Playground",
    description: "An interactive playground for Shadcn UI components.",
    creator: "@shadcn", // Replace with your Twitter handle if you have one
    images: ["/og-image.png"], // Same OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
