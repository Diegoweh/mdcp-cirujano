import { siteConfig } from "@/lib/site"

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        description: siteConfig.description,
        telephone: siteConfig.phoneDisplay,
        priceRange: "$$$",
        medicalSpecialty: "PlasticSurgery",
        areaServed: siteConfig.areaServed,
        sameAs: siteConfig.sameAs,
        address: {
          "@type": "PostalAddress",
          ...siteConfig.address,
        },
      },
      {
        "@type": "Physician",
        "@id": `${siteConfig.url}/#physician`,
        name: "Dr. Mauricio de la Concha",
        url: siteConfig.url,
        image: `${siteConfig.url}/img/about.webp`,
        telephone: siteConfig.phoneDisplay,
        medicalSpecialty: "PlasticSurgery",
        availableService: [
          { "@type": "MedicalProcedure", name: "Blefaroplastia" },
          { "@type": "MedicalProcedure", name: "Lipoescultura" },
          { "@type": "MedicalProcedure", name: "Aumento de busto" },
          { "@type": "MedicalTherapy", name: "Tratamientos faciales" },
        ],
        worksFor: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "es-MX",
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: [
          { "@id": `${siteConfig.url}/#organization` },
          { "@id": `${siteConfig.url}/#physician` },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
