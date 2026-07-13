import { motion } from 'framer-motion';
import { Link } from 'wouter';

const experiences = [
  {
    title: 'Private Aviation',
    desc: 'Bypass the terminals. We arrange seamless point-to-point travel via private jet and helicopter, ensuring your journey begins the moment you leave your door.',
    img: '/images/helicopter-arrival.jpg',
    layout: 'left'
  },
  {
    title: 'Yacht Charters',
    desc: 'Commandeer the seas. Access an exclusive fleet of superyachts with full crew, private chefs, and itineraries that chart untouched waters.',
    img: '/images/yacht-cruise.jpg',
    layout: 'right'
  },
  {
    title: 'Wellness Sanctuaries',
    desc: 'Retreat from the world. Immerse yourself in restorative environments designed to heal mind and body, surrounded by breathtaking natural beauty.',
    img: '/images/wellness-spa.jpg',
    layout: 'left'
  },
  {
    title: 'Culinary Journeys',
    desc: 'Taste the impossible. Private dinners on secluded beaches, exclusive access to closed-door vineyards, and meals prepared by Michelin-starred chefs in your villa.',
    img: '/images/dinner-sunset.jpg',
    layout: 'right'
  }
];

export function Experiences() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 text-foreground">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
            Signature Experiences
          </span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
            The art of <br/><span className="italic text-muted-foreground">living fully.</span>
          </h1>
          <p className="font-light text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            We don't sell trips; we curate moments that take your breath away. Our signature experiences are entirely bespoke, designed around your distinct rhythm and desires.
          </p>
        </motion.div>

        <div className="space-y-32 md:space-y-48 pb-32">
          {experiences.map((exp, i) => (
            <div key={exp.title} className={`flex flex-col ${exp.layout === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden"
              >
                <img src={exp.img} alt={exp.title} className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: exp.layout === 'left' ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-1/2"
              >
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl mb-6">{exp.title}</h2>
                <p className="font-light text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
                  {exp.desc}
                </p>
                <Link href="/book" className="group inline-flex items-center space-x-4">
                  <span className="text-sm uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">Inquire</span>
                  <span className="w-12 h-[1px] bg-foreground group-hover:bg-primary transition-colors transform group-hover:translate-x-2 duration-300" />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
