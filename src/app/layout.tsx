import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pragmatic-play.example"),
  title: "Pragmatic Play — Slots, Demo Games & Free Play Online",
  description:
    "Pragmatic Play slots, live casino highlights, demo games, and free-play content optimized for mobile and desktop.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Pragmatic Play — Slots, Demo Games & Free Play Online",
    description:
      "Explore slots, live casino features, and free demo game content with a fast, SEO-friendly experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragmatic Play — Slots, Demo Games & Free Play Online",
    description:
      "Explore slots, live casino features, and free demo game content with a fast, SEO-friendly experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
