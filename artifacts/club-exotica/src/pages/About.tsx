import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-[1000px] mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-20"
      >
        <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6">
          The Philosophy
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          We believe true luxury is invisible. It is the absence of friction, the presence of anticipation, and the luxury of time.
        </p>
      </motion.div>

      <motion.div 
        className="glass-card rounded-[40px] p-10 md:p-16 shadow-apple"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="prose prose-lg max-w-none text-foreground/80 prose-headings:font-serif prose-headings:text-foreground">
          <h2>Origins</h2>
          <p>
            Club Exotica was founded on a singular premise: the modern luxury traveler does not need another booking agent. They need an architect of experiences.
          </p>
          <p>
            Traditional travel agencies operate on inventory. We operate on imagination. By restricting our membership base, we maintain a ratio of staff to members that allows for uncompromising attention to detail.
          </p>
          
          <h2 className="mt-12">The Standard</h2>
          <p>
            Our standards are exacting. We personally vet every property, every guide, and every transfer. If a service does not meet the standards of an Aman resort or a Michelin three-star establishment, it does not enter our portfolio.
          </p>
          
          <h2 className="mt-12">Sustainability & Impact</h2>
          <p>
            True luxury cannot exist at the expense of the environment or local communities. We partner exclusively with properties and operators who demonstrate a profound commitment to sustainable practices and positive local impact, ensuring that your journey enriches rather than depletes.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
