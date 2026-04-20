import { Phone, MapPin, Zap, Instagram, Facebook, Mail, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BUSINESS } from "@/data/business-info";

const footerLinks = [
  { label: "Serviços", href: "/servicos/" },
  { label: "Onde Atendemos", href: "/bairros/" },
  { label: "Contato", href: "/contato/" },
  { label: "Privacidade", href: "/privacidade/" },
  { label: "Termos de Uso", href: "/termos-de-uso/" },
];

const Footer = () => (
  <footer className="relative overflow-hidden bg-foreground text-primary-foreground">
    {/* Decorative gradient orbs */}
    <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
    <div className="pointer-events-none absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

    {/* Main content */}
    <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-24 md:px-8 md:pb-8">
      {/* Top section — CTA banner */}
      <div className="mb-14 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 md:flex md:items-center md:justify-between md:p-10">
        <div>
          <h3 className="font-heading text-xl font-bold md:text-2xl">
            Precisa de um <span className="text-primary">eletricista</span>?
          </h3>
          <p className="mt-1.5 text-sm opacity-60">
            Atendimento <strong><time dateTime="PT24H">24 horas</time></strong> em Maringá e região. Ligue agora!
          </p>
        </div>
        <a
          href={BUSINESS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Chamar eletricista pelo WhatsApp"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-heading text-sm font-bold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] md:mt-0"
        >
          Chamar Eletricista
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="group inline-flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-105">
              <Zap className="h-5 w-5" />
            </div>
            <span className="font-heading text-lg font-bold tracking-tight">Eletricista Maringá</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-50">
            Soluções elétricas <strong>rápidas</strong> e <strong>seguras</strong> para residências e empresas em Maringá.
          </p>
          <div className="mt-6 flex gap-2.5">
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-foreground/10 text-primary-foreground/50 transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a
              href={BUSINESS.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-foreground/10 text-primary-foreground/50 transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              <Facebook className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Links institucionais">
          <h4 className="font-heading text-xs font-bold uppercase tracking-widest opacity-40">Navegação</h4>
          <div className="mt-3 mb-5 h-px w-8 bg-primary/40" />
          <ul className="space-y-3 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 opacity-50 transition-all hover:opacity-100 hover:translate-x-0.5"
                >
                  <span className="h-1 w-1 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact info */}
        <div>
          <h4 className="font-heading text-xs font-bold uppercase tracking-widest opacity-40">Contato</h4>
          <div className="mt-3 mb-5 h-px w-8 bg-primary/40" />
          <address className="not-italic">
            <ul className="space-y-4 text-sm">
              <li>
                <a href={`tel:${BUSINESS.phone}`} className="group flex items-start gap-3 opacity-50 transition-opacity hover:opacity-100">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/5 text-primary transition-colors group-hover:bg-primary/10">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-xs opacity-70">Telefone / WhatsApp</p>
                    <p className="font-medium">{BUSINESS.phoneDisplay}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="group flex items-start gap-3 opacity-50 transition-opacity hover:opacity-100">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/5 text-primary transition-colors group-hover:bg-primary/10">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-xs opacity-70">E-mail</p>
                    <p className="font-medium">{BUSINESS.email}</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 opacity-50">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/5 text-primary">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-xs opacity-70">Endereço</p>
                  <p className="font-medium">{BUSINESS.address.street}</p>
                  <p className="text-xs opacity-70">{BUSINESS.address.city} - {BUSINESS.address.state}, {BUSINESS.address.zip}</p>
                </div>
              </li>
            </ul>
          </address>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-heading text-xs font-bold uppercase tracking-widest opacity-40">Horário</h4>
          <div className="mt-3 mb-5 h-px w-8 bg-primary/40" />
          <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Atendimento <time dateTime="PT24H">24h</time></p>
                <p className="text-xs opacity-50">Todos os dias, inclusive feriados</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="font-medium text-success">Disponível agora</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-14 flex flex-col items-center gap-4 border-t border-primary-foreground/8 pt-6 md:flex-row md:justify-between">
        <p className="text-xs opacity-30">
          © {new Date().getFullYear()} Eletricista Maringá. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-xs opacity-30">
          <Link href="/privacidade/" className="transition-opacity hover:opacity-70">Privacidade</Link>
          <Link href="/termos-de-uso/" className="transition-opacity hover:opacity-70">Termos</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

