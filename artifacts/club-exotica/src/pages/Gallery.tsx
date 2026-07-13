import { motion } from 'framer-motion';

const journalEntries = [
  { id: 1, title: 'A Morning in the Maldives', img: '/images/hero-maldives.jpg', size: 'large' },
  { id: 2, title: 'Alpine Serenity', img: '/images/swiss-alps.jpg', size: 'small' },
  { id: 3, title: 'The Great Migration', img: '/images/safari-luxury.jpg', size: 'medium' },
  { id: 4, title: 'Santorini Sunsets', img: '/images/santorini-sunset.jpg', size: 'large' },
  { id: 5, title: 'Untouched Horizons', img: '/images/private-island.jpg', size: 'small' },
  { id: 6, title: 'Ocean Charters', img: '/images/yacht-cruise.jpg', size: 'medium' },
  { id: 7, title: 'Arrival by Air', img: '/images/helicopter-arrival.jpg', size: 'large' },
  { id: 8, title: 'Infinity Edges', img: '/images/infinity-pool.jpg', size: 'small' },
];

export function Gallery() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 text-foreground">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
            Travel Journal
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">
            Moments <span className="italic text-muted-foreground">Captured.</span>
          </h1>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {journalEntries.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: (i % 3) * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden"
            >
              <img 
                src={entry.img} 
                alt={entry.title} 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <h3 className="font-serif text-2xl text-white">{entry.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
