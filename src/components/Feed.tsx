import { motion } from "framer-motion";

const feedItems = [
  {
    id: 1,
    author: "Sarah Chen",
    title: "Launching our AI-powered startup",
    content: "Excited to announce our new venture in the AI space! Looking for talented developers...",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
  },
  {
    id: 2,
    author: "Alex Rivera",
    title: "Seeking Co-Founder",
    content: "Building a revolutionary fintech platform. Need a technical co-founder with experience in...",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
  },
];

const Feed = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Featured Posts</h2>
        <div className="grid gap-8 max-w-3xl mx-auto">
          {feedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img src={item.avatar} alt={item.author} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold text-textDark">{item.author}</h3>
                  <p className="text-sm text-textDark/60">{item.title}</p>
                </div>
              </div>
              <p className="text-textDark/80">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feed;