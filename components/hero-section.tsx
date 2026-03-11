import Image from "next/image"
import Link from "next/link"
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal"
import { whatsappHref } from "@/lib/whatsapp"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img/bg-hero.webp"
        alt=""
        fill
        className="object-cover object-top"
        priority
        quality={90}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#3d3a34]/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <StaggerGroup delay={0.15} stagger={0.16}>
          <StaggerItem>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Una nueva versión de ti mismo
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed tracking-wide text-white/85 sm:text-base md:mt-8 md:text-lg">
              {"La perfección no consiste en cambiar, sino en encontrar el equilibrio."}
              <br />
              {"La verdadera belleza reside en la armonía y la precisión."}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-8 md:mt-10">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-3xl border border-white px-7 py-3 text-[10px] font-semibold tracking-[0.25em] text-white uppercase transition-colors hover:bg-white hover:text-gray-800 sm:px-8 sm:py-3.5 sm:text-xs"
              >
                Agenda tu cita de valoración
              </Link>
            </div>
          </StaggerItem>
        </StaggerGroup>

        <Reveal delay={0.55} direction="up" distance={20}>
          <div className="mx-auto mt-14 h-px w-24 bg-white/35" />
        </Reveal>
      </div>
    </section>
  )
}
