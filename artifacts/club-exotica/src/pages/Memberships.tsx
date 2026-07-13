import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Check } from 'lucide-react';

const memberships = [
  {
    tier: 'Signature',
    price: '$15,000 / year',
    description: 'For the discerning traveler seeking flawless execution and privileged access.',
    benefits: [
      'Dedicated Travel Advisor',
      'Priority Booking at Partner Properties',
      'Complimentary Room Upgrades (When Available)',
      'Curated Itinerary Design',
      '24/7 Concierge Support During Travel'
    ],
    highlight: false
  },
  {
    tier: 'Centurion',
    price: '$50,000 / year',
    description: 'Unprecedented access to the world\'s most exclusive places and experiences.',
    benefits: [
      'Senior Travel Director',
      'Guaranteed Room Upgrades',
      'Access to Off-Market Villas & Private Islands',
      'Private Aviation Coordination',
      'VIP Airport Meet & Greet Globally',
      'Exclusive Member-Only Events'
    ],
    highlight: true
  }
];

export function Memberships() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-[1200px] mx-auto min-h-screen">
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6">
          Membership
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Entry to Club Exotica is strictly limited to ensure an unparalleled level of service and dedication to every member.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {memberships.map((membership, i) => (
          <motion.div
            key={membership.tier}
            className={`relative rounded-[40px] p-10 md:p-12 flex flex-col ${
              membership.highlight 
                ? 'bg-foreground text-white shadow-apple-hover' 
                : 'glass-card text-foreground shadow-apple'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {membership.highlight && (
              <div className="absolute inset-0 rounded-[40px] border border-primary/50 pointer-events-none" />
            )}
            
            {membership.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase rounded-full">
                By Invitation Only
              </div>
            )}

            <div className="mb-10">
              <h2 className={`font-serif text-4xl mb-2 ${membership.highlight ? 'text-white' : 'text-foreground'}`}>
                {membership.tier}
              </h2>
              <div className={`text-xl mb-4 ${membership.highlight ? 'text-primary' : 'text-foreground/60'}`}>
                {membership.price}
              </div>
              <p className={membership.highlight ? 'text-white/70' : 'text-muted-foreground'}>
                {membership.description}
              </p>
            </div>

            <div className="flex-grow">
              <ul className="space-y-4 mb-10">
                {membership.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm md:text-base">
                    <Check size={20} className={`shrink-0 mt-0.5 ${membership.highlight ? 'text-primary' : 'text-foreground/40'}`} />
                    <span className={membership.highlight ? 'text-white/90' : 'text-foreground/80'}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href={`/book?tier=${membership.tier}`}>
              <button className={`w-full py-4 rounded-full font-medium transition-all btn-press ${
                membership.highlight 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'bg-foreground text-white hover:bg-foreground/90'
              }`}>
                Apply for {membership.tier}
              </button>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-24 text-center max-w-2xl mx-auto glass-card rounded-[32px] p-10 shadow-apple-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-serif text-2xl text-foreground mb-4">Corporate & Family Accounts</h3>
        <p className="text-muted-foreground mb-6">
          Bespoke arrangements are available for family offices, corporations, and multi-generational groups requiring complex itinerary management.
        </p>
        <Link href="/contact">
          <span className="text-primary font-medium hover:underline cursor-pointer">
            Inquire Privately
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
