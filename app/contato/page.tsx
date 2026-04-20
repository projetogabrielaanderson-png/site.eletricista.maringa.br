"use client";

import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Animate } from "@/components/Animate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BUSINESS } from "@/data/business-info";
import SchemaGenerator from "@/components/seo/SchemaGenerator";

const contactInfo = [
  { icon: Phone, title: "Telefone / WhatsApp", lines: [BUSINESS.phoneDisplay] },
  { icon: Mail, title: "E-mail", lines: [BUSINESS.email] },
  { icon: MapPin, title: "Endereço", lines: [`${BUSINESS.address.street} – ${BUSINESS.address.neighborhood}`, `${BUSINESS.address.city} - ${BUSINESS.address.state}, ${BUSINESS.address.zip}`] },
  { icon: Clock, title: "Horário de Atendimento", lines: ["Segunda a Domingo", "24 horas – Inclusive feriados"] },
];

export default function ContatoPage() {
  const breadcrumbs = [
    { name: "Início", url: BUSINESS.site + "/" },
    { name: "Contato", url: `${BUSINESS.site}/contato/` },
  ];

  return (
    <div className="min-h-screen">
      <SchemaGenerator
        pageTitle="Contato | Eletricista em Maringá"
        pageDescription="Entre em contato com o Eletricista Maringá para orçamentos, dúvidas ou emergências elétricas 24h."
        pageUrl={`${BUSINESS.site}/contato/`}
        breadcrumbs={breadcrumbs}
      />
      <header><Navbar /></header>
      <main>
        <section className="bg-gradient-to-br from-secondary via-background to-secondary py-20 text-center md:py-28">
          <div className="mx-auto max-w-3xl px-5">
            <Animate delay={0.1}>
              <Breadcrumbs
                steps={[{ name: "Contato" }]}
                className="mb-6 flex justify-center"
              />
              <h1 className="mt-4 font-heading text-4xl font-extrabold text-foreground md:text-5xl">Contato</h1>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Entre em contato para orçamentos, dúvidas ou <strong>emergências elétricas</strong>. Respondemos em <em>minutos</em>!
              </p>
            </Animate>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-5">
              <Animate className="lg:col-span-3">
                <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground">Envie sua mensagem</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Preencha o formulário abaixo e retornaremos o mais rápido possível.</p>

                  <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-foreground">Nome completo</label>
                        <input type="text" placeholder="Seu nome" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20" />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-foreground">Telefone / WhatsApp</label>
                        <input type="tel" placeholder="(44) 99999-0000" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20" />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">E-mail</label>
                      <input type="email" placeholder="seu@email.com" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20" />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Tipo de serviço</label>
                      <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20">
                        <option value="">Selecione o serviço</option>
                        <option>Instalação elétrica residencial</option>
                        <option>Ponto para ar-condicionado</option>
                        <option>Conversão 110V / 220V</option>
                        <option>Quadro de distribuição</option>
                        <option>Iluminação e luminárias</option>
                        <option>Fiação elétrica</option>
                        <option>Padrão Copel</option>
                        <option>Emergência elétrica</option>
                        <option>Outro</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Bairro</label>
                      <input type="text" placeholder="Ex: Zona 01, Jardim Alvorada..." className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20" />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Descreva o problema ou serviço</label>
                      <textarea rows={5} placeholder="Conte-nos detalhes sobre o que você precisa..." className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20" />
                    </div>

                    <Button size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                    </Button>
                  </form>
                </div>
              </Animate>

              <div className="space-y-6 lg:col-span-2">
                <Animate delay={0.1}>
                  <address className="not-italic rounded-2xl border border-border/60 bg-gradient-to-br from-secondary to-accent p-5 sm:p-7">
                    <h3 className="font-heading text-lg font-bold text-foreground">Informações de Contato</h3>
                    <div className="mt-6 space-y-5">
                      {contactInfo.map((c) => {
                        const Icon = c.icon;
                        return (
                          <div key={c.title} className="flex gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-heading text-sm font-semibold text-foreground">{c.title}</p>
                              {c.lines.map((l) => (
                                <p key={l} className="text-sm text-muted-foreground">{l}</p>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                      <div className="flex gap-3 pt-2">
                        <p className="font-heading text-sm font-semibold text-foreground">Redes Sociais</p>
                      </div>
                      <div className="flex gap-3">
                        <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                          <Instagram className="h-5 w-5" />
                        </a>
                        <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                          <Facebook className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </address>
                </Animate>

                <Animate delay={0.2}>
                  <div className="overflow-hidden rounded-2xl border border-emergency/20 bg-gradient-to-br from-emergency/5 to-emergency/10 p-5 sm:p-7">
                    <h3 className="font-heading text-lg font-bold text-emergency">Emergência Elétrica?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Para situações urgentes como falta de energia, cheiro de queimado ou curto-circuito, ligue agora!
                    </p>
                    <Button variant="emergency" className="mt-5 w-full" asChild>
                      <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" title="Chamar emergência elétrica pelo WhatsApp">
                        <MessageSquare className="mr-2 h-4 w-4" /> Chamar pelo WhatsApp
                      </a>
                    </Button>
                  </div>
                </Animate>

                <Animate delay={0.3}>
                  <div className="overflow-hidden rounded-2xl border border-border/60 shadow-elevated">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58543.44397845489!2d-51.97694!3d-23.42528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd70e5b3a5a07%3A0xc12e4abdb0f28f7d!2sMaring%C3%A1%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização em Maringá"
                    />
                  </div>
                </Animate>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
