import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cloudbox99 — Enterprise Cloud Infrastructure, Simplified",
  description:
    "VPS hosting, dedicated servers, cloud storage, backup & disaster recovery, and 24/7 service, scalable cloud infrastructure with a 7-day free trial.",
  metadataBase: new URL("https://www.cloudbox99.com"),
  openGraph: {
    title: "Cloudbox99 — Enterprise Cloud Infrastructure, Simplified",
    description:
      "VPS hosting, dedicated servers, cloud storage, backup & SOC services. 24/7 support. 7-day free trial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent-violet">
        {children}
      </body>
    </html>
  );
}
