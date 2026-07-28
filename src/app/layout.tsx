import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "ज्ञानदा विद्या मंदिर, उल्हासनगर-४ | Dnyanada Vidya Mandir, Ulhasnagar-4",
  description:
    "Dnyanada Vidya Mandir, Ulhasnagar-4 — knowledge, values and quality education since 1975.",
  openGraph: {
    type: "website",
    title: "ज्ञानदा विद्या मंदिर, उल्हासनगर-४ | Dnyanada Vidya Mandir, Ulhasnagar-4",
    description:
      "Dnyanada Vidya Mandir, Ulhasnagar-4 — knowledge, values and quality education since 1975.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Karla:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
