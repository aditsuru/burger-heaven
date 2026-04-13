import { Button } from "@/components/ui/button"

import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { useState } from "react"

const navLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Menu",
    href: "#menu",
  },
  {
    label: "Order Online",
    href: "#order-online",
    className:
      "bg-secondary-foreground p-8 text-background transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
  },
]

export function Navbar() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)

  return (
    <div className="flex items-center justify-between gap-8 p-8 font-bowlby font-medium lg:px-16 xl:px-24">
      <h1 className="text-3xl uppercase">Burger Heaven</h1>
      <div className="hidden items-center justify-evenly gap-8 md:flex xl:gap-16">
        {navLinks.map((item) => (
          <a href={item.href} key={item.href}>
            <Button
              variant="link"
              className={`text-xl font-medium text-foreground uppercase ${item.className}`}
            >
              {item.label}
            </Button>
          </a>
        ))}
      </div>
      <div className="relative z-50 md:hidden">
        <Button
          variant="ghost"
          onClick={() => setIsHamburgerMenuOpen((prev) => !prev)}
        >
          <Menu
            className={`absolute size-8 transition-all duration-300 ${isHamburgerMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
          />
          <X
            className={`absolute size-8 transition-all duration-300 ${isHamburgerMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
          />
        </Button>
        <AnimatePresence mode="wait" initial={false}>
          {isHamburgerMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -5,
              }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -5,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute right-0 mt-1 flex flex-col items-end justify-center gap-4 bg-foreground p-4 text-background"
            >
              {navLinks.map((item) => (
                <a href={item.href} key={item.href}>
                  <Button
                    variant="link"
                    className="text-xl font-medium text-background uppercase"
                  >
                    {item.label}
                  </Button>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
