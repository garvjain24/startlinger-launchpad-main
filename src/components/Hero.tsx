import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background to-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-primary mb-6"
        >
          Connect. Create. Succeed.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-textDark/80 mb-8 max-w-2xl mx-auto"
        >
          The social platform where startup founders showcase their ideas and find their next opportunity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}>
            Join the Waitlist
          </button>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] opacity-5 bg-cover bg-center" />
    </section>
  );
};

export default Hero;