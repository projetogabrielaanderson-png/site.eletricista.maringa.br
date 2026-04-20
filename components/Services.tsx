import { Home, Building2, Zap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Animate, StaggerContainer, StaggerItem } from "@/components/Animate";
import { BUSINESS } from "@/data/business-info";

const services = [
  {
    icon: Home,
    title: "Serviços residenciais",
    description: "Instalação elétrica especializada para <strong>casas e apartamentos</strong>. Instalação de chuveiros, tomadas, luminárias, ventiladores e reparos em geral.",
    emergency: false,
  },
  {
    icon: Building2,
    title: "Serviços comerciais e industriais",
    description: "Instalação elétrica especializada para <strong>lojas, escritórios e galpões</strong>. Cabeamento de infraestrutura, rede de dados e sistemas de energia trifásicos.",
    emergency: false,
  },
  {
    icon: Zap,
    title: "Emergência Elétrica",
    description: "Falta de energia parcial, cheiro de queimado, disjuntor disparando? <strong>Atendimento imediato</strong> para restabelecer sua energia.",
    emergency: true,
  },
];

const Services = () => (
  <section id="servicos" className="section-padding">
    <div className="mx-auto max-w-7xl">
      <Animate>
        <div className="mb-4 text-center">
          <span className="glass-badge">Nossos Serviços</span>
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
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  s.emergency
                    ? "border-emergency/20 bg-gradient-to-br from-emergency/5 to-emergency/10 hover:shadow-[0_4px_24px_-4px_hsl(var(--emergency)/0.15)]"
                    : "border-border/60 bg-card hover-glow"
                }`}
              >
                <div
                  className={`mb-5 inline-flex rounded-2xl p-3.5 transition-colors ${
                    s.emergency
                      ? "bg-emergency/10 text-emergency group-hover:bg-emergency/15"
                      : "bg-primary/10 text-primary group-hover:bg-primary/15"
                  }`}
                >
                  <Icon className={`h-6 w-6 ${s.emergency ? "icon-glow-emergency" : "icon-glow"}`} />
                </div>
                <h3 className={`font-heading text-lg font-bold ${s.emergency ? "text-emergency" : "text-foreground"}`}>
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: s.description }} />
                {s.emergency && (
                  <Button variant="emergency" className="mt-6 w-full" asChild>
                      <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" title="Chamar emergência elétrica em Maringá">
                        <Phone className="mr-2 h-4 w-4" /> Chamar <strong>Emergência</strong>
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
);

export default Services;
