import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Outlet, useLocation } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { useEffect } from "react";
import LgpdBanner from "./components/LgpdBanner.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import MobileCTA from "./components/MobileCTA.tsx";

const queryClient = new QueryClient();

import { useNavigate } from "react-router-dom";
import { findBairroBySlug } from "@/data/bairrosConfig";

// Redirecionamentos para manter SEO de URLs antigas (Estrutura Silo)
const LegacyRedirects = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. /onde-atendemos -> /bairros
    if (pathname === "/onde-atendemos") {
      navigate("/bairros", { replace: true });
      return;
    }

    // 2. /servicos/:servicoSlug/:bairroSlug -> /servicos/:servicoSlug-em-:bairroSlug
    const servicosMatch = pathname.match(/^\/servicos\/([^\/]+)\/([^\/]+)$/);
    if (servicosMatch) {
      const [, s, b] = servicosMatch;
      navigate(`/servicos/${s}-em-${b}`, { replace: true });
      return;
    }

    // 3. /:bairroSlug (legado) -> /bairros/:bairroSlug
    const knownShortRoutes = ["/", "/servicos", "/bairros", "/contato", "/privacidade", "/termos-de-uso", "/onde-atendemos"];
    if (!knownShortRoutes.includes(pathname) && !pathname.startsWith("/bairros/") && !pathname.startsWith("/servicos/")) {
       const slug = pathname.substring(1);
       if (slug && findBairroBySlug(slug)) {
         navigate(`/bairros/${slug}`, { replace: true });
       }
    }
  }, [pathname, navigate]);

  return null;
};

// Rola para o topo a cada mudança de rota
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Head>
          <meta name="author" content="Eletricista Maringá" />
          <meta
            name="robots"
            content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          />
        </Head>
        <ScrollToTop />
        <LegacyRedirects />
        <Toaster />
        <Sonner />
        <Outlet />
        <LgpdBanner />
        <MobileCTA />
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
