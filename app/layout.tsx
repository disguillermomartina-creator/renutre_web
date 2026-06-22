import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Newsreader } from "next/font/google"
import "./globals.css"

const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], display: "swap" })
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.renutre.com"),
  title: "Renutre® | Acompañamiento en TCA para adolescentes y familias",
  description: "Acompañamiento nutricional profesional, cercano y sin juicios para adolescentes, jóvenes y familias. Atención online y presencial en Córdoba Capital.",
  openGraph: {
    title: "Renutre® — Volver a sentir libertad",
    description: "Acompañamiento en TCA y dificultades en la relación con la comida, el cuerpo y el control.",
    type: "website",
    locale: "es_AR",
  },
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
}

export const viewport: Viewport = { colorScheme: "light", themeColor: "#F8FAF7" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${newsreader.variable} ${dmSans.variable}`}>
      <body>{children}{process.env.NODE_ENV === "production" && <Analytics />}</body>
    </html>
  )
}
