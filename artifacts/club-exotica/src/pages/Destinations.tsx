import { motion } from 'framer-motion';
import { useState } from 'react';

const destinations = [
  { id: 'maldives', title: 'Maldives', subtitle: 'Private Atolls', img: '/images/hero-maldives.jpg' },
  { id: 'swiss-alps', title: 'Swiss Alps', subtitle: 'Alpine Chalets', img: '/images/swiss-alps.jpg' },
  { id: 'safari', title: 'Serengeti', subtitle: 'Luxury Safari', img: '/images/safari-luxury.jpg' },
  { id: 'santorini', title: 'Santorini', subtitle: 'Cliffside Villas', img: '/images/santorini-sunset.jpg' },
  { id: 'private-island', title: 'Bora Bora', subtitle: 'Exclusive Islands', img: '/images/private-island.jpg' }
];

export function Destinations() {
  const [hoveredDest, setHoveredDest] = useState(destinations[0].img);

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 text-foreground relative">
      {/* Fixed Background Image that changes on hover */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none transition-opacity duration-1000">
        <motion.img 
          key={hoveredDest}
          src={hoveredDest}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6">
            Destinations <br/><span className="italic text-primary">Beyond Ordinary.</span>
          </h1>
          <p className="font-light text-muted-foreground text-lg max-w-xl">
            A curated selection of the world's most remote, breathtaking, and exclusive locations, reserved for the discerning few.
          </p>
        </motion.div>

        <div className="flex flex-col space-y-8 md:space-y-16">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer border-b border-white/5 pb-8 md:pb-16 flex flex-col md:flex-row md:items-end justify-between"
              onMouseEnter={() => setHoveredDest(dest.img)}
            >
              <div>
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                  {String(i + 1).padStart(2, '0')} — {dest.subtitle}
                </span>
                <h2 className="font-serif text-4xl md:text-6xl text-foreground/50 group-hover:text-foreground transition-colors duration-500">
                  {dest.title}
                </h2>
              </div>
              
              <div className="mt-8 md:mt-0 overflow-hidden w-full md:w-1/3 aspect-[3/2] md:aspect-[4/3] md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 md:translate-y-8 md:group-hover:translate-y-0">
                <img src={dest.img} alt={dest.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
