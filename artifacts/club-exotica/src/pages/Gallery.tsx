import { motion } from "framer-motion";

const images = [
  "/attached_assets/generated_images/hero.jpg",
  "/attached_assets/generated_images/gallery-1.jpg",
  "/attached_assets/generated_images/maldives.jpg",
  "/attached_assets/generated_images/gallery-2.jpg",
  "/attached_assets/generated_images/japan.jpg",
  "/attached_assets/generated_images/gallery-3.jpg",
  "/attached_assets/generated_images/dubai.jpg",
  "/attached_assets/generated_images/santorini.jpg",
  "/attached_assets/generated_images/private-island.jpg"
];

export function Gallery() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-background">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-6 text-primary">Visual Journal</h1>
          <p className="text-xl text-muted-foreground">Moments captured from the edge of the world.</p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
              className="break-inside-avoid overflow-hidden bg-muted group cursor-pointer"
            >
              <img 
                src={src} 
                alt="Gallery" 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" 
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
