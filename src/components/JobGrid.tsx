import { motion } from "framer-motion";

const jobs = [
  { title: "Senior Frontend Developer", company: "TechStart", location: "Remote" },
  { title: "Product Designer", company: "InnovateCo", location: "San Francisco" },
  { title: "Growth Marketer", company: "LaunchPad", location: "New York" },
  { title: "Backend Engineer", company: "DataFlow", location: "Remote" },
];

const JobGrid = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Featured Opportunities</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-lg text-primary mb-2">{job.title}</h3>
              <p className="text-textDark/70 mb-1">{job.company}</p>
              <p className="text-sm text-textDark/60">{job.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobGrid;