import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

export function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Application received. A concierge will contact you shortly.');
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-[800px] mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
          Apply for Membership
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Please provide your details below. Due to limited capacity, membership is granted on a rolling basis.
        </p>
      </motion.div>

      <motion.div 
        className="glass-card rounded-[40px] p-8 md:p-12 shadow-apple"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground ml-2">First Name</label>
              <input 
                {...register('firstName')} 
                className="px-6 py-4 rounded-full bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
                placeholder="John"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground ml-2">Last Name</label>
              <input 
                {...register('lastName')} 
                className="px-6 py-4 rounded-full bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground ml-2">Email Address</label>
            <input 
              {...register('email')} 
              type="email"
              className="px-6 py-4 rounded-full bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
              placeholder="john@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground ml-2">Desired Tier</label>
            <select 
              {...register('tier')} 
              className="px-6 py-4 rounded-full bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm appearance-none"
            >
              <option value="signature">Signature ($15,000/yr)</option>
              <option value="centurion">Centurion ($50,000/yr)</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground ml-2">Travel Preferences (Optional)</label>
            <textarea 
              {...register('notes')} 
              className="px-6 py-4 rounded-[24px] bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm resize-none min-h-[120px]"
              placeholder="Tell us about your ideal journey..."
            />
          </div>

          <button 
            type="submit"
            className="mt-4 w-full py-4 rounded-full font-medium text-white bg-foreground hover:bg-foreground/90 transition-all btn-press shadow-apple-sm"
          >
            Submit Application
          </button>
        </form>
      </motion.div>
    </div>
  );
}
