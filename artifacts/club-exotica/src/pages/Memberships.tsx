import { motion } from 'framer-motion';
import { Link } from 'wouter';

export function Memberships() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 text-foreground">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 md:mb-32 max-w-3xl"
        >
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
            Member Privileges
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
            An inner circle <br/><span className="italic text-muted-foreground">of global access.</span>
          </h1>
          <p className="font-light text-muted-foreground text-lg leading-relaxed">
            Club Exotica membership is strictly by invitation or referral. It grants access not just to extraordinary places, but to extraordinary treatment—doors open, tables clear, and the impossible becomes routine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5 }}
            className="aspect-[3/4] relative overflow-hidden"
          >
            <img src="/images/private-island.jpg" alt="Exclusive Access" className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="font-serif text-3xl mb-12">The Privileges</h2>
            <ul className="space-y-12">
              {[
                { title: "Priority Access", desc: "First rights to reserve newly discovered properties and limited-edition expeditions before they are announced." },
                { title: "Dedicated Curator", desc: "A singular point of contact who knows your preferences intimately, available 24/7 in any time zone." },
                { title: "Unpublished Rates", desc: "Access to private aviation fleets, superyachts, and exclusive villas at proprietary member pricing." }
              ].map((item, i) => (
                <li key={i} className="border-t border-white/10 pt-6">
                  <h3 className="font-serif text-2xl mb-3 text-primary">{item.title}</h3>
                  <p className="font-light text-muted-foreground">{item.desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="bg-ivory text-black p-16 md:p-24 text-center max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Request an Invitation</h2>
          <p className="font-light text-black/70 mb-10 max-w-lg mx-auto">
            Membership is currently capped to ensure impeccable service for our existing clients. Applications are reviewed quarterly.
          </p>
          <Link href="/book" className="inline-block border border-black px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors duration-300">
            Submit Inquiry
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
