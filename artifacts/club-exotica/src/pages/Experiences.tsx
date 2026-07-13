import { motion } from "framer-motion";

const experiences = [
  {
    title: "Private Island Escapes",
    image: "/attached_assets/generated_images/private-island.jpg",
    desc: "Complete isolation. We secure entire islands in the Indian Ocean, Caribbean, or South Pacific for your exclusive use, complete with dedicated staff and security."
  },
  {
    title: "Ocean Expeditions",
    image: "/attached_assets/generated_images/cruise.jpg",
    desc: "Charter the world's most magnificent superyachts. Sail the Mediterranean or explore the dramatic coastlines of Antarctica with an expert crew and marine biologists."
  },
  {
    title: "Wellness & Renewal",
    image: "/attached_assets/generated_images/wellness.jpg",
    desc: "Transformative retreats in the Himalayas or the Swiss Alps. Ancient healing traditions paired with cutting-edge medical wellness in profound silence."
  },
  {
    title: "Bespoke Safari",
    image: "/attached_assets/generated_images/safari.jpg",
    desc: "Witness the great migrations from the comfort of ultra-luxury camps. Private guides, breathtaking aerial tours, and dinners under the African sky."
  }
];

export function Experiences() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-8 text-primary max-w-4xl">Curated Experiences</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            We don't offer packages. We offer blank canvases. These themes serve merely as inspiration for what our design team can orchestrate.
          </p>
        </motion.div>

        <div className="space-y-32">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
              
              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h2 className="font-serif text-4xl mb-6 text-primary">{exp.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {exp.desc}
                </p>
                <a href="/book" className="text-sm tracking-[0.2em] uppercase text-primary border-b border-primary/20 pb-1 hover:border-primary transition-colors">
                  Inquire About This Experience
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
