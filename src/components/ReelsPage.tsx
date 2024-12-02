import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const reels = [
  {
    id: 1,
    title: "Smart Home App",
    description: "Control your entire home with one tap",
    image: "https://picsum.photos/400/600",
  },
  {
    id: 2,
    title: "Fitness Tracker",
    description: "Track your workouts and nutrition",
    image: "https://picsum.photos/400/601",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "Stay organized and productive",
    image: "https://picsum.photos/400/602",
  },
];

const ReelsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        if (scrollTop + clientHeight >= scrollHeight) {
          containerRef.current.scrollTop = 0;
        } else {
          containerRef.current.scrollTop += clientHeight;
        }
      }
    }, 500);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="min-h-screen bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          Product Showcase
        </h2>
        <div
          ref={containerRef}
          className="max-w-md mx-auto h-[70vh] overflow-y-auto snap-y snap-mandatory"
        >
          {reels.map((reel, index) => {
            const opacity = useTransform(
              scrollYProgress,
              [index * 0.1, (index + 1) * 0.5],
              [0, 1]
            );

            return (
              <motion.div
                key={reel.id}
                style={{ opacity }}
                className="snap-start mb-8"
              >
                <Card className="relative overflow-hidden">
                  <img
                    src={reel.image}
                    alt={reel.title}
                    className="w-full h-[60vh] object-cover"
                  />
                  <CardContent className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                    <h3 className="text-xl font-semibold mb-2">{reel.title}</h3>
                    <p className="text-sm">{reel.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReelsPage;