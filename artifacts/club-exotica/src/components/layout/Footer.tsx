import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-24">
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-3xl tracking-widest uppercase inline-block mb-6">
              Club Exotica
            </Link>
            <p className="text-primary-foreground/60 max-w-md text-lg leading-relaxed font-serif">
              Curating the world's most extraordinary destinations for the few who expect nothing less than perfection.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/destinations" className="text-primary-foreground/80 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/experiences" className="text-primary-foreground/80 hover:text-white transition-colors">Experiences</Link></li>
              <li><Link href="/memberships" className="text-primary-foreground/80 hover:text-white transition-colors">Memberships</Link></li>
              <li><Link href="/gallery" className="text-primary-foreground/80 hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/testimonials" className="text-primary-foreground/80 hover:text-white transition-colors">Journals</Link></li>
              <li><Link href="/book" className="text-primary-foreground/80 hover:text-white transition-colors">Inquiries</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Club Exotica. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
