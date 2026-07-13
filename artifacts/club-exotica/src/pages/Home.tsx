import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { useRef } from 'react';

export function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Simple parallax for hero image
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-background text-foreground min-h-screen">
      {/* Hero Section - Dream */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/images/hero-maldives.jpg" 
            alt="Maldives sunrise" 
            className="w-full h-[120%] object-cover object-center transform -translate-y-[10%]"
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight mb-6 text-white"
          >
            The World, <br/><span className="italic font-light">Curated for the Few.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="text-white/80 font-light tracking-widest uppercase text-sm mb-12 max-w-lg mx-auto"
          >
            An invite-only collection of extraordinary experiences, far beyond the reach of ordinary travel.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/book" className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden border border-white/30 text-white hover:text-black transition-colors duration-500">
              <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-x-100" />
              <span className="relative text-sm tracking-[0.2em] uppercase">Begin Your Journey</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-32 md:py-48 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-serif text-sm text-primary uppercase tracking-[0.3em] mb-6">Discover</h2>
              <h3 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                Where the map ends, <br/>your story begins.
              </h3>
              <p className="text-muted-foreground font-light text-lg leading-relaxed mb-10 max-w-md">
                From uncharted private atolls to snow-draped alpine sanctuaries, we design journeys that transcend the traditional. No two itineraries are alike; every moment is sculpted to your exact desires by a dedicated travel curator.
              </p>
              <Link href="/destinations" className="text-sm uppercase tracking-widest border-b border-primary/30 pb-2 hover:border-primary transition-colors text-foreground hover:text-primary">
                Explore Destinations
              </Link>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/images/safari-luxury.jpg" 
                alt="Luxury Safari" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-12 -left-8 md:-left-16 w-2/3 max-w-sm hidden md:block"
            >
              <img 
                src="/images/helicopter-arrival.jpg" 
                alt="Arrival" 
                className="w-full aspect-[3/2] object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curate Section - Full Bleed */}
      <section className="bg-ivory py-32 md:py-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-serif text-sm text-accent uppercase tracking-[0.3em] mb-6"
            >
              Curate
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto leading-tight text-foreground"
            >
              Experiences beyond the imagination
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Wellness Escapes", img: "/images/wellness-spa.jpg", desc: "Rejuvenate in remote sanctuaries." },
              { title: "Private Expeditions", img: "/images/yacht-cruise.jpg", desc: "Charter the world's finest vessels." },
              { title: "Culinary Heights", img: "/images/dinner-sunset.jpg", desc: "Dine under stars with Michelin chefs." }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <h4 className="font-serif text-2xl mb-2 text-foreground">{item.title}</h4>
                <p className="font-light text-foreground/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 md:py-48 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="aspect-square relative"
          >
            <img src="/images/swiss-alps.jpg" alt="Swiss Alps" className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="font-serif text-sm text-primary uppercase tracking-[0.3em] mb-6">Experience</h2>
            <h3 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              A private world, <br/>unlocked for you.
            </h3>
            <p className="text-muted-foreground font-light text-lg leading-relaxed mb-10 max-w-md">
              Gain access to the inaccessible. From private islands entirely reserved for your family to after-hours tours of the Louvre, our connections open doors that are otherwise closed.
            </p>
            <Link href="/memberships" className="group inline-flex items-center space-x-4">
              <span className="text-sm uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">View Member Privileges</span>
              <span className="w-12 h-[1px] bg-foreground group-hover:bg-primary transition-colors transform group-hover:translate-x-2 duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Remember Section */}
      <section className="py-32 md:py-48 px-8 md:px-16 max-w-7xl mx-auto border-t border-white/5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-sm text-primary uppercase tracking-[0.3em] mb-6">Remember</h2>
          <h3 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Moments that outlive <br/><span className="italic">the journey.</span>
          </h3>
          <p className="text-muted-foreground font-light text-lg leading-relaxed mb-10">
            The finest souvenirs are not objects, but stories. Our journal captures the fleeting, unforgettable moments of our members' travels across the globe.
          </p>
          <Link href="/gallery" className="group inline-flex items-center space-x-4">
            <span className="text-sm uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">Read the Journal</span>
            <span className="w-12 h-[1px] bg-foreground group-hover:bg-primary transition-colors transform group-hover:translate-x-2 duration-300" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
