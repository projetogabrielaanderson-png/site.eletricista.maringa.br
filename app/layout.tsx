import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Eletricista 24 Horas em Maringá | Instalação e Manutenção Elétrica",
  description: "Serviços de eletricista 24h em Maringá. Residencial, comercial e industrial. Instalação padrão Copel e fiação.",
  authors: [{ name: "Eletricista Maringá" }],
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://site.eletricista.maringa.br/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://site.eletricista.maringa.br/",
    title: "Eletricista 24 Horas em Maringá | Instalação e Manutenção Elétrica",
    description: "Serviços de eletricista 24h em Maringá. Residencial, comercial e industrial. Instalação padrão Copel e fiação.",
    siteName: "Eletricista Maringá",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eletricista 24 Horas em Maringá | Instalação e Manutenção Elétrica",
    description: "Serviços de eletricista 24h em Maringá. Residencial, comercial e industrial. Instalação padrão Copel e fiação.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
