import { findBairroBySlug, bairrosConfig } from "@/data/bairrosConfig";
import BairroTemplate from "@/components/pages/BairroTemplate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return bairrosConfig.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const bairro = findBairroBySlug(params.slug);
  if (!bairro) return {};

  return {
    title: `Eletricista no ${bairro.name} em Maringá | 24 Horas`,
    description: `Eletricista no ${bairro.name}. Atendimento imediato em Maringá para instalações e reparos elétricos com garantia.`,
  };
}

export default function BairroPage({ params }: PageProps) {
  const bairro = findBairroBySlug(params.slug);
  if (!bairro) notFound();

  return <BairroTemplate bairro={bairro} />;
}
