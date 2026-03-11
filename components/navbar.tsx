"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { whatsappHref } from "@/lib/whatsapp"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10 lg:py-7">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/img/logo-navbar.png"
            alt="MDCP - Cirugía Plástica, Estética y Reconstructiva"
            width={140}
            height={50}
            className="h-10 w-auto lg:h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#acerca"
            className="text-sm font-medium tracking-widest text-white/90 uppercase transition-colors hover:text-white"
          >
            Acerca de mí
          </Link>
          <Link
            href="#servicios"
            className="text-sm font-medium tracking-widest text-white/90 uppercase transition-colors hover:text-white"
          >
            Nuestros servicios
          </Link>
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-5 py-2.5 text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-gray-800 rounded-3xl"
          >
            Agenda tu cita
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-white/20 bg-foreground/90 backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              <Link
                href="#acerca"
                className="text-sm font-medium tracking-widest text-white uppercase"
                onClick={() => setMobileOpen(false)}
              >
                Acerca de mi
              </Link>
              <Link
                href="#servicios"
                className="text-sm font-medium tracking-widest text-white uppercase"
                onClick={() => setMobileOpen(false)}
              >
                Nuestros servicios
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit border border-white px-5 py-2.5 text-xs font-semibold tracking-widest text-white uppercase"
                onClick={() => setMobileOpen(false)}
              >
                Agenda tu cita
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
