import { Link, useLocation } from "wouter";
import { useIsScrolled } from "@/hooks/use-is-scrolled";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/memberships", label: "Memberships" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "Our Story" },
];

export function Navbar() {
  const isScrolled = useIsScrolled();
  const [location] = useLocation();
  const isHome = location === "/";
  const [isOpen, setIsOpen] = useState(false);

  // If we are on home page, navbar is transparent at top and becomes solid on scroll.
  // On other pages, it's always solid.
  const isTransparent = isHome && !isScrolled && !isOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out border-b",
          isTransparent
            ? "bg-transparent border-transparent text-white"
            : "bg-background/95 backdrop-blur-md border-border text-foreground"
        )}
      >
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl tracking-widest uppercase relative z-50">
              Club Exotica
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-widest uppercase transition-colors hover:text-accent",
                  isTransparent ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className={cn(
                "text-sm tracking-widest uppercase border px-6 py-3 transition-all duration-300",
                isTransparent 
                  ? "border-white/30 hover:border-white hover:bg-white hover:text-black" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              )}
            >
              Inquire
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center pt-24"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="mt-8 text-sm tracking-widest uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 transition-all"
              >
                Inquire Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
