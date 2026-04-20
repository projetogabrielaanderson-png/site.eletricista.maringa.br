"use client";

import { Phone, Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS } from "@/data/business-info";

const navLinks = [
  { label: "Serviços", href: "/servicos/" },
  { label: "Onde Atendemos", href: "/bairros/" },
  { label: "Emergência 24h", href: "/contato/" },
  { label: "Contato", href: "/contato/" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-border/30 bg-background/70 backdrop-blur-xl" aria-label="Navegação principal">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Eletricista Maringá - Página Inicial">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-105 shadow-soft">
            <Zap className="h-5 w-5" />
          </div>
          <span className="font-heading text-lg font-bold text-foreground">
            Eletricista <span className="hidden sm:inline text-primary">Maringá</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-x-2 -bottom-[15px] h-0.5 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Button size="sm" className="ml-3" asChild>
            <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-1.5 h-3.5 w-3.5" /> Orçamento
            </a>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background transition-colors hover:bg-accent md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border/30 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-3 w-full" asChild>
                <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4" /> Orçamento Remoto
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

