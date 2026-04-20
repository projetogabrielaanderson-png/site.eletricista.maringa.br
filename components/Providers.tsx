"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import LgpdBanner from "./LgpdBanner";
import MobileCTA from "./MobileCTA";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
          <LgpdBanner />
          <MobileCTA />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
