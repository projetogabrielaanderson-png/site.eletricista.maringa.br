import { MapPin, ChevronRight } from "lucide-react";
import { Animate } from "@/components/Animate";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { bairrosConfig } from "@/data/bairrosConfig";

const Neighborhoods = () => (
  <section id="bairros" className="section-padding bg-gradient-to-b from-background to-secondary/50">
    <div className="mx-auto max-w-7xl">
      <Animate className="text-center">
        <span className="glass-badge">Área de Cobertura</span>
        <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Atendimento nos bairros de <strong>Maringá</strong>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Chegamos rápido aonde você estiver. Sem taxa de deslocamento adicional.
        </p>
        <div className="mx-auto mt-4 max-w-xs divider-gradient-primary" />
      </Animate>

      <Animate delay={0.15}>
        <div className="mt-12 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm p-6 md:p-10">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3 lg:grid-cols-4">
            {bairrosConfig.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/bairros/${b.slug}/`}
                  className="group/item flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-foreground"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/60 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:text-primary group-hover/item:animate-pin-drop" />
                  <span>{b.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Animate>

      <Animate delay={0.25} className="mt-8 text-center">
        <Button variant="outline" asChild>
          <Link href="/bairros/">
            Ver cobertura completa <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </Animate>
    </div>
  </section>
);

export default Neighborhoods;

