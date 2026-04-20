export interface ServicoConfig {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  longDescription: string;
  category: string;
  benefits: string[];
}

function slugify(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const servicosData: Omit<ServicoConfig, "slug">[] = [
  // Instalações Elétricas
  {
    name: "Instalação elétrica residencial, comercial e industrial",
    shortName: "Instalação Elétrica Completa",
    icon: "Plug",
    category: "Instalações Elétricas",
    description: "Projetos e execução de instalações elétricas completas para residências, comércios e indústrias em Maringá.",
    longDescription: "Realizamos instalações elétricas completas seguindo todas as normas da ABNT e padrão Copel. Desde o projeto até a execução, garantimos segurança e eficiência para sua casa, loja ou galpão industrial.",
    benefits: ["Projeto seguindo normas ABNT", "Material de primeira qualidade", "Garantia de 1 ano no serviço", "Atendimento residencial, comercial e industrial"],
  },
  {
    name: "Instalação de fiação elétrica",
    shortName: "Fiação Elétrica",
    icon: "Cable",
    category: "Instalações Elétricas",
    description: "Passagem de cabos, troca de fiação antiga e dimensionamento correto de circuitos elétricos.",
    longDescription: "Substituímos fiações antigas e desgastadas por cabos novos dimensionados corretamente. Evite riscos de curto-circuito e incêndio com uma fiação moderna e segura.",
    benefits: ["Cabos dimensionados corretamente", "Prevenção de curto-circuito", "Troca de fiação antiga", "Conformidade com normas técnicas"],
  },
  {
    name: "Instalação de quadro de distribuição",
    shortName: "Quadro de Distribuição",
    icon: "LayoutGrid",
    category: "Instalações Elétricas",
    description: "Montagem, organização e modernização de quadros de distribuição elétrica.",
    longDescription: "Montamos e modernizamos quadros de distribuição com disjuntores adequados, DR e DPS. Um quadro bem organizado garante segurança e facilita a manutenção da instalação elétrica.",
    benefits: ["Organização profissional dos circuitos", "Instalação de DR e DPS", "Substituição de quadros antigos", "Identificação de todos os circuitos"],
  },
  {
    name: "Instalação de disjuntores",
    shortName: "Disjuntores",
    icon: "CircuitBoard",
    category: "Instalações Elétricas",
    description: "Troca e instalação de disjuntores, DR e DPS para proteção elétrica.",
    longDescription: "Instalamos e substituímos disjuntores termomagnéticos, diferenciais residuais (DR) e dispositivos de proteção contra surtos (DPS). Proteja sua família e seus equipamentos.",
    benefits: ["Proteção contra choques elétricos", "Proteção contra surtos de energia", "Disjuntores dimensionados corretamente", "Troca de disjuntores queimados"],
  },
  {
    name: "Instalação de tomadas e interruptores",
    shortName: "Tomadas e Interruptores",
    icon: "ToggleRight",
    category: "Instalações Elétricas",
    description: "Instalação, substituição e reparo de tomadas e interruptores residenciais e comerciais.",
    longDescription: "Instalamos tomadas novas, substituímos tomadas queimadas e interruptores com defeito. Trabalhamos com modelos simples, paralelos e inteligentes.",
    benefits: ["Tomadas com padrão NBR 14136", "Interruptores simples e paralelos", "Conversão 110V/220V", "Tomadas para ar-condicionado"],
  },
  // Instalações Residenciais
  {
    name: "Instalação de chuveiro elétrico",
    shortName: "Chuveiro Elétrico",
    icon: "ShowerHead",
    category: "Instalações Residenciais",
    description: "Instalação e troca de chuveiros elétricos com fiação e disjuntor dedicados.",
    longDescription: "Instalamos chuveiros elétricos de todas as marcas com segurança total. Fiação dimensionada, disjuntor exclusivo e aterramento adequado para evitar choques.",
    benefits: ["Fiação dimensionada para a potência", "Disjuntor exclusivo", "Aterramento correto", "Todas as marcas e modelos"],
  },
  {
    name: "Instalação de ventiladores de teto",
    shortName: "Ventiladores de Teto",
    icon: "Fan",
    category: "Instalações Residenciais",
    description: "Instalação de ventiladores de teto com suporte adequado e fiação dedicada.",
    longDescription: "Instalamos ventiladores de teto com suporte reforçado, fiação adequada e controle de velocidade. Segurança e conforto para sua casa.",
    benefits: ["Suporte reforçado no teto", "Fiação dedicada", "Controle de velocidade", "Todas as marcas"],
  },
  {
    name: "Instalação de luminárias",
    shortName: "Luminárias",
    icon: "Lamp",
    category: "Instalações Residenciais",
    description: "Instalação de lustres, plafons, spots de LED e arandelas.",
    longDescription: "Instalamos todos os tipos de luminárias: lustres, plafons, spots embutidos, arandelas e fitas de LED. Transforme a iluminação da sua casa com estilo e segurança.",
    benefits: ["Lustres e plafons", "Spots de LED embutidos", "Arandelas e fitas de LED", "Instalação segura e profissional"],
  },
  {
    name: "Instalação de lâmpadas LED",
    shortName: "Lâmpadas LED",
    icon: "Lightbulb",
    category: "Instalações Residenciais",
    description: "Substituição e instalação de lâmpadas LED para economia de energia.",
    longDescription: "Substituímos lâmpadas convencionais por LED de alta eficiência. Economia de até 80% na conta de luz com iluminação de qualidade superior.",
    benefits: ["Economia de até 80% na energia", "Maior durabilidade", "Iluminação de qualidade", "Diversas temperaturas de cor"],
  },
  // Iluminação
  {
    name: "Projeto de iluminação residencial",
    shortName: "Projeto de Iluminação",
    icon: "Sun",
    category: "Iluminação",
    description: "Projetos de iluminação personalizados para valorizar cada ambiente da sua casa.",
    longDescription: "Desenvolvemos projetos de iluminação que combinam funcionalidade e estética. Iluminação direta, indireta e de destaque para criar ambientes aconchegantes e funcionais.",
    benefits: ["Iluminação personalizada", "Valorização dos ambientes", "Eficiência energética", "Combinação de técnicas de iluminação"],
  },
  {
    name: "Instalação de iluminação externa",
    shortName: "Iluminação Externa",
    icon: "LampDesk",
    category: "Iluminação",
    description: "Iluminação para jardins, fachadas, garagens e áreas externas.",
    longDescription: "Instalamos iluminação externa para jardins, fachadas, garagens e áreas de lazer. Luminárias à prova d'água, sensores de presença e automação.",
    benefits: ["Luminárias à prova d'água", "Sensores de presença", "Segurança para áreas externas", "Iluminação decorativa"],
  },
  {
    name: "Instalação de refletores",
    shortName: "Refletores",
    icon: "Projector",
    category: "Iluminação",
    description: "Instalação de refletores LED para fachadas, quadras e áreas amplas.",
    longDescription: "Instalamos refletores LED de alta potência para iluminação de fachadas, quadras esportivas, estacionamentos e áreas amplas. Economia e iluminação potente.",
    benefits: ["Refletores LED de alta potência", "Economia de energia", "Iluminação para grandes áreas", "Longa vida útil"],
  },
  {
    name: "Automação de iluminação",
    shortName: "Automação de Iluminação",
    icon: "Sparkles",
    category: "Iluminação",
    description: "Controle inteligente de luzes com timers, sensores e aplicativos.",
    longDescription: "Automatize a iluminação da sua casa ou empresa com sensores de presença, timers programáveis e controle por aplicativo. Conforto, economia e praticidade.",
    benefits: ["Controle por aplicativo", "Sensores de presença", "Timers programáveis", "Economia de energia automática"],
  },
  // Automação & Segurança
  {
    name: "Instalação de sistemas de automação residencial",
    shortName: "Automação Residencial",
    icon: "Home",
    category: "Automação & Segurança",
    description: "Automação completa para sua casa: iluminação, cortinas, climatização e segurança.",
    longDescription: "Transformamos sua casa em uma casa inteligente. Automação de iluminação, cortinas, ar-condicionado e sistemas de segurança com controle centralizado.",
    benefits: ["Controle centralizado", "Automação de cortinas e persianas", "Climatização inteligente", "Integração de sistemas"],
  },
  {
    name: "Instalação de campainhas e interfones",
    shortName: "Campainhas e Interfones",
    icon: "Bell",
    category: "Automação & Segurança",
    description: "Instalação de campainhas, interfones e videoporteiros residenciais e prediais.",
    longDescription: "Instalamos campainhas, interfones de áudio e vídeo, e videoporteiros com acesso remoto pelo celular. Segurança e praticidade na porta da sua casa.",
    benefits: ["Interfones de áudio e vídeo", "Videoporteiros com acesso remoto", "Campainhas sem fio", "Instalação predial e residencial"],
  },
  {
    name: "Instalação de fechaduras elétricas",
    shortName: "Fechaduras Elétricas",
    icon: "Lock",
    category: "Automação & Segurança",
    description: "Instalação de fechaduras elétricas, eletrônicas e biométricas.",
    longDescription: "Instalamos fechaduras elétricas, eletrônicas com senha, biométricas e com acesso por aplicativo. Segurança avançada para portas e portões.",
    benefits: ["Fechaduras biométricas", "Acesso por senha ou app", "Fechaduras para portões", "Integração com interfones"],
  },
  {
    name: "Integração com assistentes inteligentes",
    shortName: "Assistentes Inteligentes",
    icon: "Cpu",
    category: "Automação & Segurança",
    description: "Integração de dispositivos com Alexa, Google Home e Apple HomeKit.",
    longDescription: "Integramos todos os seus dispositivos inteligentes com Alexa, Google Home e Apple HomeKit. Controle por voz e automação de rotinas para sua casa.",
    benefits: ["Compatível com Alexa", "Compatível com Google Home", "Apple HomeKit", "Automação de rotinas por voz"],
  },
];

export const servicosConfig: ServicoConfig[] = servicosData.map((s) => ({
  ...s,
  slug: slugify(s.name) + "-maringa",
}));

export function findServicoBySlug(slug: string): ServicoConfig | undefined {
  return servicosConfig.find((s) => s.slug === slug);
}
