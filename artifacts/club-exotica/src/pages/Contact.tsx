import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const steps = [
  { id: 'destination', question: 'Where do you dream of going?' },
  { id: 'time', question: 'When do you want to travel?' },
  { id: 'party', question: 'Who are you travelling with?' },
  { id: 'vibe', question: "What's your preferred experience?" },
  { id: 'budget', question: 'What is your anticipated investment?' },
  { id: 'contact', question: 'How may your Curator reach you?' }
];

const options = {
  destination: ['Maldives', 'Swiss Alps', 'African Safari', 'Mediterranean Coast', 'Private Island', 'Undecided'],
  time: ['Next 3 Months', '3-6 Months', '6-12 Months', 'Next Year', 'Flexible'],
  party: ['Solo', 'Couple', 'Family', 'Group of Friends', 'Corporate Retreat'],
  vibe: ['Beach & Wellness', 'Mountains & Ski', 'Adventure & Safari', 'Romance', 'Culture & History', 'Yacht Charter'],
  budget: ['$25k - $50k', '$50k - $100k', '$100k - $250k', '$250k+', 'No Limit']
};

export function Contact() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });

  const handleSelect = (key: string, value: string) => {
    setSelections({ ...selections, [key]: value });
    setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-background min-h-screen pt-32 pb-24 text-foreground flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl text-center px-8"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
            <Check size={32} />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Journey Initiated.</h1>
          <p className="text-muted-foreground font-light text-lg mb-8">
            Your Personal Travel Curator Will Contact You Within 24 Hours to begin designing your extraordinary experience.
          </p>
        </motion.div>
      </div>
    );
  }

  const currentKey = steps[currentStep].id as keyof typeof options;
  const currentOptions = options[currentKey];

  return (
    <div className="bg-background min-h-screen pt-40 pb-24 text-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep) / steps.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-8 md:px-16">
        <div className="mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Step {currentStep + 1} of {steps.length}
          </span>
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="font-serif text-4xl md:text-6xl"
            >
              {steps[currentStep].question}
            </motion.h1>
          </AnimatePresence>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {currentStep < steps.length - 1 ? (
              <motion.div
                key={`options-${currentStep}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {currentOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(currentKey, opt)}
                    className={`text-left p-6 border transition-all duration-300 ${
                      selections[currentKey] === opt
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-white/10 hover:border-primary/50 text-foreground/80 hover:text-foreground'
                    }`}
                  >
                    <span className="font-serif text-2xl">{opt}</span>
                  </button>
                ))}
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-8 max-w-xl"
              >
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-primary transition-colors"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-primary transition-colors"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-primary transition-colors"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-8 border border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 text-sm uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
