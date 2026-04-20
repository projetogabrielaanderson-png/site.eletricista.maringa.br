"use client";

import { Phone, MapPin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Animate } from "@/components/Animate";
import { BUSINESS } from "@/data/business-info";

const ContactForm = () => (
  <section id="contato" className="section-padding">
    <div className="mx-auto max-w-7xl">
      <Animate>
        <div className="mb-4">
          <span className="glass-badge">Contato Rápido</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Solicite um orçamento
          </h2>
          <p className="mt-2 text-muted-foreground">
            Preencha o formulário e retornaremos o <em>mais rápido possível</em>.
          </p>
        </div>
        <div className="w-full max-w-xs divider-gradient-primary mb-12" />
      </Animate>

      <div className="grid gap-8 lg:grid-cols-5">
        <Animate className="lg:col-span-3" delay={0.1}>
          <form className="glass-card space-y-5 rounded-2xl p-5 sm:p-7" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.08)]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="(44) 99999-0000"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.08)]"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Como podemos ajudar?</label>
              <textarea
                rows={4}
                placeholder="Descreva o problema elétrico ou serviço necessário..."
                className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.08)]"
              />
            </div>
            <Button size="lg" variant="emergency" className="w-full">
              <Send className="mr-2 h-4 w-4" /> ENVIAR SOLICITAÇÃO
            </Button>
          </form>
        </Animate>

        <Animate className="lg:col-span-2" delay={0.2}>
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-secondary to-accent p-5 sm:p-7">
            <h3 className="font-heading text-lg font-bold text-foreground">Informações de contato</h3>
            <div className="divider-gradient mt-4 mb-6" />
            <address className="not-italic">
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
                    <p className="font-heading text-sm font-semibold text-foreground">Endereço</p>
                    <p className="text-sm text-muted-foreground">{BUSINESS.address.street} – {BUSINESS.address.neighborhood}</p>
                    <p className="text-sm text-muted-foreground">{BUSINESS.address.city} - {BUSINESS.address.state} {BUSINESS.address.zip}</p>
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
          </div>
        </Animate>
      </div>
    </div>
  </section>
);

export default ContactForm;
