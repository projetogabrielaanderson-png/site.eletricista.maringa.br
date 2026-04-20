import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Animate } from "@/components/Animate";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BUSINESS } from "@/data/business-info";
import Link from "next/link";

export const metadata = {
  title: "Termos de Uso | Eletricista em Maringá",
  description: "Leia nossos termos de uso e condições de serviço para contratação de serviços elétricos em Maringá.",
};

export default function TermosPage() {
  const formattedDate = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

  return (
    <div className="min-h-screen">
      <header><Navbar /></header>
      <main>
        <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
          <div className="mx-auto max-w-3xl">
            <Animate>
              <div className="mb-4 text-center">
                <Breadcrumbs
                  steps={[{ name: "Termos de Uso" }]}
                  className="mb-6 flex justify-center"
                />
                <h1 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Termos de Uso
                </h1>
              </div>
              <div className="mx-auto mb-12 max-w-xs divider-gradient-primary" />
            </Animate>

            <Animate delay={0.1}>
              <div className="prose-custom rounded-2xl border border-border/60 bg-card p-8 md:p-10">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Última atualização: {formattedDate}
                </p>

                <h2>1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e utilizar este site, você concorda com estes Termos de Uso. Caso não concorde com algum dos termos, recomendamos que não utilize nossos serviços.
                </p>

                <h2>2. Descrição dos Serviços</h2>
                <p>
                  Oferecemos serviços de eletricista residencial, comercial e industrial em Maringá e região, incluindo instalações elétricas, manutenção, reparos, emergências 24h e instalação padrão Copel.
                </p>

                <h2>3. Uso do Site</h2>
                <p>Ao utilizar nosso site, você se compromete a:</p>
                <ul>
                  <li>Fornecer informações verdadeiras e atualizadas</li>
                  <li>Não utilizar o site para fins ilegais ou não autorizados</li>
                  <li>Não interferir no funcionamento do site</li>
                  <li>Não reproduzir o conteúdo sem autorização</li>
                </ul>

                <h2>4. Orçamentos e Preços</h2>
                <p>
                  Os orçamentos são gratuitos e não geram obrigação de contratação. Os valores são combinados antes da execução do serviço e podem variar conforme a complexidade do trabalho, materiais necessários e condições do local.
                </p>

                <h2>5. Garantia dos Serviços</h2>
                <p>
                  Todos os serviços possuem garantia conforme informado no momento da contratação. A garantia cobre defeitos na mão de obra e não se aplica a uso indevido ou desgaste natural dos materiais.
                </p>

                <h2>6. Responsabilidades</h2>
                <p>
                  Não nos responsabilizamos por danos decorrentes de instalações elétricas pré-existentes em desacordo com as normas técnicas, uso indevido das instalações realizadas, ou por interrupções no fornecimento de energia pela concessionária.
                </p>

                <h2>7. Propriedade Intelectual</h2>
                <p>
                  Todo o conteúdo deste site, incluindo textos, imagens, logotipos e layout, é de nossa propriedade e está protegido por leis de propriedade intelectual. É proibida a reprodução sem autorização prévia.
                </p>

                <h2>8. Limitação de Responsabilidade</h2>
                <p>
                  Não garantimos que o site estará sempre disponível ou livre de erros. Não nos responsabilizamos por eventuais danos indiretos decorrentes do uso do site.
                </p>

                <h2>9. Legislação Aplicável</h2>
                <p>
                  Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida no foro da comarca de Maringá, Paraná.
                </p>

                <h2>10. Contato</h2>
                <p>
                  Em caso de dúvidas sobre estes termos, entre em contato pelo WhatsApp <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">{BUSINESS.phoneDisplay}</a> ou pela nossa <Link href="/contato/">página de contato</Link>.
                </p>
              </div>
            </Animate>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
