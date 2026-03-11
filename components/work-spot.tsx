import Image from "next/image"
import Link from "next/link"
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal"
import { whatsappHref } from "@/lib/whatsapp"

export function WorkSpot() {
  return (
    <section
      id="acerca"
      className="bg-[#ece8e3] py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14 lg:gap-20">        

          {/* Text Content */}
          <StaggerGroup className="w-full" stagger={0.12}>
            <StaggerItem>
              <p className="text-xl font-bold tracking-[0.25em] text-[#9b988e] uppercase md:text-2xl">
                Tu imagen y bienestar merecen estar en manos expertas
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-5 text-lg leading-relaxed text-foreground md:leading-relaxed">
                {"Si tienes dudas sobre cualquier tratamiento estético o cirugía, por favor siéntete libre de contactarnos."}
              </p>
            </StaggerItem>

            {/* <p className="mt-6 text-xl leading-relajada text-foreground sm:text-lg md:text-xl md:leading-relaxed">
              {"Mi compromiso es ofrecerte un servicio integral, basado en la seguridad, la ética profesional y la atención personalizada, para que puedas sentirte cómoda, segura y plena con tu propio ser."}
            </p> */}

            <StaggerItem>
              <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
              {/* <Link
                href="#servicios"
                className="inline-block rounded-full border border-[#838383] px-7 py-3 text-sm font-medium tracking-wide text-[#838383] transition-colors hover:border-foreground hover:bg-[#838383] hover:text-[#ece8e3]"
              >
                Ver Servicios
              </Link> */}
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[#9b988e] px-7 py-3 text-sm font-medium tracking-wide text-[#ece8e3] transition-colors hover:bg-[#33312b] hover:text-[#ece8e3]"
              >
                Contacto
              </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>

          {/* Image */}
          <Reveal className="w-full shrink-0 md:w-[45%]" direction="right">
            <div className="relative aspect-[7/8] w-full overflow-hidden rounded-2xl">
              <Image
                src="/img/workspot.webp"
                alt="Dr. Mauricio de la Concha en su consultorio"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
