import Image from "next/image"
import { StaggerGroup, StaggerItem } from "@/components/reveal"

export function FinancingSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/img/banner-mdc.webp"
          alt="Cirujano realizando procedimiento"
          fill
          className="object-cover object-left"
        />
        {/* Dark overlay gradient from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/60 via-[#1a1a1a]/85 to-[#1a1a1a]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl items-center px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        {/* Spacer for the left image area */}
        <div className="hidden w-1/2 md:block" />

        {/* Text content - right side */}
        <StaggerGroup className="w-full md:w-1/2" stagger={0.14}>
          <StaggerItem>
            <h2 className="font-sans text-4xl font-bold tracking-tight text-[#c7bfa8] md:text-5xl lg:text-6xl">
              Financia tu
              <br />
              tratamiento.
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white md:text-lg">
              Financiar tu cirugía estética es muy simple. Así podrás
              realizarte el procedimiento que deseas y fraccionar el
              pago hasta 12 meses o como más te convenga.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-8">
              <Image
                src="/img/mend-logo.png"
                alt="Mend - Financiamiento"
                width={140}
                height={50}
                className="h-auto w-28 md:w-36"
              />
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  )
}
