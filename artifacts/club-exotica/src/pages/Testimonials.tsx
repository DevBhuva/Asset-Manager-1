import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "We thought we knew luxury travel until we traveled with Club Exotica. The attention to detail is staggering. They knew exactly how we liked our morning coffee in a remote lodge where there wasn't even a menu.",
    author: "E.R.",
    location: "London, UK"
  },
  {
    quote: "The seamlessness of it all. From the tarmac to the villa, we never touched a bag, never waited in a line, never had to ask for anything twice. It felt like magic.",
    author: "A. & M. T.",
    location: "New York, USA"
  },
  {
    quote: "They managed to secure an after-hours private viewing of the Sistine Chapel for our anniversary. The silence of that room, just the two of us... an experience we will carry forever.",
    author: "J.H.",
    location: "Geneva, Switzerland"
  },
  {
    quote: "A true masterclass in hospitality. The team at Exotica operates with a quiet, invisible precision that allows you to simply exist in the moment without a single distraction.",
    author: "S.K.",
    location: "Singapore"
  }
];

export function Testimonials() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-8 text-primary">In Their Words</h1>
          <p className="text-xl text-muted-foreground">The quiet trust of those who demand the exceptional.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-8">
                <svg className="w-10 h-10 text-accent/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="font-serif text-2xl leading-relaxed text-primary mb-8 flex-grow">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-primary font-semibold">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
