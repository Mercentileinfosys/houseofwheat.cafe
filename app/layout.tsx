import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House of Wheat Café | Cheras' Premium Café",
  description: "Cheras' favorite destination for fresh bakes, artisan coffee, and warm memories. Visit us at Menara Mutiara Central, Cheras, Kuala Lumpur.",
  keywords: "café, coffee, Cheras, Kuala Lumpur, bakery, pastries, breakfast, lunch, desserts",
  openGraph: {
    title: "House of Wheat Café | Cheras' Premium Café",
    description: "Cheras' favorite destination for fresh bakes, artisan coffee, and warm memories.",
    type: "website",
    locale: "en_MY",
    siteName: "House of Wheat Café",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
