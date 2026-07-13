import { motion } from "framer-motion";

export function About() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl mb-8 text-primary"
          >
            A Return to True Luxury
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            We founded Club Exotica on a simple premise: in a hyper-connected, mass-produced world, the ultimate luxury is space, silence, and absolute, uncompromising quality.
          </motion.p>
        </div>

        <motion.div 
          className="w-full aspect-video overflow-hidden bg-muted mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src="/attached_assets/generated_images/about-interior.jpg" 
            alt="Club Exotica Concierge Interior" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-4">Our Philosophy</h2>
            <h3 className="font-serif text-3xl text-primary mb-6">The Art of Subtraction</h3>
            <p className="text-muted-foreground leading-relaxed">
              True luxury is not about excess; it is about elimination. Eliminating friction, noise, and the mundane. We curate experiences that distill travel down to its purest, most profound essence. We do not overwhelm you with choices; we present you with the single right option, perfectly tailored to your desires.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xs tracking-[0.2em] uppercase text-accent font-semibold mb-4">The Network</h2>
            <h3 className="font-serif text-3xl text-primary mb-6">Invisible Access</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our Little Black Book is the result of decades of relationships across the globe. We have access to properties not found on the internet, private estates quietly held by prominent families, and local artisans who only open their doors to those who are introduced. When you travel with us, doors simply open.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
