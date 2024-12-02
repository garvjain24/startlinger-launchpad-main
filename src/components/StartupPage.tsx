import { motion, useAnimation, PanInfo } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Coins } from "lucide-react";

const startups = [
  {
    id: 1,
    name: "EcoTech",
    description: "Sustainable energy solutions for homes",
    investment: 500,
    image: "https://picsum.photos/400/300",
  },
  {
    id: 2,
    name: "HealthAI",
    description: "AI-powered health diagnostics",
    investment: 750,
    image: "https://picsum.photos/400/301",
  },
  {
    id: 3,
    name: "SmartLearn",
    description: "Personalized education platform",
    investment: 300,
    image: "https://picsum.photos/400/302",
  },
];

const StartupPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [coins, setCoins] = useState(1000);
  const controls = useAnimation();

  const handleDragEnd = async (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 100;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      const direction = info.offset.x > 0 ? "right" : "left";
      await controls.start({
        x: direction === "right" ? 200 : -200,
        opacity: 0,
        transition: { duration: 0.3 },
      });
      
      if (direction === "right" && currentIndex < startups.length) {
        const investment = startups[currentIndex].investment;
        if (coins >= investment) {
          setCoins(coins - investment);
        }
      }
      
      if (currentIndex < startups.length - 1) {
        setCurrentIndex(currentIndex + 1);
        controls.set({ x: 0, opacity: 1 });
      }
    } else {
      controls.start({ x: 0, opacity: 1 });
    }
  };

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Discover Startups</h2>
          <div className="flex items-center gap-2 text-primary">
            <Coins className="w-6 h-6" />
            <span className="font-semibold">{coins}</span>
          </div>
        </div>
        
        <div className="max-w-md mx-auto relative h-[500px]">
          {currentIndex < startups.length && (
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              animate={controls}
              className="absolute w-full"
            >
              <Card className="overflow-hidden">
                <img
                  src={startups[currentIndex].image}
                  alt={startups[currentIndex].name}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{startups[currentIndex].name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {startups[currentIndex].description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Coins className="w-4 h-4" />
                      <span>{startups[currentIndex].investment}</span>
                    </div>
                    <Button onClick={() => handleDragEnd({} as any, { offset: { x: 150, y: 0 } } as PanInfo)}>
                      Invest Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
          {currentIndex >= startups.length && (
            <Card className="text-center p-8">
              <p className="text-xl font-semibold mb-4">No more startups to show</p>
              <Button onClick={() => setCurrentIndex(0)}>Start Over</Button>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default StartupPage;