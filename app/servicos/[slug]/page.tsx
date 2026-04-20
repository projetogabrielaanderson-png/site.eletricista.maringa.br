import { findServicoBySlug, servicosConfig } from "@/data/servicosConfig";
import { findBairroBySlug, bairrosConfig } from "@/data/bairrosConfig";
import ServicoTemplate from "@/components/pages/ServicoTemplate";
import ServicoBairroPage from "@/components/pages/ServicoBairroPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];

  // Serviços puros
  servicosConfig.forEach((s) => {
    params.push({ slug: s.slug });
  });

  // Serviços em Bairros (Estrutura Silo)
  servicosConfig.forEach((s) => {
    bairrosConfig.forEach((b) => {
      params.push({ slug: `${s.slug}-em-${b.slug}` });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;

  if (slug.includes("-em-")) {
    const parts = slug.split("-em-");
    const servicoSlug = parts[0] + "-maringa"; // O slug original já tem -maringa, mas na separação perdemos o sufixo se não houver cuidado. 
    // Na verdade, parts[0] será "instalacao-eletrica-residencial..." sem o "-maringa" se o slug for "servico-maringa-em-bairro-maringa"
    // Vamos analisar: servico.slug (com -maringa) + "-em-" + bairro.slug (com -maringa)
    
    const s = findServicoBySlug(parts[0]);
    const b = findBairroBySlug(parts[1]);

    if (s && b) {
      return {
        title: `${s.shortName} no ${b.name} em Maringá | 24 Horas`,
        description: `Precisando de ${s.shortName.toLowerCase()} no ${b.name} em Maringá? Atendimento 24h, orçamento grátis e rapidez garantida.`,
      };
    }
  }

  const servico = findServicoBySlug(slug);
  if (servico) {
    return {
      title: `${servico.shortName} em Maringá | Eletricista 24 Horas`,
      description: `Eletricista para ${servico.shortName.toLowerCase()} em Maringá. Atendimento 24h, orçamento grátis e qualidade garantida em toda a cidade.`,
    };
  }

  return {};
}

export default function Page({ params }: PageProps) {
  const { slug } = params;

  if (slug.includes("-em-")) {
    const parts = slug.split("-em-");
    // Lógica para recuperar os slugs originais considerando que ambos terminam em -maringa
    const servicoSlug = parts[0];
    const bairroSlug = parts[1];
    
    const servico = findServicoBySlug(servicoSlug);
    const bairro = findBairroBySlug(bairroSlug);

    if (!servico || !bairro) notFound();

    return <ServicoBairroPage servicoSlug={servicoSlug} bairroSlug={bairroSlug} />;
  }

  const servico = findServicoBySlug(slug);
  if (!servico) notFound();

  return <ServicoTemplate servico={servico} />;
}
