import { Zap, Snowflake, PlugZap, Power, Lightbulb, SlidersHorizontal, Cable, Home, AlertTriangle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Animate, StaggerContainer, StaggerItem } from "@/components/Animate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BUSINESS } from "@/data/business-info";
import SchemaGenerator from "@/components/seo/SchemaGenerator";

const services = [
  { icon: Zap, title: "Elétrica Básica", description: "Troca de tomadas, interruptores, disjuntores e reparos em instalações elétricas residenciais.", cta: "Saiba mais", featured: false, emergency: false },
  { icon: Snowflake, title: "Ponto para Ar-Condicionado", description: "Instalação elétrica dedicada para ar-condicionado 220V com disjuntor exclusivo.", cta: "Pedir Orçamento", featured: true, emergency: false },
  { icon: PlugZap, title: "Conversão 110V para 220V", description: "Adaptação de tomadas para eletrodomésticos bifásicos (Secadoras, Fornos, etc).", cta: "Pedir Orçamento", featured: true, emergency: false },
  { icon: Power, title: "Tomadas e Interruptores", description: "Instalação, substituição e reparo de tomadas e interruptores simples, paralelos e inteligentes.", cta: "Saiba mais", featured: false, emergency: false },
  { icon: Lightbulb, title: "Iluminação e Luminárias", description: "Instalação de lustres, plafons, spots de LED, fitas de LED e projetos luminotécnicos.", cta: "Solicitar", featured: false, emergency: false },
  { icon: SlidersHorizontal, title: "Quadro de Distribuição", description: "Montagem, organização e troca de disjuntores. Instalação de DR e DPS para proteção.", cta: "Solicitar", featured: false, emergency: false },
  { icon: Cable, title: "Fiação Elétrica", description: "Passagem de cabos, troca de fiação antiga e dimensionamento correto de circuitos.", cta: "Solicitar", featured: false, emergency: false },
  { icon: Home, title: "Instalações Completas", description: "Projeto e execução elétrica para construções novas e reformas residenciais completas.", cta: "Solicitar", featured: false, emergency: false },
  { icon: AlertTriangle, title: "Manutenção Emergencial", description: "Atendimento rápido para curto-circuitos, quedas de energia e problemas urgentes.", cta: "Chamar Agora", featured: false, emergency: true },
  { icon: Building2, title: "Sistemas Industriais", description: "Manutenção e instalação elétrica para comércios, indústrias e galpões.", cta: "Solicitar", featured: false, emergency: false },
];

export const metadata = {
  title: "Nossos Serviços | Eletricista em Maringá",
  description: "Confira todos os serviços elétricos profissionais oferecidos pelo Eletricista Maringá. Instalações, manutenção e reparos 24h.",
};

export default function ServicosPage() {
  return (
    <div className="min-h-screen">
      <SchemaGenerator
        pageTitle="Nossos Serviços | Eletricista em Maringá"
        pageDescription="Confira todos os serviços elétricos profissionais oferecidos pelo Eletricista Maringá. Instalações, manutenção e reparos 24h."
        pageUrl={`${BUSINESS.site}/servicos`}
        breadcrumbs={[
          { name: "Início", url: BUSINESS.site },
          { name: "Serviços", url: `${BUSINESS.site}/servicos` },
        ]}
      />
      <header>
        <Navbar />
      </header>

      <main>
        <section className="bg-gradient-to-br from-secondary via-background to-secondary py-20 text-center md:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <Animate>
              <Breadcrumbs
                steps={[{ name: "Serviços" }]}
                className="mb-6 flex justify-center"
              />
              <h1 className="mt-4 font-heading text-4xl font-extrabold text-foreground md:text-5xl">
                Serviços Elétricos em <strong>Maringá</strong>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Soluções completas para <em>residências</em>, <em>comércios</em> e <em>indústrias</em>. Atendimento <strong><time dateTime="PT24H">24h</time></strong> com profissionais qualificados.
              </p>
            </Animate>
          </div>
        </section>

        <section className="section-padding">
          <StaggerContainer className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.title}>
                  <article
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-float ${
                      s.emergency
                        ? "border-emergency/20 bg-gradient-to-br from-emergency/5 to-emergency/10"
                        : s.featured
                        ? "border-primary/30 bg-card"
                        : "border-border/60 bg-card hover:border-primary/20"
                    }`}
                  >
                    {s.featured && (
                      <span className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-lg bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                        Mais Buscado
                      </span>
                    )}

                    <div
                      className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                        s.emergency
                          ? "bg-emergency/10 text-emergency group-hover:bg-emergency/15"
                          : "bg-primary/10 text-primary group-hover:bg-primary/15"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className={`font-heading text-lg font-bold ${s.emergency ? "text-emergency" : "text-foreground"}`}>
                      {s.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>

                    <div className="mt-6">
                      {s.emergency ? (
                        <Button variant="emergency" className="w-full" asChild>
                          <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">{s.cta}</a>
                        </Button>
                      ) : s.featured ? (
                        <Button className="w-full" asChild>
                          <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">{s.cta}</a>
                        </Button>
                      ) : (
                        <Button variant="outline" asChild>
                          <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">{s.cta}</a>
                        </Button>
                      )}
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>
      </main>

      <Footer />
    </div>
  );
}
