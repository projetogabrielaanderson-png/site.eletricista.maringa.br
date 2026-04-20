"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const LGPD_KEY = "lgpd-consent";

const LgpdBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(LGPD_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(LGPD_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(LGPD_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border/60 bg-card shadow-dramatic backdrop-blur-sm">
            <div className="flex items-start gap-4 p-5 md:p-6">
              <div className="hidden shrink-0 sm:flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-sm font-bold text-foreground md:text-base">
                  Sua privacidade é importante para nós
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
                  Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência, personalizar conteúdo e analisar nosso tráfego. 
                  Ao clicar em "Aceitar", você concorda com nossa{" "}
                  <Link href="/privacidade/" className="text-primary underline hover:text-primary/80">
                    Política de Privacidade
                  </Link>{" "}
                  e nossos{" "}
                  <Link href="/termos-de-uso/" className="text-primary underline hover:text-primary/80">
                    Termos de Uso
                  </Link>
                  , em conformidade com a LGPD (Lei nº 13.709/2018).
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <Button size="sm" onClick={accept}>
                    Aceitar Cookies
                  </Button>
                  <Button size="sm" variant="outline" onClick={decline}>
                    Recusar
                  </Button>
                  <Link
                    href="/privacidade/"
                    className="text-xs text-muted-foreground underline hover:text-foreground transition-colors"
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>

              <button
                onClick={decline}
                className="shrink-0 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LgpdBanner;

