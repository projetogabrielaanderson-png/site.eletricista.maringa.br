// This file extracts slugs for SSG without importing React/Lucide icons
const allBairroNames = [
  "Zona 01", "Zona 02", "Zona 03", "Zona 04", "Zona 05", "Zona 06", "Zona 07", "Zona 08",
  "Jardim Alvorada", "Jardim América", "Jardim Atami", "Jardim Bela Vista", "Jardim Canadá",
  "Jardim Colina Verde", "Jardim Copacabana", "Jardim Espanha", "Jardim Guaporé",
  "Jardim Higienópolis", "Jardim Iguaçu", "Jardim Imperial", "Jardim Indaiá",
  "Jardim Itália", "Jardim Liberdade", "Jardim Mandacaru", "Jardim Miosótis",
  "Jardim Monte Rei", "Jardim Morangueira", "Jardim Novo Horizonte", "Jardim Oriental",
  "Jardim Paris", "Jardim Paulista", "Jardim Pinheiros", "Jardim Rebouças",
  "Jardim Requião", "Jardim São Jorge", "Jardim São Silvestre", "Jardim Sumaré",
  "Jardim Tarumã", "Jardim Tuiuti", "Jardim Universo", "Jardim Vitória",
  "Parque Avenida", "Parque das Grevíleas", "Parque do Horto", "Parque Industrial",
  "Parque Tarumã", "Residencial Cidade Nova", "Residencial Guaiapó",
  "Residencial Ney Braga", "Residencial Novo Centro", "Residencial Parque das Palmeiras",
  "Residencial Parque Industrial", "Residencial Parque Itaipu",
  "Residencial Parque Lagoa Dourada", "Residencial Parque São Jorge",
  "Residencial Parque São Silvestre", "Residencial Parque Tuiuti",
  "Residencial Portal das Torres", "Residencial Santa Felicidade",
  "Residencial Santa Helena", "Residencial São Clemente", "Residencial São Domingos",
  "Residencial São Francisco", "Alto das Grevíleas", "Chácaras Aeroporto",
  "Chácara Paulista", "Centro Cívico de Maringá", "Área Rural de Maringá"
];

function slugify(name: string): string {
  return `eletricista-${name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")}-maringa`;
}

const servicoNames = [
  "Instalação elétrica residencial, comercial e industrial",
  "Instalação de fiação elétrica",
  "Instalação de quadro de distribuição",
  "Instalação de disjuntores",
  "Instalação de tomadas e interruptores",
  "Instalação de chuveiro elétrico",
  "Instalação de ventiladores de teto",
  "Instalação de luminárias",
  "Instalação de lâmpadas LED",
  "Projeto de iluminação residencial",
  "Instalação de iluminação externa",
  "Instalação de refletores",
  "Automação de iluminação",
  "Instalação de sistemas de automação residencial",
  "Instalação de campainhas e interfones",
  "Instalação de fechaduras elétricas",
  "Integração com assistentes inteligentes"
];

function slugifyServico(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") + "-maringa";
}

export const getSSGRoutes = () => {
  const bairros = allBairroNames.map(slugify);
  const servicos = servicoNames.map(slugifyServico);
  
  const paths: string[] = [
    "/",
    "/servicos",
    "/bairros",
    "/contato",
    "/privacidade",
    "/termos-de-uso",
  ];
  
  // Neighborhoods
  bairros.forEach(b => paths.push(`/bairros/${b}`));
  
  // Services
  servicos.forEach(s => {
    paths.push(`/servicos/${s}`);
    // Silo Structure: /servicos/{servico}-em-{bairro}
    bairros.forEach(b => paths.push(`/servicos/${s}-em-${b}`));
  });

  return paths;
};
