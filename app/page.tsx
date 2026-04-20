import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CopelSection from "@/components/CopelSection";
import Neighborhoods from "@/components/Neighborhoods";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SchemaGenerator from "@/components/seo/SchemaGenerator";
import { BUSINESS } from "@/data/business-info";

export default function Home() {
  const pageTitle = "Eletricista 24 Horas em Maringá | Instalação e Manutenção Elétrica";
  const pageDescription = "Serviços de eletricista 24h em Maringá. Residencial, comercial e industrial. Instalação padrão Copel e fiação.";

  return (
    <div className="min-h-screen">
      <SchemaGenerator
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={BUSINESS.site}
        breadcrumbs={[{ name: "Início", url: BUSINESS.site }]}
      />

      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Services />
        <CopelSection />
        <aside>
          <Neighborhoods />
        </aside>
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
