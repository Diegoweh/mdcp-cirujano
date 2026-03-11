"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, MessageCircle } from "lucide-react"
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal"
import { whatsappHref } from "@/lib/whatsapp"

const facebookHref = "https://www.facebook.com/cirujanoplastico.mdcp"
const instagramHref = "https://www.instagram.com/drmauriciodelaconcha/"

export function Footer() {
  return (
    <footer className="bg-[#070707] text-white">
      <StaggerGroup className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_1.4fr_1fr] lg:gap-12 lg:px-10" stagger={0.12}>
        <StaggerItem className="flex items-start">
          <Link href="/" className="inline-flex">
            <Image
              src="/img/logo-navbar.png"
              alt="MDCP - Cirugía Plástica, Estética y Reconstructiva"
              width={240}
              height={90}
              className="h-auto w-44 md:w-52"
            />
          </Link>
        </StaggerItem>

        <StaggerItem className="space-y-5">
          <h3 className="text-3xl font-light text-white/90">Contacto</h3>
          <div className="flex items-start gap-4">
            <MessageCircle className="mt-1 h-8 w-8 flex-shrink-0 text-white" />
            <div className="space-y-3">
              <p className="max-w-md text-lg leading-snug font-semibold text-white md:text-xl">
                Escríbenos por WhatsApp para brindarte atención personalizada.
              </p>
              <p className="text-sm tracking-wide text-white/70">
                Aviso COFEPRIS: 2525052002A00033.
              </p>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-white/50 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-white hover:text-black"
              >
                Enviar mensaje
              </Link>
            </div>
          </div>
        </StaggerItem>

        <StaggerItem className="space-y-8 border-t border-white/15 pt-8 lg:border-t-0 lg:pt-0">
          <div className="space-y-1">
            <p className="text-sm font-bold tracking-wide uppercase">
              Plaza El Encanto, El Toreo
            </p>
            <p className="text-sm text-white/80">
              Av. Rafael Buelna No. 1000, 2.º piso, Int. 31, Mazatlán, Sinaloa.
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-bold tracking-wide uppercase">Citas</p>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              WhatsApp: +52 1 669 244 4646
            </Link>
          </div>

          <Reveal className="flex items-center gap-4" delay={0.2} direction="up" distance={18}>
            <Link
              href={facebookHref}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 transition-colors hover:text-white"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href={instagramHref}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 transition-colors hover:text-white"
            >
              <Instagram className="h-6 w-6" />
            </Link>
          </Reveal>
        </StaggerItem>
      </StaggerGroup>
    </footer>
  )
}
