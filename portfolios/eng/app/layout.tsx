import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { socialLinks } from "@/data/social";
import { hero } from "@/data/hero";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${hero.name} — ${hero.title}`,
  description: hero.description.join(" "),
  openGraph: {
    title: `${hero.name} — ${hero.title}`,
    description: hero.description.join(" "),
    url: socialLinks.site,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body className="bg-bg text-text antialiased">
        <div className="relative z-10 max-w-[1400px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
