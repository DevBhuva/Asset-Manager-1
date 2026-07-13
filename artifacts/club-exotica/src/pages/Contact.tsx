import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLocation } from "wouter";

export function Contact() {
  const [search] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const defaultDestination = searchParams.get("destination") || "";
  const defaultType = searchParams.get("type") || "leisure";

  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate an API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="container mx-auto max-w-2xl relative">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-16">
                <h1 className="font-serif text-4xl md:text-5xl mb-6 text-primary">Begin the Conversation</h1>
                <p className="text-muted-foreground">
                  Our private concierges are ready to craft your next experience. Please share a few details below, and a senior director will be in touch shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground">First Name</label>
                    <input required type="text" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-primary transition-colors rounded-none placeholder:text-muted/50" placeholder="e.g. James" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Last Name</label>
                    <input required type="text" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-primary transition-colors rounded-none placeholder:text-muted/50" placeholder="e.g. Sterling" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Email Address</label>
                    <input required type="email" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-primary transition-colors rounded-none placeholder:text-muted/50" placeholder="james@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Phone Number</label>
                    <input type="tel" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-primary transition-colors rounded-none placeholder:text-muted/50" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Inquiry Type</label>
                  <select defaultValue={defaultType} className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-primary transition-colors rounded-none appearance-none">
                    <option value="leisure">Bespoke Travel Inquiry</option>
                    <option value="membership_voyager">Voyager Membership Application</option>
                    <option value="membership_reserve">Exotica Reserve Invitation Request</option>
                    <option value="corporate">Corporate Retreat / Executive Travel</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Destination of Interest</label>
                  <input defaultValue={defaultDestination} type="text" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-primary transition-colors rounded-none placeholder:text-muted/50" placeholder="e.g. The Maldives, or leave blank if undecided" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Anticipated Travel Dates & Guests</label>
                  <input type="text" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-primary transition-colors rounded-none placeholder:text-muted/50" placeholder="e.g. October, 2 Adults" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Additional Notes</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-primary transition-colors rounded-none resize-none placeholder:text-muted/50" placeholder="Please share any specific requirements, preferences, or occasions..."></textarea>
                </div>

                <div className="pt-8 text-center">
                  <button type="submit" className="bg-primary text-primary-foreground border border-primary px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-transparent hover:text-primary transition-colors w-full md:w-auto">
                    Submit Request
                  </button>
                  <p className="text-xs text-muted-foreground mt-6 max-w-sm mx-auto">
                    By submitting this form, you acknowledge our commitment to absolute discretion and privacy.
                  </p>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center py-24"
            >
              <div className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-serif text-4xl mb-6 text-primary">Your Inquiry is Received</h2>
              <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
                Thank you. A senior director from our private concierge team will review your details and contact you shortly to begin designing your experience.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
