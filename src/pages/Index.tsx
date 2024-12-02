import Hero from "@/components/Hero";
import Feed from "@/components/Feed";
import JobGrid from "@/components/JobGrid";
import JobPage from "@/components/JobPage";
import StartupPage from "@/components/StartupPage";
import ReelsPage from "@/components/ReelsPage";
import SignupForm from "@/components/SignupForm";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      
      {/* Feed Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">Connect with Innovators</h2>
            <p className="text-lg text-textDark/80">
              Share your startup journey, connect with fellow founders, and showcase your 
              innovations. Our feed is designed to foster meaningful connections in the 
              startup ecosystem.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="People collaborating" 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <Feed />
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <JobPage />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 order-1 md:order-2"
          >
            <h2 className="text-3xl font-bold text-primary">Find Your Next Opportunity</h2>
            <p className="text-lg text-textDark/80">
              Whether you're looking to join an exciting startup or searching for 
              co-founders, our job board connects talented individuals with the right 
              opportunities. Early access members get priority application status and 
              exclusive job listings before they go public.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Person working on laptop" 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Startup Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">Discover Promising Startups</h2>
            <p className="text-lg text-textDark/80">
              Explore and invest in the next big thing. Our platform makes it easy to 
              discover innovative startups and support their growth. Early access members 
              receive exclusive investment opportunities and bonus coins to kickstart 
              their investment journey.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Technology showcase" 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <StartupPage />
        </div>
      </section>

      {/* Reels Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <ReelsPage />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 order-1 md:order-2"
          >
            <h2 className="text-3xl font-bold text-primary">Showcase Your Product</h2>
            <p className="text-lg text-textDark/80">
              Let your product shine through engaging video content. Our reels feature 
              helps you demonstrate your innovation in action. Early access members get 
              featured placement, enhanced visibility, and professional video editing tips 
              to make their content stand out.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Person creating content" 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Early Access Benefits */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl font-bold">Why Join Early Access?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Priority Access</h3>
                <p className="text-white/80">Get first access to new features and exclusive opportunities</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Bonus Coins</h3>
                <p className="text-white/80">Receive bonus investment coins to support promising startups</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Featured Placement</h3>
                <p className="text-white/80">Enhanced visibility for your startup and content</p>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="Colorful code" 
              className="rounded-lg shadow-lg mt-8 max-w-2xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      <SignupForm />
    </main>
  );
};

export default Index;