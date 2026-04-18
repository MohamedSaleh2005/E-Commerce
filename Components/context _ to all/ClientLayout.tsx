"use client"

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Transition from "./Transition"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <Transition key={pathname}>
        {children}
      </Transition>
    </AnimatePresence>
  )
}