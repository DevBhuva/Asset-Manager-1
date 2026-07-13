import { motion } from 'framer-motion';

const images = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/amalfi.jpg',
  '/images/kyoto.jpg',
  '/images/santorini.jpg',
  '/images/maldives.jpg',
  '/images/alps.jpg',
  '/images/private-island.jpg',
  '/images/hero-resort.jpg'
];

export function Gallery() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-[1600px] mx-auto min-h-screen">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6">
          The Gallery
        </h1>
      </motion.div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="break-inside-avoid relative rounded-[32px] overflow-hidden group shadow-apple"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src={src} 
              alt={`Gallery Image ${i + 1}`}
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
