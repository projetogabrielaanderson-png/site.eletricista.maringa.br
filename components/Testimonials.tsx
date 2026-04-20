import { Star, Quote } from "lucide-react";
import { Animate, StaggerContainer, StaggerItem } from "@/components/Animate";

const testimonials = [
  {
    quote: "Chamei para religar um ar condicionado em um apartamento na Zona 17. Ele fez a conversão de tomadas novo 220V super rápido e sem nenhum problema!",
    name: "Rafael M.",
    role: "Morador da Zona 17",
    stars: 5,
  },
  {
    quote: "Fiquei sem energia em várias tomadas de casa na Avenida Alvorada. O técnico resolveu em 40 minutos, resultado excelente. Muito profissional!",
    name: "Sandro Santos",
    role: "Morador do Jd. Alvorada",
    stars: 5,
  },
  {
    quote: "Muito atencioso! Outro eletricista queria trocar todo o quadro, mas ele identificou que era só um disjuntor com defeito. Recomendo demais!",
    name: "Carlos Eduardo",
    role: "Morador do Novo Centro",
    stars: 5,
  },
];

const avatarColors = [
  "bg-primary text-primary-foreground",
  "bg-success text-success-foreground",
  "bg-emergency text-emergency-foreground",
];

const Testimonials = () => (
  <section className="section-padding overflow-hidden">
    <div className="mx-auto max-w-7xl">
      <Animate>
        <div className="text-center">
          <span className="glass-badge">Depoimentos</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            O que dizem nossos clientes
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            A confiança dos nossos clientes é o nosso maior certificado de qualidade.
          </p>
        </div>
        <div className="mx-auto mt-4 max-w-xs divider-gradient-primary" />
      </Animate>

      <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <StaggerItem key={t.name}>
            <article className="group relative h-full rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover-glow">
              <div className="mb-5 flex items-center justify-between">
                <Quote className="h-8 w-8 text-primary/15" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </p>

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
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default Testimonials;
