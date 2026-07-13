import { motion } from 'framer-motion';
import { Link } from 'wouter';

export function About() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 text-foreground">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center mb-32 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
              The Curators
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
              Crafting the <br/><span className="italic text-muted-foreground">impossible.</span>
            </h1>
            <p className="font-light text-muted-foreground text-lg leading-relaxed mb-8">
              Club Exotica was founded on a singular premise: true luxury is not found in an algorithm. It is handcrafted by those who have walked the ground, tasted the wine, and felt the breeze.
            </p>
            <p className="font-light text-muted-foreground text-lg leading-relaxed">
              We are a collective of former hoteliers, expedition leaders, and private concierges who demand perfection. We do not use booking engines. Every itinerary is built from a blank page.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[3/4] relative overflow-hidden"
          >
            <img src="/images/infinity-pool.jpg" alt="Exotica Lifestyle" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <section className="bg-ivory text-black py-24 px-8 md:px-16 -mx-8 md:-mx-16 mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-serif text-4xl md:text-5xl mb-8"
            >
              "We don't accept clients. We accept members into a family that expects the world to move at their pace."
            </motion.h2>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-black/60">
              — The Founders
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            { title: 'Discretion', desc: 'Privacy is our highest currency. We operate entirely under the radar for families and individuals who require absolute anonymity.' },
            { title: 'Access', desc: 'Through decades of relationship-building, we hold the keys to estates, collections, and experiences not available to the public.' },
            { title: 'Precision', desc: 'From thread count preferences to preferred dietary hyper-specifics, your profile dictates every nuance of the journey.' }
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="border-t border-white/10 pt-8"
            >
              <h3 className="font-serif text-2xl mb-4 text-primary">{value.title}</h3>
              <p className="font-light text-muted-foreground leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 text-center"
        >
          <Link href="/book" className="group inline-flex items-center space-x-4">
             <span className="text-sm uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">Contact Our Curators</span>
             <span className="w-12 h-[1px] bg-foreground group-hover:bg-primary transition-colors transform group-hover:translate-x-2 duration-300" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
