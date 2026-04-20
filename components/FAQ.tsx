"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Animate } from "@/components/Animate";

const faqs = [
  {
    q: "Qual o horário de atendimento?",
    a: "Atendemos 24 horas por dia, 7 dias por semana, incluindo feriados. Para emergências elétricas, nosso tempo médio de chegada é de <time>30 minutos</time>.",
  },
  {
    q: "Vocês atendem em todos os bairros de Maringá?",
    a: "Sim! Atendemos em todos os bairros de Maringá e região metropolitana, incluindo Sarandi e Paiçandu.",
  },
  {
    q: "Qual o valor da visita técnica?",
    a: "A visita técnica para orçamento é gratuita. O valor do serviço é combinado antes da execução, sem surpresas.",
  },
  {
    q: "Vocês emitem nota fiscal?",
    a: "Sim, emitimos nota fiscal para todos os serviços realizados, garantindo transparência e segurança para você.",
  },
  {
    q: "Fazem instalação padrão Copel?",
    a: "Sim, realizamos instalação padrão Copel para novas ligações e aumento de carga, com toda a documentação necessária.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
      <div className="mx-auto max-w-3xl">
        <Animate>
          <div className="text-center">
            <span className="glass-badge">FAQ</span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Dúvidas Frequentes
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Respostas rápidas para as principais questões sobre nossos serviços.
            </p>
          </div>
          <div className="mx-auto mt-4 max-w-xs divider-gradient-primary" />
        </Animate>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <Animate key={i} delay={i * 0.05}>
              <div className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                openIndex === i ? "border-primary/20 glass-card shadow-elevated" : "border-border/60 bg-card hover:border-border"
              }`}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-heading text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                    openIndex === i ? "bg-primary/10 text-primary rotate-180" : "bg-accent text-muted-foreground"
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5">
                        <div className="divider-gradient mb-4" />
                        <p className="text-sm leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.a }} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
