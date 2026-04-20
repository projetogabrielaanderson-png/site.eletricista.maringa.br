import { Phone, MessageSquare } from "lucide-react";
import { BUSINESS } from "@/data/business-info";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] block border-t border-border/40 bg-background/80 px-4 py-3 backdrop-blur-lg md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={`tel:${BUSINESS.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-secondary py-3 text-sm font-bold text-foreground ring-1 ring-border transition-transform active:scale-95"
        >
          <Phone className="h-4 w-4" /> Ligar Agora
        </a>
        <a
          href={BUSINESS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-[1.5] items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform active:scale-95"
        >
          <MessageSquare className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;
