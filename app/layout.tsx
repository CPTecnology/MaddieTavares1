import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maddie Tavares Beauty Boutique | Estética & Bem-Estar",
  description:
    "A Maddie Tavares Beauty Boutique é um espaço premium de estética, beleza e bem-estar, com tratamentos inovadores e ambiente luxuoso.",
  keywords: [
    "Maddie Tavares Beauty Boutique",
    "Maddie Tavares",
    "spa",
    "estética",
    "beleza",
    "beauty boutique",
    "bem-estar",
    "tratamentos estéticos",
    "salão de beleza"
  ],
  metadataBase: new URL("https://maddietavares.cv"),
  openGraph: {
    title: "Maddie Tavares Beauty Boutique",
    description:
      "Espaço premium de estética, beleza e bem-estar. Agende o seu atendimento.",
    url: "https://maddietavares.cv",
    siteName: "Maddie Tavares Beauty Boutique",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maddie Tavares Beauty Boutique",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915324/maddie_tavares/itbaurocsv8bptshlmbz.png", media: "(prefers-color-scheme: light)" },
      { url: "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915324/maddie_tavares/cbbpujs0ntldim0xscfj.png", media: "(prefers-color-scheme: dark)" },
      { url: "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915326/maddie_tavares/o0losgo1x6guips5wvlq.svg", type: "image/svg+xml" },
    ],
    apple: "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915320/maddie_tavares/vyal4grafodjpaowbrrg.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        {/* Google Fonts – Geist */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist&family=Geist+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Geist', 'Geist Mono', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
