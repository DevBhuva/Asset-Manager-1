import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'The Private Island Buyout',
    subtitle: 'Absolute Isolation, Absolute Luxury',
    description: 'Commandeer an entire pristine island in the Maldives or Caribbean for your exclusive use. From bespoke menus crafted by Michelin-starred chefs to a dedicated staff anticipating every need, experience the ultimate luxury of total privacy.',
    image: '/images/private-island.jpg',
    align: 'left'
  },
  {
    id: 2,
    title: 'The Silent Safari',
    subtitle: 'Unseen Wilderness',
    description: 'Traverse private concessions in East Africa via electric, silent vehicles. No engine noise, no crowds—just you, expert trackers, and the raw, unedited theater of the wild, returning to a fully serviced mobile camp under the stars.',
    image: '/images/safari.jpg',
    align: 'right'
  },
  {
    id: 3,
    title: 'Alpine Zenith',
    subtitle: 'Heli-Skiing & Chalet Life',
    description: 'Access untouched powder in the Swiss Alps via private helicopter. After carving pristine lines all day, return to an architectural masterpiece of a chalet where a roaring fire, sommelier-selected wines, and deep tissue massages await.',
    image: '/images/alps.jpg',
    align: 'left'
  }
];

export function Experiences() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="px-4 sm:px-8 max-w-[1400px] mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6">
            Immersive Stories
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We don't build itineraries. We design narratives where you are the protagonist.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-32">
        {experiences.map((exp, i) => (
          <section key={exp.id} className="relative px-4 sm:px-8 max-w-[1600px] mx-auto w-full">
            <div className={`flex flex-col lg:flex-row gap-12 items-center ${exp.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <motion.div 
                className="w-full lg:w-3/5"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-apple">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                className="w-full lg:w-2/5 px-4 lg:px-12"
                initial={{ opacity: 0, x: exp.align === 'left' ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">
                  {exp.subtitle}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                  {exp.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {exp.description}
                </p>
                <button className="px-8 py-3 rounded-full border border-foreground text-foreground font-medium hover:bg-foreground hover:text-white transition-colors btn-press">
                  Request Detail
                </button>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
