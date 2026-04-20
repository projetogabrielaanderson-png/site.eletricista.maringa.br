"use client";

import { Phone, ArrowRight, Shield, Clock, Award, Home, Building2, Zap, MapPin, Star, Quote, ChevronDown, Send, Mail, FileText, Settings, ShieldCheck, Check, CreditCard, UserCheck, CircleArrowRight, Sparkles, Plug, Lock, Lightbulb } from "lucide-react";
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
import toolsImg from "@/assets/electrical-tools.jpg";
import type { BairroConfig } from "@/data/bairrosConfig";
import { bairrosConfig } from "@/data/bairrosConfig";
import { servicosConfig } from "@/data/servicosConfig";
import { BUSINESS } from "@/data/business-info";



const securityItems = [
  { icon: Check, text: "Pagamento apenas ao final do serviço" },
  { icon: UserCheck, text: "Técnico identificado com foto enviada antes" },
  { icon: CreditCard, text: "Aceitamos Pix, Cartão e Dinheiro" },
];

const avatarColors = [
  "bg-primary text-primary-foreground",
  "bg-success text-success-foreground",
  "bg-emergency text-emergency-foreground",
];

interface Props {
  bairro: BairroConfig;
}

const BairroTemplate = ({ bairro }: Props) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const B = bairro.name;

  const services = [
    {
      icon: Home,
      title: "Serviços Residenciais",
      description: `Instalação elétrica completa para casas e apartamentos no ${B}. Chuveiros, tomadas, luminárias, ventiladores e reparos em geral.`,
      emergency: false,
    },
    {
      icon: Building2,
      title: "Serviços Comerciais",
      description: `Instalação elétrica para lojas e escritórios no ${B}. Cabeamento estruturado, rede de dados e sistemas trifásicos.`,
      emergency: false,
    },
    {
      icon: Zap,
      title: "Emergência Elétrica",
      description: `Falta de energia, cheiro de queimado ou disjuntor disparando no ${B}? Atendimento imediato para restabelecer sua energia.`,
      emergency: true,
    },
  ];

  const copelServices = [
    {
      icon: FileText,
      title: "Projetos Elétricos e Laudos",
      description: `Emissão de ART e laudos técnicos para imóveis no ${B}. Regularização completa junto à Copel.`,
    },
    {
      icon: Settings,
      title: "Modernização de Quadros",
      description: "Substituição de disjuntores antigos (NEMA) por padrão DIN. Instalação de dispositivos de segurança DR e DPS.",
    },
  ];

  const testimonials = [
    {
      quote: `Fiquei sem energia em várias tomadas de casa no ${B}. O técnico resolveu em 40 minutos, resultado excelente. Muito profissional!`,
      name: "Sandro Santos",
      role: `Morador do ${B}`,
      stars: 5,
    },
    {
      quote: `Precisei fazer a conversão de tomadas para 220V no meu apartamento no ${B}. Serviço rápido e sem nenhum problema!`,
      name: "Rafael M.",
      role: `Morador do ${B}`,
      stars: 5,
    },
    {
      quote: "Muito atencioso! Outro eletricista queria trocar todo o quadro, mas ele identificou que era só um disjuntor com defeito. Recomendo demais!",
      name: "Carlos Eduardo",
      role: `Morador do ${B}`,
      stars: 5,
    },
  ];

  const faqs = [
    {
      q: `Vocês atendem no ${B}?`,
      a: `Sim! Atendemos no ${B} e em todos os bairros de Maringá. Em casos de emergência no ${B}, nosso tempo médio de chegada é de 30 minutos.`,
    },
    {
      q: "Qual o horário de atendimento?",
      a: "Atendemos 24 horas por dia, 7 dias por semana, incluindo feriados.",
    },
    {
      q: "Qual o valor da visita técnica?",
      a: "A visita técnica para orçamento é gratuita. O valor do serviço é combinado antes da execução, sem surpresas.",
    },
    {
      q: "Vocês emitem nota fiscal?",
      a: "Sim, emitimos nota fiscal para todos os serviços realizados, garantindo transparência e segurança.",
    },
    {
      q: "Fazem instalação padrão Copel?",
      a: "Sim, realizamos instalação padrão Copel para novas ligações e aumento de carga, com toda a documentação necessária.",
    },
  ];

  const nearbyWithSlugs = bairro.nearbyBairros.map((name) => {
    const found = bairrosConfig.find((b) => b.name === name);
    return { name, slug: found?.slug || "" };
  });

  const breadcrumbs = [
    { name: "Início", url: BUSINESS.site + "/" },
    { name: "Onde Atendemos", url: `${BUSINESS.site}/bairros/` },
    { name: B, url: `${BUSINESS.site}/bairros/${bairro.slug}/` },
  ];
  const pageTitle = `Eletricista no ${B} em Maringá | ${BUSINESS.name}`;
  const pageDesc = `Atendimento rápido e profissional no ${B}. Instalações, reparos, emergências elétricas e padrão Copel com chegada em até 30 minutos.`;
  const pageUrl = `${BUSINESS.site}/bairros/${bairro.slug}`;

  return (
    <div className="min-h-screen">
      <SchemaGenerator
        pageTitle={pageTitle}
        pageDescription={pageDesc}
        pageUrl={pageUrl}
        breadcrumbs={breadcrumbs}
        bairro={{ name: B, lat: bairro.lat, lng: bairro.lng }}
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
                  { name: "Onde Atendemos", url: "/bairros/" },
                  { name: B },
                ]}
                className="mb-6"
              />
            </Animate>

            <Animate delay={0.1}>
              <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
                {bairro.h1Title.includes(B) ? (
                  <>
                    {bairro.h1Title.split(B)[0]}
                    <span className="text-gradient">{B}</span>
                    {bairro.h1Title.split(B).slice(1).join(B)}
                  </>
                ) : (
                  <>{bairro.h1Title}</>
                )}
              </h1>
            </Animate>

            <Animate delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Atendimento <em>rápido</em> e <strong>profissional</strong> no {B}. Instalações, reparos, emergências elétricas e padrão Copel com chegada em até 30 minutos.
              </p>
            </Animate>

            <Animate delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                   <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" title={`Chamar eletricista no ${B} pelo WhatsApp`}>
                     <Phone className="mr-2 h-5 w-5" /> Chamar Eletricista
                   </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/servicos/">
                    Ver Serviços <ArrowRight className="ml-2 h-4 w-4" />
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
                alt={`Eletricista profissional atendendo no ${B} em Maringá`}
                width={800}
                height={600}
                className="relative w-full max-w-md rounded-2xl object-cover shadow-dramatic ring-1 ring-border/50 md:max-w-lg"
              />
            </div>
          </Animate>
        </div>
      </section>


      {/* Benefícios */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Animate>
                <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Benefícios de contratar um eletricista residencial perto de mim
                </h2>
              </Animate>

              <div className="mt-10 space-y-7">
                {[
                  { title: "Atendimento rápido", desc: "A equipe se desloca sem demora até o local, reduzindo o tempo de espera." },
                  { title: "Análise precisa", desc: "Identificamos a falha com clareza, permitindo uma solução correta já na primeira intervenção." },
                  { title: "Componentes de qualidade", desc: "Trabalhamos apenas com peças certificadas, garantindo melhor desempenho e durabilidade." },
                  { title: "Serviço com garantia", desc: "Todo o trabalho recebe garantia e suporte, caso seja necessário algum ajuste posterior." },
                ].map((item, i) => (
                  <Animate key={i} delay={i * 0.1}>
                    <div className="flex gap-4">
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <CircleArrowRight className="h-4 w-4 text-primary icon-glow" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-bold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </Animate>
                ))}
              </div>
            </div>

            <Animate variant="scaleIn" delay={0.2}>
              <div className="relative flex justify-center">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 blur-2xl" />
                <img
                  src={toolsImg}
                  alt="Ferramentas profissionais de eletricista"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="relative w-full max-w-lg rounded-2xl object-cover shadow-dramatic ring-1 ring-border/50"
                />
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <Animate>
            <div className="mb-4 text-center">
              <span className="glass-badge">Serviços no {B}</span>
              <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Soluções elétricas completas
              </h2>
            </div>
            <div className="mx-auto mb-12 max-w-xs divider-gradient-primary" />
          </Animate>

          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.title}>
                  <article className={`group relative h-full overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                    s.emergency
                      ? "border-emergency/20 bg-gradient-to-br from-emergency/5 to-emergency/10 hover:shadow-[0_4px_24px_-4px_hsl(var(--emergency)/0.15)]"
                      : "border-border/60 bg-card hover-glow"
                  }`}>
                    <div className={`mb-5 inline-flex rounded-2xl p-3.5 transition-colors ${
                      s.emergency ? "bg-emergency/10 text-emergency group-hover:bg-emergency/15" : "bg-primary/10 text-primary group-hover:bg-primary/15"
                    }`}>
                      <Icon className={`h-6 w-6 ${s.emergency ? "icon-glow-emergency" : "icon-glow"}`} />
                    </div>
                    <h3 className={`font-heading text-lg font-bold ${s.emergency ? "text-emergency" : "text-foreground"}`}>{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                    {s.emergency && (
                      <Button variant="emergency" className="mt-6 w-full" asChild>
                        <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
                          <Phone className="mr-2 h-4 w-4" /> Chamar Emergência
                        </a>
                      </Button>
                    )}
                   </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Serviços Detalhados - Bento Grid Redesign */}
      <section className="px-4 py-20 md:section-padding bg-gradient-to-b from-secondary/50 via-background to-secondary/30 relative overflow-hidden">
        {/* Subtle background decorative elements */}
        <div className="pointer-events-none absolute -left-64 top-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-64 bottom-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <Animate>
            <div className="mb-10 text-center md:mb-16">
              <span className="glass-badge inline-flex items-center gap-2 px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Catálogo Profissional
              </span>
              <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Serviços de Eletricista em <span className="text-gradient">{B}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
                Oferecemos um catálogo completo de soluções elétricas com padrão de excelência técnica e garantia documentada.
              </p>
            </div>
          </Animate>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6">
            {[
              {
                category: "Instalações Elétricas",
                icon: Plug,
                span: "md:col-span-3 lg:col-span-4",
                theme: "default",
                items: [
                  "Instalação elétrica residencial, comercial e industrial",
                  "Instalação de fiação elétrica",
                  "Instalação de quadro de distribuição",
                  "Instalação de disjuntores",
                  "Instalação de tomadas e interruptores",
                ],
              },
              {
                category: "Instalações Residenciais",
                icon: Home,
                span: "md:col-span-3 lg:col-span-4",
                theme: "default",
                items: [
                  "Instalação de chuveiro elétrico",
                  "Instalação de ventiladores de teto",
                  "Instalação de luminárias",
                  "Instalação de lâmpadas LED",
                ],
              },
              {
                category: "Manutenção & Emergência",
                icon: Zap,
                span: "md:col-span-6 lg:col-span-4",
                theme: "emergency",
                items: [
                  "Curto-circuito e panes elétricas",
                  "Troca de fiação com superaquecimento",
                  "Reparo em quadros de luz",
                  "Manutenção preventiva e corretiva",
                ],
              },
              {
                category: "Segurança & Automação",
                icon: Lock,
                span: "md:col-span-3 lg:col-span-6",
                theme: "default",
                items: [
                  "Instalação de sistemas de automação residencial",
                  "Instalação de campainhas e interfones",
                  "Instalação de fechaduras elétricas",
                  "Integração com assistentes inteligentes",
                ],
              },
              {
                category: "Iluminação Técnica",
                icon: Lightbulb,
                span: "md:col-span-3 lg:col-span-6",
                theme: "default",
                items: [
                  "Projeto de iluminação residencial",
                  "Instalação de iluminação externa",
                  "Instalação de refletores LED",
                  "Automação de iluminação",
                ],
              },
            ].map((group) => (
              <StaggerItem key={group.category} className={group.span}>
                <div className={`group h-full overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1.5 cursor-pointer ${
                  group.theme === "emergency" 
                    ? "border-emergency/20 bg-gradient-to-br from-emergency/5 via-card to-emergency/10 shadow-lg hover:shadow-emergency/10"
                    : "border-border/60 bg-card hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5"
                }`}>
                  <div className="p-6 md:p-8">
                    <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 ${
                      group.theme === "emergency" ? "bg-emergency/10 text-emergency" : "bg-primary/10 text-primary"
                    }`}>
                      <group.icon className={`h-6 w-6 ${group.theme === "emergency" ? "icon-glow-emergency" : "icon-glow"}`} />
                    </div>
                    
                    <h3 className={`font-heading text-xl font-bold mb-6 ${group.theme === "emergency" ? "text-emergency" : "text-foreground"}`}>
                      {group.category}
                    </h3>
                    
                    <ul className="space-y-3">
                      {group.items.map((item) => {
                        const matchedServico = servicosConfig.find((s) => s.name === item);
                        const content = (
                          <div className="flex items-center justify-between group/item">
                            <li className="flex items-center gap-3 text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:scale-125 transition-all" />
                              {item}
                            </li>
                            <CircleArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                          </div>
                        );
                        return matchedServico ? (
                          <Link key={item} href={`/servicos/${matchedServico.slug}-em-${bairro.slug}/`} className="block">
                            {content}
                          </Link>
                        ) : (
                          <div key={item}>{content}</div>
                        );
                      })}
                    </ul>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className={`absolute -right-6 -bottom-6 h-24 w-24 rounded-full opacity-[0.03] transition-all duration-500 group-hover:scale-150 group-hover:opacity-[0.07] ${
                    group.theme === "emergency" ? "bg-emergency" : "bg-primary"
                  }`} />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Copel / Security */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <Animate>
                <span className="glass-badge !border-success/20 !bg-success/5 !text-success">Técnico Especializado</span>
                <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Padrão Copel no {B}
                </h2>
              </Animate>
              <StaggerContainer className="mt-8 space-y-4">
                {copelServices.map((s) => {
                  const Icon = s.icon;
                  return (
                    <StaggerItem key={s.title}>
                      <div className="group flex gap-4 rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover-glow">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                          <Icon className="h-5 w-5 icon-glow" />
                        </div>
                        <div>
                          <h3 className="font-heading text-base font-bold text-foreground">{s.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>

            <Animate variant="scaleIn" delay={0.2}>
              <div className="relative overflow-hidden rounded-2xl border border-success/20 bg-gradient-to-br from-success/5 to-success/10 p-7">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-success to-emerald-400" />
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-success/10">
                  <ShieldCheck className="h-7 w-7 text-success icon-glow-success" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">Segurança Anti-Golpe</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  Sua tranquilidade é nossa prioridade. Adotamos medidas rigorosas para garantir sua segurança.
                </p>
                <div className="divider-gradient mt-6 mb-5" />
                <div className="space-y-3">
                  {securityItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.text} className="flex items-center gap-3 rounded-xl bg-success/10 px-4 py-3.5 transition-colors hover:bg-success/15">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success/20">
                          <Icon className="h-4 w-4 text-success icon-glow-success" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Nearby neighborhoods */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl text-center">
          <Animate>
            <span className="glass-badge">Bairros Próximos</span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Também atendemos na região
            </h2>
            <div className="mx-auto mt-4 max-w-xs divider-gradient-primary" />
          </Animate>

          <Animate delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {nearbyWithSlugs.map((nb) => (
                <Link
                  key={nb.name}
                  href={`/bairros/${nb.slug}/`}
                  className="flex items-center gap-2 rounded-xl border border-border/60 bg-card px-4 py-2.5 text-sm text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-foreground hover:border-primary/20"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary/60" />
                  {nb.name}
                </Link>
              ))}
            </div>
          </Animate>

          <Animate delay={0.25} className="mt-8">
            <Button variant="outline" asChild>
              <Link href="/bairros/">Ver todos os bairros <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </Animate>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <Animate>
            <div className="text-center">
              <span className="glass-badge">Depoimentos</span>
              <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Clientes do {B}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Veja o que dizem os moradores do {B} sobre nossos serviços.
              </p>
            </div>
            <div className="mx-auto mt-4 max-w-xs divider-gradient-primary" />
          </Animate>

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <StaggerItem key={t.name}>
                <div className="group relative h-full rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover-glow">
                  <div className="mb-5 flex items-center justify-between">
                    <Quote className="h-8 w-8 text-primary/15" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                  <div className="divider-gradient mt-7 mb-5" />
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold shadow-soft ${avatarColors[i]}`}>
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
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
            <div className="text-center">
              <span className="glass-badge">FAQ</span>
              <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Dúvidas sobre o {B}
              </h2>
            </div>
            <div className="mx-auto mt-4 max-w-xs divider-gradient-primary" />
          </Animate>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, i) => (
              <Animate key={i} delay={i * 0.05}>
                <div className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  openFaq === i ? "border-primary/20 glass-card shadow-elevated" : "border-border/60 bg-card hover:border-border"
                }`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left">
                    <span className="font-heading text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                      openFaq === i ? "bg-primary/10 text-primary rotate-180" : "bg-accent text-muted-foreground"
                    }`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <div className="px-6 pb-5">
                          <div className="divider-gradient mb-4" />
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

      {/* Contact */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl">
          <Animate>
            <div className="mb-4">
              <span className="glass-badge">Contato Rápido</span>
              <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Solicite um orçamento no {B}
              </h2>
              <p className="mt-2 text-muted-foreground">Preencha o formulário e retornaremos o mais rápido possível.</p>
            </div>
            <div className="w-full max-w-xs divider-gradient-primary mb-12" />
          </Animate>

          <div className="grid gap-8 lg:grid-cols-5">
            <Animate className="lg:col-span-3" delay={0.1}>
              <form className="glass-card space-y-5 rounded-2xl p-5 sm:p-7" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">E-mail</label>
                    <input type="email" placeholder="seu@email.com" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.08)]" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Telefone / WhatsApp</label>
                    <input type="tel" placeholder="(44) 99999-0000" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.08)]" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Como podemos ajudar?</label>
                  <textarea rows={4} placeholder={`Descreva o problema elétrico no ${B}...`} className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.08)]" />
                </div>
                <Button size="lg" variant="emergency" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> ENVIAR SOLICITAÇÃO
                </Button>
              </form>
            </Animate>

            <Animate className="lg:col-span-2" delay={0.2}>
              <address className="not-italic rounded-2xl border border-border/60 bg-gradient-to-br from-secondary to-accent p-5 sm:p-7">
                <h3 className="font-heading text-lg font-bold text-foreground">Informações de contato</h3>
                <div className="divider-gradient mt-4 mb-6" />
                <ul className="space-y-5">
                  <li className="flex gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="h-5 w-5 icon-glow" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground">Telefone</p>
                      <p className="text-sm text-muted-foreground">
                        <a href={`tel:${BUSINESS.phone}`} className="hover:text-foreground transition-colors">{BUSINESS.phoneDisplay}</a>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5 icon-glow" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground">Área</p>
                      <p className="text-sm text-muted-foreground">{B}, Maringá - PR</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-5 w-5 icon-glow" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground">E-mail</p>
                      <p className="text-sm text-muted-foreground">
                        <a href={`mailto:${BUSINESS.email}`} className="hover:text-foreground transition-colors">{BUSINESS.email}</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </address>
            </Animate>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default BairroTemplate;
