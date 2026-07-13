import { motion } from "framer-motion";
import { Link } from "wouter";

const destinations = [
  {
    id: "maldives",
    title: "The Maldives",
    region: "Indian Ocean",
    image: "/attached_assets/generated_images/maldives.jpg",
    description: "Endless horizons of turquoise and absolute privacy."
  },
  {
    id: "kyoto",
    title: "Kyoto",
    region: "Japan",
    image: "/attached_assets/generated_images/japan.jpg",
    description: "Centuries of tradition distilled into perfect serenity."
  },
  {
    id: "santorini",
    title: "Santorini",
    region: "Greece",
    image: "/attached_assets/generated_images/santorini.jpg",
    description: "Whitewashed architecture suspended over the Aegean."
  },
  {
    id: "dubai",
    title: "Dubai",
    region: "UAE",
    image: "/attached_assets/generated_images/dubai.jpg",
    description: "Where impossible architectural dreams touch the sky."
  },
  {
    id: "bali",
    title: "Ubud",
    region: "Bali",
    image: "/attached_assets/generated_images/bali.jpg",
    description: "A sanctuary hidden deep within emerald rainforests."
  },
  {
    id: "alps",
    title: "The Swiss Alps",
    region: "Switzerland",
    image: "/attached_assets/generated_images/switzerland.jpg",
    description: "Pristine powder, roaring fires, and alpine perfection."
  },
  {
    id: "paris",
    title: "Paris",
    region: "France",
    image: "/attached_assets/generated_images/paris.jpg",
    description: "The capital of romance, elegantly redefined."
  }
];

export function Destinations() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:w-2/3"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-8 text-primary">The Collection</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A meticulously curated portfolio of the world's most extraordinary properties. Each destination is chosen not for its popularity, but for its profound ability to change the way you see the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-24">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <Link href={`/book?destination=${dest.id}`} className="block overflow-hidden aspect-[3/4] mb-6 bg-muted relative">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </Link>
              <div className="flex-grow">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">{dest.region}</p>
                <h2 className="font-serif text-3xl mb-4 text-primary">{dest.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{dest.description}</p>
              </div>
              <Link 
                href={`/book?destination=${dest.id}`}
                className="text-sm tracking-[0.2em] uppercase text-primary border-b border-primary/20 pb-1 self-start hover:border-primary transition-colors"
              >
                Inquire
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
