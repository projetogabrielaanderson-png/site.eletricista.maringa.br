export const BUSINESS = {
  name: "Eletricista Maringá",
  legalName: "Eletricista Maringá - Serviços Elétricos",
  phone: "+5544997398826",
  phoneDisplay: "(44) 99739-8826",
  whatsapp: "5544997398826",
  whatsappUrl: "https://whatsapp.assistenciatecnica.maringa.br/form?category_id=a1b2c3d4-0002-0000-0000-000000000002&owner=c3db4e18-d0fe-4053-979d-18e41802b066&origin=https%3A%2F%2Fsite.eletricista.maringa.br",

  email: "contato@eletricista.maringa.br",
  site: "https://site.eletricista.maringa.br",
  address: {
    street: "Av. Brasil, 1234",
    neighborhood: "Zona 01",
    city: "Maringá",
    state: "PR",
    stateCode: "BR-PR",
    zip: "87013-000",
    country: "BR",
    full: "Av. Brasil, 1234 – Zona 01, Maringá - PR, 87013-000",
  },
  geo: {
    lat: -23.42528,
    lng: -51.93861,
  },
  hours: "24 horas",
  hoursDisplay: "Segunda a Domingo, 24 horas",
  priceRange: "$$",
  rating: {
    value: 4.9,
    count: 127,
  },
  social: {
    instagram: "https://www.instagram.com/eletricista_maringa",
    facebook: "https://www.facebook.com/eletricistamaringapr",
  },
} as const;

/** Returns "na" for feminine-starting names (Zona, Área, Chácara), "no" otherwise */
export function getPreposition(name: string): string {
  const feminineStarts = ["zona", "área", "chácara"];
  const lower = name.toLowerCase();
  return feminineStarts.some((f) => lower.startsWith(f)) ? "na" : "no";
}
