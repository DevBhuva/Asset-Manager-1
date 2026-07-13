import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Eleanor V.',
    role: 'Centurion Member',
    text: 'They don\'t just book trips; they orchestrate flawless experiences. Our private island stay in the Maldives was engineered perfectly. Every detail, from the exact vintage of wine to the thread count, was exactly as requested.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    name: 'James C.',
    role: 'Signature Member',
    text: 'I\'ve worked with high-end concierges for a decade, but Exotica is different. Their access is unparalleled. Getting us a private dinner at the Colosseum after hours was something I thought was impossible.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e'
  },
  {
    name: 'Sophia L.',
    role: 'Centurion Member',
    text: 'When our flight was cancelled due to weather in Geneva, before I even knew about it, Exotica had already secured a private jet alternative and adjusted our entire itinerary. Calm, efficient, luxurious.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f'
  },
  {
    name: 'Michael R.',
    role: 'Signature Member',
    text: 'The absolute pinnacle of luxury travel. The design of our Japanese itinerary was so thoughtful, balancing high-end luxury with genuine, deep cultural immersion that money usually can\'t buy.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704g'
  }
];

export function Testimonials() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-[1400px] mx-auto min-h-screen">
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6">
          Member Stories
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The ultimate measure of our success is the quiet satisfaction of the world's most demanding clientele.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {testimonials.map((test, i) => (
          <motion.div
            key={i}
            className="glass-card rounded-[36px] p-8 md:p-10 shadow-apple"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex gap-1 text-primary mb-6">
              {[...Array(test.rating)].map((_, j) => (
                <Star key={j} size={16} className="fill-primary" />
              ))}
            </div>
            
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              "{test.text}"
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
              <img 
                src={test.avatar} 
                alt={test.name}
                className="w-12 h-12 rounded-full border border-border"
              />
              <div>
                <div className="font-medium text-foreground">{test.name}</div>
                <div className="text-sm text-muted-foreground">{test.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
