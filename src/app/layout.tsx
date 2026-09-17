import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Volar sin prisa — 10 aviones antiguos que hicieron historia",
  description:
    "Descubre 10 modelos clásicos de la época dorada del vuelo: velocidad, historia, comparativa y curiosidades con textos originales.",
  openGraph: {
    title: "Volar sin prisa — 10 aviones antiguos que hicieron historia",
    description:
      "Ranking, historia 1926-1943, comparativa y curiosidades de la aviación clásica, con contenido original.",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Ala de avión clásico al atardecer",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#2B0A0A",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18454270235"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-18454270235');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
