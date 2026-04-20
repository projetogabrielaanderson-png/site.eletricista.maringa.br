import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Animate } from "@/components/Animate";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BUSINESS } from "@/data/business-info";
import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade | Eletricista em Maringá",
  description: "Entenda como tratamos seus dados e garantimos sua privacidade de acordo com a LGPD.",
};

export default function PrivacidadePage() {
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
                  steps={[{ name: "Política de Privacidade" }]}
                  className="mb-6 flex justify-center"
                />
                <h1 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Política de Privacidade
                </h1>
              </div>
              <div className="mx-auto mb-12 max-w-xs divider-gradient-primary" />
            </Animate>

            <Animate delay={0.1}>
              <div className="prose-custom rounded-2xl border border-border/60 bg-card p-8 md:p-10">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Última atualização: {formattedDate}
                </p>

                <h2>1. Informações que Coletamos</h2>
                <p>
                  Coletamos informações pessoais que você nos fornece voluntariamente ao entrar em contato conosco, como nome, telefone, e-mail e endereço. Também podemos coletar dados automaticamente, como endereço IP, tipo de navegador e páginas visitadas.
                </p>

                <h2>2. Como Usamos suas Informações</h2>
                <p>Utilizamos suas informações para:</p>
                <ul>
                  <li>Prestar os serviços solicitados</li>
                  <li>Entrar em contato para agendamento e orçamentos</li>
                  <li>Melhorar nossos serviços e atendimento</li>
                  <li>Enviar comunicações relevantes sobre nossos serviços</li>
                  <li>Cumprir obrigações legais</li>
                </ul>

                <h2>3. Compartilhamento de Dados</h2>
                <p>
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para a prestação dos serviços ou por obrigação legal.
                </p>

                <h2>4. Cookies e Tecnologias de Rastreamento</h2>
                <p>
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo. Você pode gerenciar suas preferências de cookies através do seu navegador.
                </p>

                <h2>5. Segurança dos Dados</h2>
                <p>
                  Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>

                <h2>6. Seus Direitos (LGPD)</h2>
                <p>De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
                <ul>
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
                  <li>Solicitar a portabilidade dos dados</li>
                  <li>Revogar o consentimento a qualquer momento</li>
                </ul>

                <h2>7. Retenção de Dados</h2>
                <p>
                  Manteremos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, ou conforme exigido por lei.
                </p>

                <h2>8. Contato</h2>
                <p>
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco pelo WhatsApp <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer">{BUSINESS.phoneDisplay}</a> ou pela nossa <Link href="/contato/">página de contato</Link>.
                </p>

                <h2>9. Alterações nesta Política</h2>
                <p>
                  Reservamo-nos o direito de atualizar esta política a qualquer momento. Recomendamos que você revise periodicamente esta página.
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
