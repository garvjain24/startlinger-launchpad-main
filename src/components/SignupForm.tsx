import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase to store emails
    toast({
      title: "Thanks for signing up!",
      description: "We'll notify you when early access is available.",
    });
    setEmail("");
  };

  return (
    <section id="early-access" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Get Early Access</h2>
          <p className="text-white/80 mb-8">
            Join our waitlist to be among the first to experience Startlinger and receive bonus coins at launch.
            Early access members get exclusive benefits and priority access to all features.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="px-6 py-3 rounded-lg text-textDark w-full md:w-96"
            />
            <button
              type="submit"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Join Waitlist
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default SignupForm;