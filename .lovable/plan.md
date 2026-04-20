

# Plan: SEO Schema Avancado + Dados Centralizados

## Resumo

Centralizar dados reais do negocio, criar gerador de schemas JSON-LD multi-camada, adicionar coordenadas aos bairros e substituir todos os placeholders de telefone/WhatsApp/email.

## Arquivos a criar

### 1. `src/data/business-info.ts`
Constantes centralizadas do negocio:
- phone, phoneDisplay, whatsapp, whatsappUrl, email, site, address, geo, hours, rating, social links (Instagram/Facebook)
- Helper `getPreposition(name)` movido para ca (atualmente duplicado em ServicoTemplate e BairroTemplate)

### 2. `src/components/seo/SchemaGenerator.tsx`
Componente que renderiza `<script type="application/ld+json">` no corpo da pagina com schemas interligados:

| Schema | Dados |
|--------|-------|
| **Organization** | name, url, logo, telephone, email, sameAs (Instagram, Facebook), contactPoint |
| **LocalBusiness** | geo (do bairro ou sede), address NAP, openingHours 24h, priceRange, aggregateRating 4.9/127 |
| **WebPage** | name, url, isPartOf WebSite, breadcrumb, speakable (h1 + descricao) |
| **BreadcrumbList** | Hierarquia dinamica via props |
| **Service** | (quando servico passado) provider, areaServed GeoCircle 3km, availableChannel WhatsApp |
| **FAQPage** | (quando faqs passado) Question/Answer array |

Props: `{ pageTitle, pageDescription, pageUrl, breadcrumbs, bairro?, servico?, faqs? }`

### 3. Expandir `src/data/bairrosConfig.ts`
Adicionar `lat`, `lng`, `cep` a `BairroConfig` com coordenadas reais dos 67 bairros de Maringa.

## Arquivos a modificar (substituir placeholders por `BUSINESS.*`)

Todos os numeros `5591999639922` e dados de contato incorretos serao substituidos pelo real `5544997398826`:

| Arquivo | Substituicoes |
|---------|--------------|
| `src/components/Navbar.tsx` | 2x WhatsApp URL |
| `src/components/Hero.tsx` | 1x WhatsApp URL |
| `src/components/Services.tsx` | 1x WhatsApp URL |
| `src/components/Footer.tsx` | telefone display, endereco |
| `src/components/WhatsAppButton.tsx` | WhatsApp URL |
| `src/components/ContactForm.tsx` | telefone, email, endereco |
| `src/pages/Contato.tsx` | telefone, email, endereco, WhatsApp URL |
| `src/pages/Privacidade.tsx` | WhatsApp URL + numero display |
| `src/pages/OndeAtendemos.tsx` | se houver WhatsApp |
| `src/pages/bairros/BairroTemplate.tsx` | `WHATSAPP` const + adicionar `<SchemaGenerator>` com meta geo via useEffect |
| `src/pages/servicos/ServicoTemplate.tsx` | `WHATSAPP` const + adicionar `<SchemaGenerator>` com meta geo via useEffect |

### Meta tags geo (via useEffect no head)
Nas paginas de bairro e servico+bairro, injetar dinamicamente:
```html
<meta name="geo.position" content="{lat};{lng}" />
<meta name="geo.region" content="BR-PR" />
<meta name="ICBM" content="{lat}, {lng}" />
<meta name="geo.placename" content="{Bairro}, Maringa - PR" />
```

Sem dependencia externa (useEffect para manipular `document.head` diretamente).

## Detalhes tecnicos

- Total: ~3 arquivos novos + ~11 arquivos modificados
- Sem novas dependencias (sem react-helmet-async)
- O SchemaGenerator usa `useEffect` + `document.head` para meta tags geo e `dangerouslySetInnerHTML` para JSON-LD
- Social links ja existentes no Footer e Contato serao mantidos, apenas centralizados via BUSINESS

