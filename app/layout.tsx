import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Dra. Jayne Montoro - Dermatologia Avançada",
  description:
    "Com anos de experiência e especializações em tratamentos regenerativos e preventivos, a Dra. Jayne Montoro une tecnologia e personalização para oferecer um atendimento altamente diferenciado.",
  keywords: "dermatologia, harmonização facial, preenchimento, botox, São Paulo, estética, Jayne Montoro",
  openGraph: {
    title: "Dra. Jayne Montoro - Dermatologia Avançada",
    description:
      "Com anos de experiência e especializações em tratamentos regenerativos e preventivos, a Dra. Jayne Montoro une tecnologia e personalização para oferecer um atendimento altamente diferenciado.",
    url: "https://drajaynemontoro.com.br",
    siteName: "Dra. Jayne Montoro Dermatologia Avançada",
    images: [
      {
        url: "/images/dr-jayne-professional.png",
        width: 1333,
        height: 1333,
        alt: "Dra. Jayne Montoro",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Jayne Montoro - Dermatologia Avançada",
    description:
      "Com anos de experiência e especializações em tratamentos regenerativos e preventivos, a Dra. Jayne Montoro une tecnologia e personalização para oferecer um atendimento altamente diferenciado.",
    images: ["/images/dr-jayne-professional.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
