import { Link } from 'wouter';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 py-8 pb-12 mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="glass-card rounded-[40px] p-12 md:p-20 shadow-apple"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-5 flex flex-col gap-6">
              <Link href="/">
                <span className="font-serif text-4xl tracking-wide text-foreground">Exotica</span>
              </Link>
              <p className="text-muted-foreground text-lg max-w-sm">
                Private journeys, iconic destinations, and extraordinary experiences curated for the world's most discerning travelers.
              </p>
            </div>
            
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="flex flex-col gap-4">
                <h4 className="font-medium text-sm text-foreground tracking-wider uppercase">Platform</h4>
                <Link href="/destinations"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Destinations</span></Link>
                <Link href="/experiences"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Experiences</span></Link>
                <Link href="/memberships"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Memberships</span></Link>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-medium text-sm text-foreground tracking-wider uppercase">Company</h4>
                <Link href="/about"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">About Us</span></Link>
                <Link href="/testimonials"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Stories</span></Link>
                <Link href="/gallery"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Gallery</span></Link>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-medium text-sm text-foreground tracking-wider uppercase">Connect</h4>
                <Link href="/book"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Apply</span></Link>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Club Exotica. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
