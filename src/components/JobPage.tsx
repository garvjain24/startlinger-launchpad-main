import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechStart",
    location: "Remote",
    description: "Looking for an experienced frontend developer with React expertise",
    requirements: ["5+ years React", "TypeScript", "UI/UX skills"],
  },
  {
    id: 2,
    title: "Product Designer",
    company: "InnovateCo",
    location: "San Francisco",
    description: "Join our design team to create beautiful user experiences",
    requirements: ["3+ years UI/UX", "Figma", "User Research"],
  },
  {
    id: 3,
    title: "Growth Marketer",
    company: "LaunchPad",
    location: "New York",
    description: "Drive our marketing efforts and user acquisition",
    requirements: ["Digital Marketing", "Analytics", "Content Strategy"],
  },
];

const JobPage = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Job Openings</h2>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-xl font-semibold text-primary">{job.title}</span>
                    <span className="text-sm text-muted-foreground">{job.location}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{job.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full mt-4">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobPage;