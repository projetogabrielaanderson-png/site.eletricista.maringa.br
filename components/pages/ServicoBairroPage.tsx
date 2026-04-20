import { findServicoBySlug } from "@/data/servicosConfig";
import { findBairroBySlug } from "@/data/bairrosConfig";
import ServicoTemplate from "./ServicoTemplate";
import { notFound } from "next/navigation";

interface ServicoBairroProps {
  servicoSlug: string;
  bairroSlug: string;
}

const ServicoBairroPage = ({ servicoSlug, bairroSlug }: ServicoBairroProps) => {
  const servico = findServicoBySlug(servicoSlug);
  const bairro = findBairroBySlug(bairroSlug);

  if (!servico || !bairro) notFound();
  
  return <ServicoTemplate servico={servico} bairro={bairro} />;
};

export default ServicoBairroPage;

