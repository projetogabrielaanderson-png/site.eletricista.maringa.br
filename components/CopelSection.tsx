import { FileText, Settings, ShieldCheck, Check, CreditCard, UserCheck } from "lucide-react";
import { Animate, StaggerContainer, StaggerItem } from "@/components/Animate";

const services = [
  {
    icon: FileText,
    title: "Projetos Elétricos e Laudos",
    description: "Emissão de <strong>ART</strong> e laudos técnicos para condomínios e seguradoras. Regularização completa junto à <strong>Copel</strong>.",
  },
  {
    icon: Settings,
    title: "Modernização de Quadros",
    description: "Substituição de disjuntores antigos (NEMA) por padrão DIN. Instalação de dispositivos de segurança <strong>DR</strong> e <strong>DPS</strong>.",
  },
];

const securityItems = [
  { icon: Check, text: "Pagamento apenas ao final do serviço" },
  { icon: UserCheck, text: "Técnico identificado com foto enviada antes" },
  { icon: CreditCard, text: "Aceitamos Pix, Cartão e Dinheiro" },
];

const CopelSection = () => (
  <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
    <div className="mx-auto max-w-7xl">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <Animate>
            <span className="glass-badge !border-success/20 !bg-success/5 !text-success">
              Técnico Especializado
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Adequação de padrão Copel e aumento de carga
            </h2>
          </Animate>

          <StaggerContainer className="mt-8 space-y-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.title}>
                  <article className="group flex gap-4 rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover-glow">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                      <Icon className="h-5 w-5 icon-glow" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-foreground">{s.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: s.description }} />
                    </div>
                  </article>
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
);

export default CopelSection;
