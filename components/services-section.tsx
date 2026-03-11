import Image from "next/image"
import Link from "next/link"
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal"
import { whatsappHref } from "@/lib/whatsapp"

const services = [
  {
    image: "/img/service-1.webp",
    title: "Lipoescultura",
    description:
      "Técnica que remodela y define el contorno corporal mediante la eliminación de grasa localizada en zonas específicas. Permite estilizar la silueta y mejorar la proporción corporal de manera personalizada.",
  },
  {
    image: "/img/service-2.webp",
    title: "Blefaroplastía",
    description:
      "Cirugía estética de párpados que elimina el exceso de piel y bolsas de grasa en párpados superiores e inferiores. Ayuda a rejuvenecer la mirada, aportando un aspecto más descansado y fresco.",
  },
  {
    image: "/img/service-3.webp",
    title: "Aumento de Busto",
    description:
      "Mejora el tamaño, forma y proyección del busto mediante implantes. Diseñado para lograr una apariencia armónica y natural, adaptada a la anatomía y expectativas de cada paciente.",
  },
  {
    image: "/img/service-4.webp",
    title: "Tratamientos Faciales",
    description:
      "Procedimientos estéticos diseñados para rejuvenecer y armonizar el rostro, desde opciones no quirúrgicas como botox, rellenos, hasta cirugías como lifting facial y lipopapada.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-[#ece8e3] py-20 px-6 md:px-12 lg:px-20">
      <Reveal>
        <h3 className="mt-5 mb-3 flex justify-center text-2xl text-[#838383] uppercase md:text-3xl">
          Nuestros servicios
        </h3>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mb-6 text-center text-3xl font-semibold text-[#3a3a3a] md:text-4xl lg:text-5xl">
          {"¿Qué podemos hacer por ti?"}
        </h2>
      </Reveal>
      <Reveal delay={0.14}>
        <div className="mt-3 mb-14 flex justify-center">
          <div className="max-w-sm w-full rounded bg-[#959083] py-1" />
        </div>
      </Reveal>

      <StaggerGroup className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2" stagger={0.16}>
        {services.map((service) => (
          <StaggerItem key={service.title}>
            <ServiceCard {...service} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}

function ServiceCard({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#d6d0c9]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>      

      <h3 className="text-3xl md:text-4xl text-[#959083] font-semibold mt-5 mb-3">
        {title}
      </h3>

      <p className="text-[#5a5650] text-sm leading-relaxed mb-5">
        {description}
      </p>

      <Link
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center self-start rounded-full border border-[#a09888] px-5 py-2 text-xs tracking-wide text-[#5a5650] transition-colors hover:bg-[#a09888] hover:text-[#fff]"
      >
        Conoce más
      </Link>
    </div>
  )
}
