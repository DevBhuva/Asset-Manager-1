import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "I’ve stayed in the finest suites in the world, but the private island Exotica secured for our family was something beyond luxury. It was complete, unbothered peace.",
    author: "J. Mercer",
    role: "Member since 2019"
  },
  {
    quote: "When our flight was grounded due to weather, my Curator had a helicopter waiting before I even knew there was a problem. That is what true service looks like.",
    author: "E. Kensington",
    role: "Member since 2021"
  },
  {
    quote: "We asked for a private dinner in the desert. We didn’t expect a Michelin-starred chef, a string quartet, and a telescope perfectly aligned with Saturn. Speechless.",
    author: "T. & M. Vance",
    role: "Members since 2018"
  }
];

export function Testimonials() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 text-foreground">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center max-w-3xl mx-auto"
        >
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
            Stories from our Travelers
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
            Words from the <br/><span className="italic text-muted-foreground">inner circle.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col h-full"
            >
              <div className="text-primary text-4xl font-serif mb-6">"</div>
              <p className="font-light text-xl leading-relaxed mb-8 flex-grow">
                {t.quote}
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="font-sans text-sm uppercase tracking-widest text-foreground">{t.author}</p>
                <p className="font-light text-xs text-muted-foreground mt-2">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
