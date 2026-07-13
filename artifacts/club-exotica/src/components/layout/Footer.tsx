import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 mb-24">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="font-serif text-3xl mb-6 text-foreground tracking-widest uppercase">Exotica</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8 max-w-sm">
              The world’s most extraordinary destinations, curated for those who expect nothing less than perfection.
            </p>
          </div>
          
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] mb-8 text-primary">Discover</h3>
            <ul className="space-y-4">
              <li><Link href="/destinations" className="text-foreground/70 hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link href="/experiences" className="text-foreground/70 hover:text-primary transition-colors">Experiences</Link></li>
              <li><Link href="/gallery" className="text-foreground/70 hover:text-primary transition-colors">Travel Journal</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] mb-8 text-primary">Curate</h3>
            <ul className="space-y-4">
              <li><Link href="/memberships" className="text-foreground/70 hover:text-primary transition-colors">Member Privileges</Link></li>
              <li><Link href="/testimonials" className="text-foreground/70 hover:text-primary transition-colors">Stories</Link></li>
              <li><Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">The Curators</Link></li>
              <li><Link href="/book" className="text-foreground/70 hover:text-primary transition-colors">Begin Planning</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] mb-8 text-primary">Inquiries</h3>
            <ul className="space-y-4">
              <li className="text-foreground/70 font-light">+1 (800) 555-0199</li>
              <li className="text-foreground/70 font-light">curator@clubexotica.com</li>
              <li className="text-foreground/70 font-light mt-4">New York · London · Dubai</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs font-light text-muted-foreground uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Club Exotica. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
