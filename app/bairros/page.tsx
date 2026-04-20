import { Zap, Snowflake, PlugZap, AlertTriangle, CheckCircle, Award, Shield, MapPin, Clock, Phone, MessageSquare, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Animate, StaggerContainer, StaggerItem } from "@/components/Animate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { bairrosConfig } from "@/data/bairrosConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BUSINESS } from "@/data/business-info";
import SchemaGenerator from "@/components/seo/SchemaGenerator";

const quickServices = [
  { icon: Zap, title: "Instalações", desc: "Elétricas completas" },
  { icon: Snowflake, title: "Ar-Condicionado", desc: "Pontos dedicados" },
  { icon: PlugZap, title: "Conversão", desc: "110V para 220V" },
  { icon: AlertTriangle, title: "Emergências", desc: "Atendimento 24h", emergency: true },
];

const highlights = [
  { icon: CheckCircle, title: "Atendimento Rápido", desc: <>Chegamos em até <time dateTime="PT40M">40 minutos</time> em casos de emergência</> },
  { icon: Award, title: "Profissionais Certificados", desc: "Técnicos qualificados e com experiência comprovada" },
  { icon: Shield, title: "Padrão Copel", desc: "Todos os serviços seguem as normas da ABNT e Copel" },
];

export const metadata = {
  title: "Onde Atendemos | Eletricista em Maringá",
  description: "Serviços elétricos profissionais em todos os bairros de Maringá. Atendimento rápido e seguro.",
};

export default function OndeAtendemos() {
  return (
    <div className="min-h-screen">
      <SchemaGenerator
        pageTitle="Onde Atendemos | Eletricista em Maringá"
        pageDescription="Serviços elétricos profissionais em todos os bairros de Maringá. Atendimento rápido e seguro."
        pageUrl={`${BUSINESS.site}/bairros`}
        breadcrumbs={[
          { name: "Início", url: BUSINESS.site },
          { name: "Onde Atendemos", url: `${BUSINESS.site}/bairros` },
        ]}
      />
      <header><Navbar /></header>
      <main>

      <section className="bg-gradient-to-br from-secondary via-background to-secondary py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Animate>
              <Breadcrumbs
                steps={[{ name: "Onde Atendemos" }]}
                className="mb-6 flex justify-center"
              />
            <h1 className="mt-4 font-heading text-4xl font-extrabold text-foreground md:text-5xl">
              Onde Atendemos
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Serviços elétricos profissionais em <strong>todos os bairros de Maringá</strong>. Atendimento <em>rápido</em>, sem taxa de deslocamento abusiva.
            </p>
          </Animate>
        </div>
      </section>


      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <Animate>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Atendimento 24 Horas</span>
                <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Serviços Elétricos em Toda Maringá
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Nossa equipe de eletricistas qualificados está pronta para atender você em qualquer bairro de Maringá. Oferecemos serviços completos de instalação, manutenção e reparos elétricos com qualidade e segurança garantidas.
                </p>
              </Animate>
              <div className="mt-8 space-y-4">
                {highlights.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <Animate key={h.title} delay={i * 0.1}>
                      <div className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-accent">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-foreground">{h.title}</p>
                          <p className="text-sm text-muted-foreground">{h.desc}</p>
                        </div>
                      </div>
                    </Animate>
                  );
                })}
              </div>
            </div>

            <StaggerContainer className="grid grid-cols-2 gap-4">
              {quickServices.map((s) => {
                const Icon = s.icon;
                return (
                  <StaggerItem key={s.title}>
                    <div className={`group flex flex-col items-center rounded-2xl border p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-float ${
                      s.emergency ? "border-emergency/20 bg-gradient-to-br from-emergency/5 to-emergency/10" : "border-border/60 bg-card hover:border-primary/20"
                    }`}>
                      <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${
                        s.emergency ? "bg-emergency/10 text-emergency group-hover:bg-emergency/15" : "bg-primary/10 text-primary group-hover:bg-primary/15"
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className={`font-heading font-bold ${s.emergency ? "text-emergency" : "text-foreground"}`}>{s.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-7xl text-center">
          <Animate>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Bairros Atendidos</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">Cobertura Completa</h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Soluções elétricas completas para residências e comércios em toda Maringá
            </p>
          </Animate>

          <Animate delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-left sm:grid-cols-3 lg:grid-cols-4">
              {bairrosConfig.map((b) => (
                <Link
                  key={b.slug}
                  href={`/bairros/${b.slug}/`}
                  className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/60" />
                  {b.name}
                </Link>
              ))}
            </div>
          </Animate>

          <Animate delay={0.3}>
            <div className="mt-10 flex items-start gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-5 text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Não encontrou seu bairro?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Entre em contato conosco! Estamos constantemente expandindo nossa área de atendimento e podemos atender sua região.
                </p>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <Animate>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Localização</span>
                <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">Estamos em Maringá</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Nossa base de operações está estrategicamente localizada para atender rapidamente todos os bairros de Maringá. Em casos de emergência, chegamos em até <time dateTime="PT40M">40 minutos</time>.
                </p>
              </Animate>

              <Animate delay={0.1}>
                <div className="mt-8 space-y-4">
                  {[
                    { icon: Clock, title: "Horário de Atendimento", text: <><time dateTime="PT24H">Segunda a Domingo, 24 horas</time></> },
                    { icon: Phone, title: "Telefone / WhatsApp", text: BUSINESS.phoneDisplay },
                    { icon: MapPin, title: "Endereço", text: BUSINESS.address.full },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-accent">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-foreground">{item.title}</p>
                          <p className="whitespace-pre-line text-sm text-muted-foreground">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Animate>

              <Animate delay={0.2}>
                <Button size="lg" className="mt-8" asChild>
                  <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" title="Solicitar atendimento elétrico em Maringá">
                    <MessageSquare className="mr-2 h-5 w-5" /> Solicitar Atendimento
                  </a>
                </Button>
              </Animate>
            </div>

            <Animate variant="scaleIn" delay={0.2}>
              <div className="overflow-hidden rounded-2xl border border-border/60 shadow-float">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58543.44397845489!2d-51.97694!3d-23.42528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd70e5b3a5a07%3A0xc12e4abdb0f28f7d!2sMaring%C3%A1%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                  width="100%"
                  height="400"
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
      </section>
      </main>
      <Footer />
    </div>
  );
}
