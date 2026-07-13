import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check } from "lucide-react";

export function Memberships() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-background">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-8 text-primary">The Inner Circle</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            More than a service, an invitation to a life less ordinary. Our memberships are strictly limited to ensure uncompromising attention for each family we serve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Tier 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-border bg-card p-12 flex flex-col"
          >
            <div className="mb-12">
              <h2 className="font-serif text-3xl text-primary mb-4">Voyager</h2>
              <p className="text-muted-foreground">For those who travel often and expect perfection at every turn.</p>
            </div>
            
            <ul className="space-y-6 mb-16 flex-grow">
              {[
                "Dedicated Private Travel Concierge",
                "Priority booking at all partnered resorts",
                "Complimentary room upgrades when available",
                "Exclusive access to unlisted properties",
                "Curated local experiences and reservations",
                "24/7 global support during travel"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-4 text-foreground/80">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="/book?type=membership_voyager" 
              className="block text-center border border-primary px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-colors"
            >
              Apply for Voyager
            </Link>
          </motion.div>

          {/* Tier 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary text-primary-foreground p-12 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="text-xs tracking-[0.2em] uppercase text-accent font-semibold">Invitation Only</span>
            </div>
            <div className="mb-12 relative z-10">
              <h2 className="font-serif text-3xl text-white mb-4">Exotica Reserve</h2>
              <p className="text-white/70">The ultimate expression of luxury travel. Strictly capped at 100 members globally.</p>
            </div>
            
            <ul className="space-y-6 mb-16 flex-grow relative z-10">
              {[
                "All Voyager privileges included",
                "Senior Partner as your personal travel director",
                "Guaranteed upgrades at all properties",
                "Access to the Reserve Private Aviation Fleet",
                "Bespoke private island buy-out facilitation",
                "Invitations to exclusive global events",
                "Blank-canvas itinerary design"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-4 text-white/90">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="/book?type=membership_reserve" 
              className="block text-center border border-white/30 px-8 py-4 text-sm tracking-[0.2em] uppercase bg-white text-primary hover:bg-transparent hover:text-white transition-colors relative z-10"
            >
              Request Invitation
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
