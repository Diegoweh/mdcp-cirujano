import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  return (
    <section
      id="acerca"
      className="bg-[#ece8e3] py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14 lg:gap-20">
          {/* Image */}
          <div className="w-full shrink-0 md:w-[45%]">
            <div className="relative aspect-[7/8] w-full overflow-hidden rounded-2xl">
              <Image
                src="/img/about.webp"
                alt="Dr. Mauricio de la Concha en su consultorio"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#9b988e] uppercase">
              Acerca de m&iacute;
            </p>

            <p className="mt-5 text-xl leading-relaxed text-foreground sm:text-lg md:text-xl md:leading-relaxed">
              {"Soy el Dr. Mauricio de la Concha, cirujano plástico especializado en blefaroplastía, cirugía de busto y lipoescultura, así como en una amplia gama de tratamientos faciales diseñados para realzar tu belleza natural."}
            </p>

            <p className="mt-6 text-xl leading-relaxed text-foreground sm:text-lg md:text-xl md:leading-relaxed">
              {"Mi compromiso es ofrecerte un servicio integral, basado en la seguridad, la ética profesional y la atención personalizada, para que puedas sentirte cómoda, segura y plena con tu propio ser."}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
              <Link
                href="#servicios"
                className="inline-block rounded-full border border-[#9b988e] px-7 py-3 text-sm font-medium tracking-wide text-[#9b988e] transition-colors hover:border-foreground hover:bg-[#9b988e] hover:text-[#ece8e3]"
              >
                Ver Servicios
              </Link>
              <Link
                href="#agenda"
                className="inline-block rounded-full bg-[#9b988e] px-7 py-3 text-sm font-medium tracking-wide text-[#ece8e3] transition-colors hover:bg-[#33312b] hover:text-[#ece8e3]"
              >
                Agenda tu cita
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
