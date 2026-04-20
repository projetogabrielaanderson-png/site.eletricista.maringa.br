"use client";

import { Phone, ArrowRight, MapPin, CircleArrowRight, Shield, Clock, Award, Check, Star, Quote, ChevronDown, Send, Mail } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Animate, StaggerContainer, StaggerItem } from "@/components/Animate";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaGenerator from "@/components/seo/SchemaGenerator";
import heroImg from "@/assets/hero-electrician.jpg";
import { DynamicIcon } from "@/components/DynamicIcon";
import type { ServicoConfig } from "@/data/servicosConfig";
import { servicosConfig } from "@/data/servicosConfig";
import { bairrosConfig } from "@/data/bairrosConfig";
import type { BairroConfig } from "@/data/bairrosConfig";
import { BUSINESS, getPreposition } from "@/data/business-info";

interface Props {
  servico: ServicoConfig;
  bairro?: BairroConfig;
}

const ServicoTemplate = ({ servico, bairro }: Props) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const S = servico.name;
  const B = bairro?.name;
  const prep = B ? getPreposition(B) : "";

  const relatedServices = servicosConfig
    .filter((s) => s.category === servico.category && s.slug !== servico.slug)
    .slice(0, 4);

  const otherServices = servicosConfig
    .filter((s) => s.category !== servico.category)
    .slice(0, 4);

  const faqs = [
    {
      q: B ? `Vocês fazem ${S.toLowerCase()} ${prep} ${B}?` : `Vocês fazem ${S.toLowerCase()} em Maringá?`,
      a: B
        ? `Sim! Realizamos ${S.toLowerCase()} ${prep} ${B} e em todos os bairros de Maringá. Atendimento rápido com chegada em até 30 minutos.`
        : `Sim! Realizamos ${S.toLowerCase()} em todos os bairros de Maringá e região. Atendimento rápido com chegada em até 30 minutos.`,
    },
    {
      q: "Qual o horário de atendimento?",
      a: "Atendemos 24 horas por dia, 7 dias por semana, incluindo feriados.",
    },
    {
      q: "Qual o valor do serviço?",
      a: "O valor depende da complexidade do serviço. A visita técnica para orçamento é gratuita e o valor é combinado antes da execução.",
    },
    {
      q: "Vocês emitem nota fiscal?",
      a: "Sim, emitimos nota fiscal para todos os serviços realizados, garantindo transparência e segurança.",
    },
    {
      q: "O serviço tem garantia?",
      a: "Sim, todos os nossos serviços possuem garantia. Trabalhamos com materiais de qualidade e mão de obra especializada.",
    },
  ];

  const testimonials = [
    {
      quote: B
        ? `Contratei o serviço de ${S.toLowerCase()} ${prep} ${B} e fiquei muito satisfeito. Profissional pontual, limpo e com preço justo. Recomendo!`
        : `Contratei o serviço de ${S.toLowerCase()} e fiquei muito satisfeito. Profissional pontual, limpo e com preço justo. Recomendo!`,
      name: "Marcos A.",
      role: B ? `Cliente ${prep} ${B}` : "Cliente em Maringá",
      stars: 5,
    },
    {
      quote: "Excelente profissional! Resolveu tudo rapidamente e com muita competência. Já indiquei para vários amigos.",
      name: "Patrícia R.",
      role: B ? `Cliente ${prep} ${B}` : "Cliente em Maringá",
      stars: 5,
    },
    {
      quote: "Muito bom! Técnico educado, explicou tudo direitinho e o serviço ficou perfeito. Nota 10!",
      name: "Fernando L.",
      role: B ? `Cliente ${prep} ${B}` : "Cliente em Maringá",
      stars: 5,
    },
  ];

  const avatarColors = [
    "bg-primary text-primary-foreground",
    "bg-success text-success-foreground",
    "bg-emergency text-emergency-foreground",
  ];

  const breadcrumbs = [
    { name: "Início", url: BUSINESS.site + "/" },
    { name: "Serviços", url: `${BUSINESS.site}/servicos/` },
    ...(B
      ? [
          { name: servico.shortName, url: `${BUSINESS.site}/servicos/${servico.slug}/` },
          { name: B, url: `${BUSINESS.site}/servicos/${servico.slug}-em-${bairro!.slug}/` },
        ]
      : [{ name: servico.shortName, url: `${BUSINESS.site}/servicos/${servico.slug}/` }]),
  ];

  const pageTitle = B
    ? `${servico.name} ${prep} ${B} em Maringá | ${BUSINESS.name}`
    : `${servico.name} em Maringá | ${BUSINESS.name}`;
  const pageDesc = servico.longDescription;
  const pageUrl = B
    ? `${BUSINESS.site}/servicos/${servico.slug}-em-${bairro!.slug}`
    : `${BUSINESS.site}/servicos/${servico.slug}`;

  return (
    <div key={servico.slug} className="min-h-screen">
      <SchemaGenerator
        pageTitle={pageTitle}
        pageDescription={pageDesc}
        pageUrl={pageUrl}
        breadcrumbs={breadcrumbs}
        bairro={bairro ? { name: B!, lat: bairro.lat, lng: bairro.lng } : undefined}
        servico={{ name: servico.name, shortName: servico.shortName, description: servico.longDescription }}
        faqs={faqs}
      />
      <header><Navbar /></header>
      <main>


      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 lg:py-28">
          <div className="relative z-10 max-w-xl">
            <Animate delay={0.1}>
              <Breadcrumbs
                steps={[
                  { name: "Serviços", url: "/servicos/" },
                  ...(B
                    ? [
                        { name: servico.shortName, url: `/servicos/${servico.slug}/` },
                        { name: B },
                      ]
                    : [{ name: servico.shortName }]),
                ]}
                className="mb-6"
              />
            </Animate>

            <Animate delay={0.1}>
              <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
                {B ? (
                  <>{servico.name} {prep} <span className="text-gradient">{B}</span> em Maringá</>
                ) : (
                  <>{servico.name} em <span className="text-gradient">Maringá</span></>
                )}
              </h1>
            </Animate>

            <Animate delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {servico.longDescription}
              </p>
            </Animate>

            <Animate delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" title={`Solicitar orçamento de ${S} em Maringá`}>
                    <Phone className="mr-2 h-5 w-5" /> Solicitar Orçamento
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/servicos/">
                    Todos os Serviços <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Animate>

          </div>

          <Animate variant="scaleIn" delay={0.2}>
            <div className="relative flex justify-center md:justify-end">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl animate-pulse-glow" />
              <img
                src={heroImg}
                alt={`${S} em Maringá - Eletricista profissional`}
                width={800}
                height={600}
                className="relative w-full max-w-md rounded-2xl object-cover shadow-dramatic ring-1 ring-border/50 md:max-w-lg"
              />
            </div>
          </Animate>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Animate>
                <span className="glass-badge">Vantagens</span>
                <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Por que escolher nosso serviço?
                </h2>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Qualidade, segurança e garantia em cada detalhe do serviço de {servico.shortName.toLowerCase()}.
                </p>
              </Animate>

              <div className="mt-10 space-y-4">
                {servico.benefits.map((benefit, i) => (
                  <Animate key={i} delay={i * 0.1}>
                    <div className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                        <span className="font-heading text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div>
                        <p className="font-heading text-sm font-bold text-foreground">{benefit}</p>
                        <div className="mt-1.5 h-0.5 w-8 rounded-full bg-primary/20 transition-all duration-300 group-hover:w-12 group-hover:bg-primary/40" />
                      </div>
                    </div>
                  </Animate>
                ))}
              </div>
            </div>

            <Animate variant="scaleIn" delay={0.2}>
              <div className="relative flex justify-center">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 blur-2xl" />
                <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-10">
                  <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4">
                    <DynamicIcon name={servico.icon} className="h-8 w-8 text-primary icon-glow" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{servico.shortName}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{servico.longDescription}</p>
                  <Button className="mt-6 w-full" asChild>
                    <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" /> Solicitar Orçamento
                    </a>
                  </Button>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Bairros atendidos */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <Animate>
            <div className="mb-4 text-center">
              <span className="glass-badge">
                <MapPin className="mr-1.5 h-3.5 w-3.5" /> Cobertura Total
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                {servico.shortName} em todos os bairros
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Atendemos em mais de 60 bairros de Maringá. Clique no seu bairro para saber mais.
              </p>
            </div>
            <div className="mx-auto mb-12 max-w-xs divider-gradient-primary" />
          </Animate>

          <Animate delay={0.1}>
            <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {bairrosConfig.map((b) => (
                <Link
                  key={b.slug}
                  href={`/servicos/${servico.slug}-em-${b.slug}/`}
                  className={`group flex items-center gap-2 rounded-xl border px-4 py-3 text-sm transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:text-foreground ${bairro && b.slug === bairro.slug ? "border-primary/40 bg-primary/10 text-foreground" : "border-border/60 bg-card text-muted-foreground"}`}
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/60 group-hover:text-primary" />
                  <span className="truncate">{b.name}</span>
                </Link>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
          <div className="mx-auto max-w-7xl">
            <Animate>
              <div className="mb-4 text-center">
                <span className="glass-badge">Serviços Relacionados</span>
                <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Outros serviços de {servico.category}
                </h2>
              </div>
              <div className="mx-auto mb-12 max-w-xs divider-gradient-primary" />
            </Animate>

            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedServices.map((s) => {
                const SIcon = s.icon;
                return (
                  <StaggerItem key={s.slug}>
                    <Link href={`/servicos/${s.slug}/`} className="group block h-full">
                      <div className="h-full overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover-glow">
                        <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/15">
                          <DynamicIcon name={s.icon} className="h-5 w-5 icon-glow" />
                        </div>
                        <h3 className="font-heading text-base font-bold text-foreground">{s.shortName}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{s.description}</p>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* More services */}
      {otherServices.length > 0 && (
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <Animate>
              <div className="mb-4 text-center">
                <span className="glass-badge">Explore Mais</span>
                <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Outros serviços disponíveis
                </h2>
              </div>
              <div className="mx-auto mb-12 max-w-xs divider-gradient-primary" />
            </Animate>

            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {otherServices.map((s) => {
                const SIcon = s.icon;
                return (
                  <StaggerItem key={s.slug}>
                    <Link href={`/servicos/${s.slug}/`} className="group block h-full">
                      <div className="h-full overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover-glow">
                        <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/15">
                          <DynamicIcon name={s.icon} className="h-5 w-5 icon-glow" />
                        </div>
                        <h3 className="font-heading text-base font-bold text-foreground">{s.shortName}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{s.description}</p>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl">
          <Animate>
            <div className="mb-4 text-center">
              <span className="glass-badge">Depoimentos</span>
              <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                O que nossos clientes dizem
              </h2>
            </div>
            <div className="mx-auto mb-12 max-w-xs divider-gradient-primary" />
          </Animate>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="group relative h-full rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover-glow">
                  <Quote className="mb-4 h-8 w-8 text-primary/20" />
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground italic">"{t.quote}"</p>
                  <div className="divider-gradient mt-5 mb-4" />
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${avatarColors[i % 3]}`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <Animate>
            <div className="mb-4 text-center">
              <span className="glass-badge">FAQ</span>
              <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Perguntas Frequentes
              </h2>
            </div>
            <div className="mx-auto mb-12 max-w-xs divider-gradient-primary" />
          </Animate>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Animate key={i} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:border-primary/20">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="pr-4 font-heading text-sm font-semibold text-foreground">{faq.q}</span>
                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="border-t border-border/40 px-5 py-4">
                          <p className="text-sm leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.a }} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <Animate>
            <div className="overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-10 md:p-14">
              <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4">
                <DynamicIcon name={servico.icon} className="h-8 w-8 text-primary icon-glow" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Precisa de {servico.shortName}{B ? ` ${prep} ${B}` : ""}?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Entre em contato agora e receba um orçamento gratuito. {B ? `Atendimento rápido ${prep} ${B} em Maringá.` : "Atendimento rápido em todos os bairros de Maringá."}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button size="lg" asChild>
                  <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" title={`Chamar eletricista para ${servico.shortName} pelo WhatsApp`}>
                    <Phone className="mr-2 h-5 w-5" /> Chamar no WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contato/">
                    <Mail className="mr-2 h-4 w-4" /> Formulário de Contato
                  </Link>
                </Button>
              </div>
            </div>
          </Animate>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicoTemplate;
