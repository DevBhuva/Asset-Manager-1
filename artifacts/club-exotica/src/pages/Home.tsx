import { Link } from 'wouter';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const destinations = [
  {
    id: 1,
    title: 'Amalfi Coast, Italy',
    price: 'From $12,500',
    image: '/images/amalfi.jpg',
    rating: '5.0',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 2,
    title: 'Kyoto, Japan',
    price: 'From $8,200',
    image: '/images/kyoto.jpg',
    rating: '4.9',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    title: 'Santorini, Greece',
    price: 'From $9,400',
    image: '/images/santorini.jpg',
    rating: '4.9',
    span: 'col-span-1 row-span-1'
  }
];

export function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="w-full" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center p-4 sm:p-8">
        <motion.div 
          className="absolute inset-4 rounded-[40px] overflow-hidden"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-black/20 z-10 mix-blend-overlay" />
          <img 
            src="/images/hero.jpg" 
            alt="Luxury Resort" 
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

        <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="glass-card rounded-[40px] p-10 md:p-16 max-w-3xl mx-auto shadow-apple"
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-none mb-6">
              The World,<br />Perfectly Curated.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 font-sans mb-10 max-w-xl mx-auto">
              Private journeys, iconic destinations, extraordinary experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book">
                <span className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-foreground rounded-full hover:bg-foreground/90 btn-press w-full sm:w-auto cursor-pointer">
                  Begin Your Journey
                </span>
              </Link>
              <Link href="/destinations">
                <span className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground bg-white/80 backdrop-blur-md rounded-full hover:bg-white btn-press w-full sm:w-auto shadow-apple-sm cursor-pointer">
                  Explore Collection
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 sm:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-8">
            Redefining the Art of Travel
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We don't sell vacations. We design life-defining moments. Our access is unprecedented, our taste impeccable, and our execution flawless. Welcome to a world where every detail is considered, and nothing is left to chance.
          </p>
        </motion.div>
      </section>

      {/* Featured Destinations (iOS Widget Style) */}
      <section className="py-20 px-4 sm:px-8 max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-12 px-2">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Featured Collection</h2>
          <Link href="/destinations">
            <span className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors cursor-pointer group">
              View All <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px]">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              className={`relative rounded-[36px] overflow-hidden group cursor-pointer shadow-apple ${dest.span}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <img 
                src={dest.image} 
                alt={dest.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end">
                <div className="glass-card rounded-2xl p-6 flex justify-between items-end transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-1">{dest.title}</h3>
                    <p className="text-muted-foreground text-sm font-medium">{dest.price}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-white">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Experience Teaser */}
      <section className="py-32 px-4 sm:px-8 max-w-[1400px] mx-auto">
        <motion.div 
          className="relative rounded-[40px] overflow-hidden bg-foreground text-white p-12 md:p-24 flex flex-col items-center text-center shadow-apple"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 opacity-40">
            <img src="/images/private-island.jpg" alt="Texture" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="font-serif text-4xl md:text-6xl mb-6 text-white">More Than a Destination.</h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              We design comprehensive experiences tailored to your personal taste, from private island buyouts to exclusive cultural immersions.
            </p>
            <Link href="/experiences">
              <span className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground bg-white rounded-full hover:bg-white/90 btn-press cursor-pointer">
                Discover Experiences
              </span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
