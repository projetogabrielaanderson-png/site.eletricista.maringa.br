import * as React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbStep {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  steps: BreadcrumbStep[];
  className?: string;
}

export function Breadcrumbs({ steps, className }: BreadcrumbsProps) {
  return (
    <Breadcrumb className={cn("animate-in fade-in slide-in-from-top-4 duration-700", className)}>
      <BreadcrumbList className="text-[10px] md:text-xs">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="flex items-center gap-1.5 opacity-60 transition-all hover:opacity-100 hover:text-primary">
              <Home className="h-3.5 w-3.5" />
              <span className="font-medium uppercase tracking-wider">Início</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {steps.map((step, index) => (
          <React.Fragment key={step.name}>
            <BreadcrumbSeparator className="opacity-20" />
            <BreadcrumbItem>
              {step.url && index < steps.length - 1 ? (
                <BreadcrumbLink asChild>
                  <Link href={step.url} className="opacity-60 transition-all hover:opacity-100 hover:text-primary font-medium uppercase tracking-wider">
                    {step.name}
                  </Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="font-bold uppercase tracking-wider text-muted-foreground/80">
                  {step.name}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

