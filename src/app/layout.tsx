import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { JsonLd } from "@/components/jsonld";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Nutricionista Deportivo Online y en Gran Canaria`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.shortName }],
  keywords: [
    "nutricionista deportivo Gran Canaria",
    "nutricionista online",
    "nutrición deportiva",
    "pérdida de grasa",
    "recomposición corporal",
    "nutrición para futbolistas",
    "nutrición CrossFit",
    "dietista nutricionista Las Palmas",
    "Borja Galván",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Come mejor, rinde más y mantén el cambio`,
    description:
      "Planes de nutrición online y deportiva para mejorar composición corporal, rendimiento y hábitos sin pasar hambre ni complicarte la vida.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Come mejor, rinde más y mantén el cambio`,
    description:
      "Planes de nutrición online y deportiva para mejorar composición corporal, rendimiento y hábitos sin pasar hambre ni complicarte la vida.",
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#0a2f2a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-teal-500 focus:px-4 focus:py-2 focus:text-ink-900"
        >
          Saltar al contenido
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <WhatsappFloat />
        <JsonLd />
      </body>
    </html>
  );
}
