import type { Metadata } from "next";
import "./globals.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://pragmaticplay-demo.uk/#organization",
  name: "Pragmatic Play",
  url: "https://pragmaticplay-demo.uk/",
  logo: {
    "@type": "ImageObject",
    url: "https://pragmaticplay-demo.uk/logo.png",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@pragmaticplay-demo.uk",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://pragmaticplay-demo.uk/#website",
  url: "https://pragmaticplay-demo.uk/",
  name: "Pragmatic Play",
  description: "Official Pragmatic Play website with detailed information on games and features",
  inLanguage: "en",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pragmatic-play.example"),
  alternates: {
    canonical: "https://pragmaticplay-demo.uk/",
  },
  title: "Pragmatic Play Slots — Play Free Demo Games & Online Slots",
  description:
    "Access best Pragmatic Play slots online. Play free demo versions of Gates of Olympus and Sweet Bonanza. Explore high RTP games, bonus features, and live casinos.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Pragmatic Play Slots — Play Free Demo Games & Online Slots",
    description:
      "Access best Pragmatic Play slots online. Play free demo versions of Gates of Olympus and Sweet Bonanza. Explore high RTP games, bonus features, and live casinos.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragmatic Play Slots — Play Free Demo Games & Online Slots",
    description:
      "Access best Pragmatic Play slots online. Play free demo versions of Gates of Olympus and Sweet Bonanza. Explore high RTP games, bonus features, and live casinos.",
  },
  verification: {
    google: "wnRuzVxgwO44vmXLlWrCZGDBIkQPSEIDQTr1eRp_w64",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
