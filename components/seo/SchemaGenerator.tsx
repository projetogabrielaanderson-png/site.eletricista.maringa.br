"use client";

import { useEffect } from "react";
import { BUSINESS } from "@/data/business-info";
import { servicosConfig } from "@/data/servicosConfig";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaProps {
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
  breadcrumbs: BreadcrumbItem[];
  bairro?: { name: string; lat?: number; lng?: number };
  servico?: { name: string; shortName: string; description: string };
  faqs?: { q: string; a: string }[];
}

const SchemaGenerator = ({ pageTitle, pageDescription, pageUrl, breadcrumbs, bairro, servico, faqs }: SchemaProps) => {
  const lat = bairro?.lat ?? BUSINESS.geo.lat;
  const lng = bairro?.lng ?? BUSINESS.geo.lng;

  useEffect(() => {
    if (!bairro) return;
    const metas = [
      { name: "geo.position", content: `${lat};${lng}` },
      { name: "geo.region", content: BUSINESS.address.stateCode },
      { name: "ICBM", content: `${lat}, ${lng}` },
      { name: "geo.placename", content: `${bairro.name}, ${BUSINESS.address.city} - ${BUSINESS.address.state}` },
    ];
    const elements: HTMLMetaElement[] = [];
    for (const m of metas) {
      const el = document.createElement("meta");
      el.setAttribute("name", m.name);
      el.setAttribute("content", m.content);
      document.head.appendChild(el);
      elements.push(el);
    }
    return () => { elements.forEach((el) => el.remove()); };
  }, [bairro, lat, lng]);

  const logoUrl = `${BUSINESS.site}/logo-shema.webp`;
  const imageUrl = `${BUSINESS.site}/og-image.webp`;

  // 1. Organization principal (geral)
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BUSINESS.site}/#organization`,
    name: BUSINESS.name,
    description: "Serviços de eletricista profissional em Maringá - PR. Atendimento 24 horas para instalações, manutenção e emergências elétricas.",
    url: BUSINESS.site,
    logo: {
      "@type": "ImageObject",
      "@id": `${BUSINESS.site}/#logo`,
      url: logoUrl,
      contentUrl: logoUrl,
      caption: BUSINESS.name,
      inLanguage: "pt-BR",
      width: "512",
      height: "512",
    },
    image: { "@id": `${BUSINESS.site}/#logo` },
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS.address.street} – ${BUSINESS.address.neighborhood}`,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        contactType: "customer service",
        areaServed: { "@type": "Country", name: "BR" },
        availableLanguage: "pt-BR",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      "@id": "https://www.wikidata.org/wiki/Q192301",
      "name": "Maringá - PR"
    },
    founder: {
      "@type": "Person",
      name: "Sandro Santos"
    },
  };

  // 2. LocalBusiness principal (sede)
  const localBusinessMain = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician"],
    "@id": `${BUSINESS.site}/#localbusiness`,
    name: BUSINESS.name,
    description: "Eletricista profissional em Maringá. Instalação, manutenção e reparos elétricos residenciais, comerciais e industriais. Atendimento 24h.",
    url: BUSINESS.site,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: "BRL",
    paymentAccepted: "Dinheiro, Cartão de Crédito, Cartão de Débito, Pix",
    image: imageUrl,
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
    slogan: "Eletricista 24 horas em Maringá com atendimento rápido",
    knowsAbout: [
      "instalação elétrica",
      "curto-circuito",
      "quadro de distribuição",
      "chuveiro elétrico",
      "manutenção preventiva",
      "padrão Copel"
    ],
    logo: { "@id": `${BUSINESS.site}/#logo` },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS.address.street} – ${BUSINESS.address.neighborhood}`,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@id": `${BUSINESS.site}/#rating-1`, "@type": "Rating", ratingValue: 5, bestRating: 5 },
        author: { "@type": "Person", name: "Sandro Santos" },
        reviewBody: "Profissional excelente, resolveu o problema rapidamente. Muito recomendado!",
        datePublished: "2025-11-15",
      },
      {
        "@type": "Review",
        reviewRating: { "@id": `${BUSINESS.site}/#rating-2`, "@type": "Rating", ratingValue: 5, bestRating: 5 },
        author: { "@type": "Person", name: "Rafael M." },
        reviewBody: "Serviço rápido e de qualidade. Preço justo e profissional muito educado.",
        datePublished: "2025-12-03",
      },
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      "@id": "https://www.wikidata.org/wiki/Q192301",
      "name": "Maringá - PR"
    },
    serviceArea: {
      "@type": "AdministrativeArea",
      "name": "Maringá e região"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Elétricos",
      itemListElement: servicosConfig.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          url: `${BUSINESS.site}/servicos/${s.slug}`,
        },
      })),
    },
  };

  const schemas: object[] = [organization, localBusinessMain];

  // 3. LocalBusiness específico do bairro (como o concorrente faz)
  if (bairro) {
    const bairroLocalBusiness = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "Electrician"],
      "@id": `${pageUrl}/#localbusiness`,
      name: bairro ? `Eletricista no ${bairro.name}` : pageTitle,
      description: pageDescription,
      url: pageUrl,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      priceRange: BUSINESS.priceRange,
      currenciesAccepted: "BRL",
      paymentAccepted: "Dinheiro, Cartão de Crédito, Cartão de Débito, Pix",
      image: imageUrl,
      logo: { "@id": `${BUSINESS.site}/#logo` },
      parentOrganization: { "@id": `${BUSINESS.site}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: `${BUSINESS.address.street} – ${BUSINESS.address.neighborhood}`,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        postalCode: BUSINESS.address.zip,
        addressCountry: BUSINESS.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.lat,
        longitude: BUSINESS.geo.lng,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: BUSINESS.rating.value,
        reviewCount: BUSINESS.rating.count,
        bestRating: 5,
        worstRating: 1,
      },
      review: [
        {
          "@type": "Review",
          reviewRating: { "@id": `${pageUrl}/#rating-1`, "@type": "Rating", ratingValue: 5, bestRating: 5 },
          author: { "@type": "Person", name: "Sandro Santos" },
          reviewBody: "Profissional excelente, resolveu o problema rapidamente. Muito recomendado!",
          datePublished: "2025-11-15",
        },
        {
          "@type": "Review",
          reviewRating: { "@id": `${pageUrl}/#rating-2`, "@type": "Rating", ratingValue: 5, bestRating: 5 },
          author: { "@type": "Person", name: "Rafael M." },
          reviewBody: "Serviço rápido e de qualidade. Preço justo e profissional muito educado.",
          datePublished: "2025-12-03",
        },
      ],
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: lat, longitude: lng },
        geoRadius: 3000,
      },
    };
    schemas.push(bairroLocalBusiness);
  }

  // 4. BreadcrumbList com @id (como concorrente)
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}/#breadcrumb`,
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: {
        "@type": "Thing",
        "@id": b.url,
        name: b.name,
      },
    })),
  };
  schemas.push(breadcrumbList);

  // 5. WebPage
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${BUSINESS.site}/#website`,
      name: BUSINESS.name,
      url: BUSINESS.site,
      publisher: { "@id": `${BUSINESS.site}/#organization` },
      inLanguage: "pt-BR",
    },
    breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    primaryImageOfPage: { "@type": "ImageObject", url: imageUrl },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
  };
  schemas.push(webPage);

  // 6. Service (quando tem serviço)
  if (servico) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: servico.name,
      description: servico.description,
      serviceType: "Electrician",
      provider: { "@id": `${BUSINESS.site}/#localbusiness` },
      areaServed: bairro
        ? {
            "@type": "GeoCircle",
            geoMidpoint: { "@type": "GeoCoordinates", latitude: lat, longitude: lng },
            geoRadius: 3000,
          }
        : { "@type": "AdministrativeArea", name: "Maringá - PR" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: BUSINESS.whatsappUrl,
        servicePhone: BUSINESS.phone,
        serviceSmsNumber: BUSINESS.phone,
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "BRL",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "BRL",
        },
      },
    });
  }

  // 7. FAQPage
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { 
          "@type": "Answer", 
          text: f.a.replace(/<[^>]*>/g, "") 
        },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default SchemaGenerator;
