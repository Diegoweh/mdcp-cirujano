export const siteConfig = {
  name: "MDCP | Dr. Mauricio de la Concha",
  shortName: "MDCP",
  title:
    "Dr. Mauricio de la Concha | Cirujano Plastico en Mazatlan, Sinaloa",
  description:
    "Cirujano plastico en Mazatlan, Sinaloa. El Dr. Mauricio de la Concha ofrece blefaroplastia, lipoescultura, aumento de busto y tratamientos faciales con enfoque estetico, seguridad y atencion personalizada.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000",
  ogImage: "/img/bg-hero.webp",
  locale: "es_MX",
  phoneDisplay: "+52 1 669 244 4646",
  whatsappHref:
    "https://wa.me/5216692444646?text=Hola%2C%20me%20gustaria%20agendar%20una%20cita%20por%20favor.",
  address: {
    streetAddress: "Av. Rafael Buelna No. 1000, 2.o piso, Int. 31",
    addressLocality: "Mazatlan",
    addressRegion: "Sinaloa",
    postalCode: "82110",
    addressCountry: "MX",
  },
  areaServed: ["Mazatlan", "Sinaloa"],
  sameAs: [
    "https://www.facebook.com/cirujanoplastico.mdcp",
    "https://www.instagram.com/drmauriciodelaconcha/",
  ],
  keywords: [
    "cirujano plastico en Mazatlan",
    "cirugia plastica Mazatlan",
    "blefaroplastia Mazatlan",
    "lipoescultura Mazatlan",
    "aumento de busto Mazatlan",
    "tratamientos faciales Mazatlan",
    "cirujano plastico Sinaloa",
    "Dr. Mauricio de la Concha",
  ],
} as const
