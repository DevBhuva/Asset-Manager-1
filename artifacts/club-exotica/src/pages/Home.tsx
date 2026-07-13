import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: y1 }}
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            src="/attached_assets/generated_images/hero.jpg" 
            alt="Luxury resort overlooking ocean" 
            className="w-full h-[120%] object-cover object-center"
          />
        </motion.div>
        
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center pt-24 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 text-white/80">The Art of Travel</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 text-balance">
              Beyond the <br/> Extraordinary.
            </h1>
            <Link 
              href="/destinations"
              className="inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase border-b border-white/30 pb-2 hover:border-white transition-colors"
            >
              Discover the Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 md:py-48 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="font-serif text-3xl md:text-5xl leading-tight text-primary text-balance"
          >
            We curate the most exclusive corners of the earth for those who understand that true luxury lies in the details, the silence, and the unseen.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-16"
          >
            <Link href="/about" className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              Our Philosophy
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-4 text-primary">Curated Sanctuaries</h2>
              <p className="text-muted-foreground max-w-md text-lg">Spaces designed for total immersion, where the world falls away.</p>
            </div>
            <Link href="/destinations" className="text-sm tracking-[0.2em] uppercase pb-1 border-b border-primary/20 hover:border-primary transition-colors whitespace-nowrap">
              View All Destinations
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <DestinationCard 
              image="/attached_assets/generated_images/maldives.jpg"
              title="Maldives"
              subtitle="The Indian Ocean"
              delay={0}
            />
            <DestinationCard 
              image="/attached_assets/generated_images/japan.jpg"
              title="Kyoto"
              subtitle="Japan"
              delay={0.2}
              className="md:mt-24"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h2 className="font-serif text-4xl md:text-5xl mb-8 text-primary">The Art of Anticipation</h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  Our private concierges do not simply book itineraries; they compose experiences. From securing private islands to arranging after-hours access to the world's most revered cultural sites, we make the impossible effortless.
                </p>
                <Link href="/experiences" className="inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase border border-primary px-8 py-4 hover:bg-primary hover:text-white transition-all duration-300">
                  Explore Experiences
                </Link>
              </motion.div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <motion.div 
                className="aspect-[4/5] overflow-hidden bg-muted"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <img 
                  src="/attached_assets/generated_images/wellness.jpg" 
                  alt="Luxury spa interior" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DestinationCard({ image, title, subtitle, delay, className = "" }: { image: string, title: string, subtitle: string, delay: number, className?: string }) {
  return (
    <motion.div 
      className={`group cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="overflow-hidden mb-6 aspect-[4/3] bg-muted">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-serif text-3xl mb-2 text-primary">{title}</h3>
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">{subtitle}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors transform group-hover:translate-x-2" />
      </div>
    </motion.div>
  );
}
