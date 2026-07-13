import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, MapPin, Star } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: 'Amalfi Coast, Italy',
    region: 'Europe',
    price: 'From $12,500',
    image: '/images/amalfi.jpg',
    rating: '5.0',
    tags: ['Villa', 'Culinary', 'Coastal']
  },
  {
    id: 2,
    title: 'Kyoto, Japan',
    region: 'Asia',
    price: 'From $8,200',
    image: '/images/kyoto.jpg',
    rating: '4.9',
    tags: ['Cultural', 'Zen', 'Heritage']
  },
  {
    id: 3,
    title: 'Santorini, Greece',
    region: 'Europe',
    price: 'From $9,400',
    image: '/images/santorini.jpg',
    rating: '4.9',
    tags: ['Romance', 'Sailing', 'Views']
  },
  {
    id: 4,
    title: 'Serengeti, Tanzania',
    region: 'Africa',
    price: 'From $15,000',
    image: '/images/safari.jpg',
    rating: '5.0',
    tags: ['Safari', 'Adventure', 'Nature']
  },
  {
    id: 5,
    title: 'Maldives',
    region: 'Indian Ocean',
    price: 'From $18,500',
    image: '/images/maldives.jpg',
    rating: '4.9',
    tags: ['Overwater', 'Diving', 'Remote']
  },
  {
    id: 6,
    title: 'Swiss Alps',
    region: 'Europe',
    price: 'From $11,200',
    image: '/images/alps.jpg',
    rating: '4.8',
    tags: ['Ski', 'Chalet', 'Alpine']
  }
];

export function Destinations() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-[1400px] mx-auto min-h-screen">
      <motion.div 
        className="max-w-4xl mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6">
          The Collection
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          An impeccably curated selection of the world's most extraordinary destinations, available exclusively to our members.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest, i) => (
          <motion.div
            key={dest.id}
            className="group relative rounded-[36px] overflow-hidden bg-card border border-border shadow-apple smooth-hover hover:shadow-apple-hover"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={dest.image} 
                alt={dest.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 glass-pill px-4 py-1.5 rounded-full flex items-center gap-1">
                <Star size={14} className="text-primary fill-primary" />
                <span className="text-sm font-medium text-foreground">{dest.rating}</span>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="glass-card rounded-[28px] p-6 flex flex-col gap-4">
                <div>
                  <div className="flex items-center gap-1 text-muted-foreground mb-2">
                    <MapPin size={14} />
                    <span className="text-xs font-medium uppercase tracking-wider">{dest.region}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-1">{dest.title}</h3>
                  <p className="text-muted-foreground text-sm font-medium">{dest.price}</p>
                </div>
                
                <div className="flex items-center justify-between mt-2 pt-4 border-t border-border/50">
                  <div className="flex gap-2">
                    {dest.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/book?destination=${encodeURIComponent(dest.title)}`}>
                    <button className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-white hover:bg-foreground/90 transition-colors btn-press">
                      <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
