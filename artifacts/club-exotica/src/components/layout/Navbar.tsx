import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/destinations', label: 'Destinations' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/memberships', label: 'Memberships' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Stories' },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 sm:px-6 transition-all duration-500 ease-out`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div 
          className={`flex items-center justify-between px-6 py-3 w-full max-w-5xl rounded-full transition-all duration-500 ${
            isScrolled ? 'glass-pill' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-50">
            <span className="font-serif text-2xl tracking-wide text-foreground">Exotica</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? 'text-primary' : 'text-foreground/80'
                }`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block flex-shrink-0">
            <Link href="/book">
              <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-foreground rounded-full hover:bg-foreground/90 btn-press">
                Apply for Membership
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 -mr-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 glass-card flex flex-col pt-32 px-8 pb-8 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className={`text-2xl font-serif transition-colors ${
                    location === link.href ? 'text-primary' : 'text-foreground'
                  }`}>
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="mt-8">
                <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-medium text-white bg-foreground rounded-full">
                    Apply for Membership
                  </span>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
