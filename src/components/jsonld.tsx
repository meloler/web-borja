import { SITE } from "@/lib/site";
import { FAQS } from "@/lib/content";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/icon.png`,
    sameAs: [SITE.instagram],
  };

  const local = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    image: `${SITE.url}/opengraph-image`,
    url: SITE.url,
    "@id": `${SITE.url}#localbusiness`,
    telephone: SITE.phone,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "CrossFit 928",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    areaServed: ["Gran Canaria", "Islas Canarias", "España", "Online"],
    serviceType: [
      "Nutrición online",
      "Nutrición deportiva",
      "Recomposición corporal",
      "Pérdida de grasa",
    ],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Borja Galván",
    jobTitle: "Dietista-Nutricionista",
    worksFor: { "@type": "Organization", name: SITE.name },
    url: SITE.url,
    sameAs: [SITE.instagram],
    knowsAbout: [
      "Nutrición deportiva",
      "Composición corporal",
      "Pérdida de grasa",
      "Recomposición corporal",
      "Alimentación flexible",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE.url,
    name: SITE.name,
    inLanguage: "es-ES",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(local) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
