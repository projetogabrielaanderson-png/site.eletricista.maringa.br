export interface BairroConfig {
  slug: string;
  name: string;
  h1Title: string;
  nearbyBairros: string[];
  lat: number;
  lng: number;
  cep: string;
}

const h1Patterns = [
  (b: string) => `Buscando um Eletricista na ${b} em Maringá?`,
  (b: string) => `Serviços de Eletricista no ${b} em Maringá-PR`,
  (b: string) => `Eletricista 24 Horas em Maringá: Atendimento de Emergência e Instalação Padrão Copel`,
  (b: string) => `Instalação e manutenção elétrica residencial ${b} em Maringá`,
  (b: string) => `Instalação de fiação elétrica no ${b}`,
  (b: string) => `Troca de disjuntores queimados no ${b} em Maringá`,
];

function slugify(name: string): string {
  return `eletricista-${name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")}-maringa`;
}

interface BairroSeed {
  name: string;
  lat: number;
  lng: number;
  cep: string;
}

const allBairroSeeds: BairroSeed[] = [
  { name: "Zona 01", lat: -23.4205, lng: -51.9331, cep: "87013-000" },
  { name: "Zona 02", lat: -23.4178, lng: -51.9382, cep: "87010-000" },
  { name: "Zona 03", lat: -23.4232, lng: -51.9267, cep: "87050-000" },
  { name: "Zona 04", lat: -23.4125, lng: -51.9415, cep: "87014-000" },
  { name: "Zona 05", lat: -23.4283, lng: -51.9198, cep: "87015-000" },
  { name: "Zona 06", lat: -23.4098, lng: -51.9453, cep: "87016-000" },
  { name: "Zona 07", lat: -23.4055, lng: -51.9389, cep: "87020-000" },
  { name: "Zona 08", lat: -23.4312, lng: -51.9145, cep: "87050-100" },
  { name: "Jardim Alvorada", lat: -23.4389, lng: -51.9456, cep: "87033-000" },
  { name: "Jardim América", lat: -23.4156, lng: -51.9512, cep: "87045-000" },
  { name: "Jardim Atami", lat: -23.4478, lng: -51.9234, cep: "87060-000" },
  { name: "Jardim Bela Vista", lat: -23.4345, lng: -51.9523, cep: "87070-000" },
  { name: "Jardim Canadá", lat: -23.4412, lng: -51.9367, cep: "87080-000" },
  { name: "Jardim Colina Verde", lat: -23.4523, lng: -51.9289, cep: "87061-000" },
  { name: "Jardim Copacabana", lat: -23.4267, lng: -51.9578, cep: "87062-000" },
  { name: "Jardim Espanha", lat: -23.4089, lng: -51.9534, cep: "87063-000" },
  { name: "Jardim Guaporé", lat: -23.4145, lng: -51.9612, cep: "87064-000" },
  { name: "Jardim Higienópolis", lat: -23.4198, lng: -51.9234, cep: "87075-000" },
  { name: "Jardim Iguaçu", lat: -23.4356, lng: -51.9145, cep: "87065-000" },
  { name: "Jardim Imperial", lat: -23.4434, lng: -51.9512, cep: "87066-000" },
  { name: "Jardim Indaiá", lat: -23.4512, lng: -51.9345, cep: "87067-000" },
  { name: "Jardim Itália", lat: -23.4067, lng: -51.9478, cep: "87068-000" },
  { name: "Jardim Liberdade", lat: -23.4234, lng: -51.9623, cep: "87069-000" },
  { name: "Jardim Mandacaru", lat: -23.4378, lng: -51.9589, cep: "87083-000" },
  { name: "Jardim Miosótis", lat: -23.4456, lng: -51.9178, cep: "87084-000" },
  { name: "Jardim Monte Rei", lat: -23.4123, lng: -51.9656, cep: "87085-000" },
  { name: "Jardim Morangueira", lat: -23.4289, lng: -51.9112, cep: "87040-000" },
  { name: "Jardim Novo Horizonte", lat: -23.4367, lng: -51.9634, cep: "87086-000" },
  { name: "Jardim Oriental", lat: -23.4189, lng: -51.9178, cep: "87087-000" },
  { name: "Jardim Paris", lat: -23.4445, lng: -51.9423, cep: "87088-000" },
  { name: "Jardim Paulista", lat: -23.4534, lng: -51.9312, cep: "87089-000" },
  { name: "Jardim Pinheiros", lat: -23.4078, lng: -51.9567, cep: "87090-000" },
  { name: "Jardim Rebouças", lat: -23.4312, lng: -51.9478, cep: "87091-000" },
  { name: "Jardim Requião", lat: -23.4256, lng: -51.9534, cep: "87092-000" },
  { name: "Jardim São Jorge", lat: -23.4167, lng: -51.9689, cep: "87093-000" },
  { name: "Jardim São Silvestre", lat: -23.4489, lng: -51.9567, cep: "87094-000" },
  { name: "Jardim Sumaré", lat: -23.4378, lng: -51.9267, cep: "87095-000" },
  { name: "Jardim Tarumã", lat: -23.4423, lng: -51.9478, cep: "87096-000" },
  { name: "Jardim Tuiuti", lat: -23.4145, lng: -51.9712, cep: "87097-000" },
  { name: "Jardim Universo", lat: -23.4567, lng: -51.9234, cep: "87098-000" },
  { name: "Jardim Vitória", lat: -23.4234, lng: -51.9745, cep: "87099-000" },
  { name: "Parque Avenida", lat: -23.4312, lng: -51.9689, cep: "87025-000" },
  { name: "Parque das Grevíleas", lat: -23.4489, lng: -51.9145, cep: "87026-000" },
  { name: "Parque do Horto", lat: -23.4178, lng: -51.9423, cep: "87027-000" },
  { name: "Parque Industrial", lat: -23.4534, lng: -51.9512, cep: "87065-100" },
  { name: "Parque Tarumã", lat: -23.4401, lng: -51.9401, cep: "87028-000" },
  { name: "Residencial Cidade Nova", lat: -23.4267, lng: -51.9756, cep: "87030-000" },
  { name: "Residencial Guaiapó", lat: -23.4589, lng: -51.9178, cep: "87031-000" },
  { name: "Residencial Ney Braga", lat: -23.4378, lng: -51.9712, cep: "87032-000" },
  { name: "Residencial Novo Centro", lat: -23.4145, lng: -51.9289, cep: "87034-000" },
  { name: "Residencial Parque das Palmeiras", lat: -23.4456, lng: -51.9623, cep: "87035-000" },
  { name: "Residencial Parque Industrial", lat: -23.4523, lng: -51.9534, cep: "87036-000" },
  { name: "Residencial Parque Itaipu", lat: -23.4289, lng: -51.9789, cep: "87037-000" },
  { name: "Residencial Parque Lagoa Dourada", lat: -23.4612, lng: -51.9312, cep: "87038-000" },
  { name: "Residencial Parque São Jorge", lat: -23.4178, lng: -51.9678, cep: "87039-000" },
  { name: "Residencial Parque São Silvestre", lat: -23.4489, lng: -51.9589, cep: "87041-000" },
  { name: "Residencial Parque Tuiuti", lat: -23.4356, lng: -51.9745, cep: "87042-000" },
  { name: "Residencial Portal das Torres", lat: -23.4234, lng: -51.9812, cep: "87043-000" },
  { name: "Residencial Santa Felicidade", lat: -23.4567, lng: -51.9423, cep: "87044-000" },
  { name: "Residencial Santa Helena", lat: -23.4312, lng: -51.9823, cep: "87046-000" },
  { name: "Residencial São Clemente", lat: -23.4089, lng: -51.9723, cep: "87047-000" },
  { name: "Residencial São Domingos", lat: -23.4634, lng: -51.9267, cep: "87048-000" },
  { name: "Residencial São Francisco", lat: -23.4145, lng: -51.9845, cep: "87049-000" },
  { name: "Alto das Grevíleas", lat: -23.4478, lng: -51.9112, cep: "87055-000" },
  { name: "Chácaras Aeroporto", lat: -23.3989, lng: -51.9234, cep: "87056-000" },
  { name: "Chácara Paulista", lat: -23.4023, lng: -51.9567, cep: "87057-000" },
  { name: "Centro Cívico de Maringá", lat: -23.4212, lng: -51.9345, cep: "87014-100" },
  { name: "Área Rural de Maringá", lat: -23.3856, lng: -51.9512, cep: "87000-000" },
];

const allBairros = allBairroSeeds.map((s) => s.name);

function getNearby(index: number, all: string[]): string[] {
  const nearby: string[] = [];
  const offsets = [-3, -2, -1, 1, 2, 3, 4, 5];
  for (const off of offsets) {
    const idx = (index + off + all.length) % all.length;
    if (nearby.length < 8) nearby.push(all[idx]);
  }
  return nearby;
}

export const bairrosConfig: BairroConfig[] = allBairroSeeds.map((seed, i) => ({
  slug: slugify(seed.name),
  name: seed.name,
  h1Title: h1Patterns[i % 6](seed.name),
  nearbyBairros: getNearby(i, allBairros),
  lat: seed.lat,
  lng: seed.lng,
  cep: seed.cep,
}));

export function findBairroBySlug(slug: string): BairroConfig | undefined {
  return bairrosConfig.find((b) => b.slug === slug);
}

export { allBairros };
