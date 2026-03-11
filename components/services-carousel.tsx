"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

type ServicesCarouselProps = {
  images: string[]
}

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: -dir * 80 }),
}

export function ServicesCarousel({ images }: ServicesCarouselProps) {
  const [pairIndex, setPairIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  if (images.length === 0) return null

  const totalPairs = Math.ceil(images.length / 2)

  const goToNext = () => {
    setDirection(1)
    setPairIndex((prev) => (prev + 1) % totalPairs)
  }

  const goToPrevious = () => {
    setDirection(-1)
    setPairIndex((prev) => (prev - 1 + totalPairs) % totalPairs)
  }

  const firstIdx = pairIndex * 2
  const pair = [images[firstIdx], images[firstIdx + 1] ?? images[0]]

  return (
    <section className="w-full bg-[#ece8e3] px-4 py-14 md:py-20">
      <Reveal className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#959083] uppercase">
            Nuestros servicios
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-[#3a3a3a] md:text-4xl lg:text-5xl">
            Tu belleza en nuestras manos
          </h2>
          <div className="mt-5 h-[2px] w-60 bg-[#959083]" />
        </div>

        {/* Carousel */}
        <div className="relative px-10">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={pairIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {pair.map((src, i) => (
                <div
                  key={i}
                  className="group relative aspect-square overflow-hidden rounded-2xl shadow-md"
                >
                  <Image
                    src={src}
                    alt={`Servicio ${firstIdx + i + 1}`}
                    fill
                    priority={i === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 45vw, 38vw"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          {totalPairs > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2.5 shadow-md text-[#3a3a3a] transition-all duration-200 hover:bg-[#959083] hover:text-white active:scale-95"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2.5 shadow-md text-[#3a3a3a] transition-all duration-200 hover:bg-[#959083] hover:text-white active:scale-95"
                aria-label="Siguiente"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>

        {/* Pagination dots */}
        {totalPairs > 1 && (
          <div className="mt-8 flex justify-center gap-2.5">
            {Array.from({ length: totalPairs }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > pairIndex ? 1 : -1)
                  setPairIndex(index)
                }}
                className={`rounded-full transition-all duration-300 ${
                  index === pairIndex
                    ? "h-2 w-8 bg-[#959083]"
                    : "h-2 w-2 bg-[#959083]/35 hover:bg-[#959083]/65"
                }`}
                aria-label={`Ir al par ${index + 1}`}
              />
            ))}
          </div>
        )}
      </Reveal>
    </section>
  )
}
