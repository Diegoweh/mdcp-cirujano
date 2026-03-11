"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type RevealDirection = "up" | "down" | "left" | "right" | "none"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: RevealDirection
  distance?: number
  once?: boolean
}

type StaggerGroupProps = {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
}

function getOffset(direction: RevealDirection, distance: number) {
  switch (direction) {
    case "down":
      return { x: 0, y: -distance }
    case "left":
      return { x: distance, y: 0 }
    case "right":
      return { x: -distance, y: 0 }
    case "none":
      return { x: 0, y: 0 }
    case "up":
    default:
      return { x: 0, y: distance }
  }
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 28,
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const offset = getOffset(direction, distance)

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, ...offset }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: prefersReducedMotion ? 0 : duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup({
  children,
  className,
  delay = 0,
  stagger = 0.14,
  once = true,
}: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: prefersReducedMotion
            ? { delayChildren: 0 }
            : { delayChildren: delay, staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 28,
  duration = 0.7,
}: Omit<RevealProps, "delay" | "once">) {
  const prefersReducedMotion = useReducedMotion()
  const offset = getOffset(direction, distance)

  return (
    <motion.div
      className={className}
      variants={{
        hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: prefersReducedMotion ? 0 : duration,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
