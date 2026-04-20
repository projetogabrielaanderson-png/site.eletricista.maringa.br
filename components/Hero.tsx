import { Phone, ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Animate, StaggerContainer, StaggerItem } from "@/components/Animate";
import heroImg from "@/assets/hero-electrician.jpg";
import { BUSINESS } from "@/data/business-info";


const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
    {/* Decorative blobs */}
    <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
    <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />

    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 lg:py-28">
      <div className="relative z-10 max-w-xl">

        <Animate delay={0.1}>
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
            Eletricista Profissional para{" "}
            <span className="text-gradient">Emergências</span> e Instalações
          </h1>
        </Animate>

        <Animate delay={0.2}>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Especialista em <strong>instalações elétricas residenciais</strong> e prediais. Soluções <em>rápidas</em> para falta de energia, curto-circuito e <strong>conversão de tomadas 110V/220V</strong>.
          </p>
        </Animate>

        <Animate delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" title="Chamar eletricista em Maringá pelo WhatsApp">
                <Phone className="mr-2 h-5 w-5" /> Chamar Eletricista
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/servicos" title="Ver todos os serviços elétricos em Maringá">
                Ver Serviços <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Animate>

      </div>

      <Animate variant="scaleIn" delay={0.2}>
        <div className="relative flex justify-center md:justify-end">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl animate-pulse-glow" />
          <img
            src={heroImg}
            alt="Eletricista profissional trabalhando em painel elétrico"
            width={800}
            height={600}
            className="relative w-full max-w-md rounded-2xl object-cover shadow-dramatic ring-1 ring-border/50 md:max-w-lg"
          />
        </div>
      </Animate>
    </div>
  </section>
);

export default Hero;
