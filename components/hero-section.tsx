import Image from "next/image"
import Link from "next/link"

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
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Una nueva versión de ti mismo
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed font-light tracking-wide text-white/85 sm:text-base md:mt-8 md:text-lg">
          {"La perfección no consiste en cambiar, si no en encontrar el equilibrio."}
          <br />
          {"La verdadera belleza reside en la armonía y la precisión."}
        </p>

        <div className="mt-8 md:mt-10">
          <Link
            href="#agenda"
            className="inline-block border border-white px-7 py-3 text-[10px] font-semibold tracking-[0.25em] text-white uppercase transition-colors hover:bg-white hover:text-gray-800 sm:text-xs sm:px-8 sm:py-3.5 rounded-3xl"
          >
            Agenda tu cita de valoración
          </Link>
        </div>
      </div>
    </section>
  )
}
