import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dvmedu.co.in"),
  title: {
    default: "ज्ञानदा विद्या मंदिर, उल्हासनगर-४ | Dnyanada Vidya Mandir, Ulhasnagar-4",
    template: "%s | ज्ञानदा विद्या मंदिर",
  },
  description:
    "Dnyanada Vidya Mandir, Ulhasnagar-4 — knowledge, values and quality education since 1975. Maharashtra State Board school offering pre-primary through secondary education.",
  keywords: [
    "Dnyanada Vidya Mandir",
    "ज्ञानदा विद्या मंदिर",
    "Ulhasnagar-4",
    "school in Ulhasnagar",
    "Maharashtra State Board",
    "उल्हासनगर शाळा",
    "pre-primary school Ulhasnagar",
    "primary school Ulhasnagar",
    "secondary school Ulhasnagar",
    "Dnyanada school",
    "ज्ञानदा शाळा",
    "education Ulhasnagar",
    "विद्यालय उल्हासनगर",
  ],
  authors: [{ name: "Dnyanada Vidya Mandir" }],
  creator: "Dnyanada Vidya Mandir",
  publisher: "Dnyanada Vidya Mandir",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "ज्ञानदा विद्या मंदिर, उल्हासनगर-४ | Dnyanada Vidya Mandir, Ulhasnagar-4",
    description:
      "Dnyanada Vidya Mandir, Ulhasnagar-4 — knowledge, values and quality education since 1975.",
    url: "https://www.dvmedu.co.in",
    siteName: "Dnyanada Vidya Mandir",
    locale: "mr_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785258631/LOGO_krcdwh.png",
        width: 1200,
        height: 630,
        alt: "Dnyanada Vidya Mandir logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ज्ञानदा विद्या मंदिर, उल्हासनगर-४ | Dnyanada Vidya Mandir, Ulhasnagar-4",
    description:
      "Dnyanada Vidya Mandir, Ulhasnagar-4 — knowledge, values and quality education since 1975.",
    images: [
      "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785258631/LOGO_krcdwh.png",
    ],
  },
  icons: {
    icon: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785258631/LOGO_krcdwh.png",
    shortcut: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785258631/LOGO_krcdwh.png",
    apple: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785258631/LOGO_krcdwh.png",
    other: [
      { rel: "icon", type: "image/png", sizes: "16x16", url: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785258631/LOGO_krcdwh.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785258631/LOGO_krcdwh.png" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785258631/LOGO_krcdwh.png" },
      { rel: "android-chrome-192x192", sizes: "192x192", url: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785258631/LOGO_krcdwh.png" },
      { rel: "android-chrome-512x512", sizes: "512x512", url: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785258631/LOGO_krcdwh.png" },
    ],
  },
  verification: {
    google: "PLACEHOLDER_GOOGLE_SITE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Karla:wght@300;400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              name: "Dnyanada Vidya Mandir",
              alternateName: "ज्ञानदा विद्या मंदिर",
              url: "https://www.dvmedu.co.in",
              logo: "https://res.cloudinary.com/dwta5v9wi/image/upload/v1785258631/LOGO_krcdwh.png",
              description:
                "Dnyanada Vidya Mandir, Ulhasnagar-4 — knowledge, values and quality education since 1975.",
              telephone: "+91 92726 98531",
              email: "dnyanadavidyamandir1975@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "मनेरेगाव रोड, सेक्शन २५, कृष्ण मार्बल जवळ",
                addressLocality: "उल्हासनगर",
                addressRegion: "जिल्हा ठाणे",
                postalCode: "४२१००४",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 19.2069162,
                longitude: 73.1580918,
              },
              sameAs: ["https://www.dvmedu.co.in"],
              educationalOrganization: {
                "@type": "EducationalOrganization",
                name: "Dnyanada Vidya Mandir",
                alternateName: "ज्ञानदा विद्या मंदिर",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}