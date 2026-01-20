import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Heart, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build muscle and power with our comprehensive weight training programs.",
  },
  {
    icon: Heart,
    title: "Healthy Lifestyle",
    description: "Embrace wellness with nutrition guidance and holistic fitness approaches.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Join thousands who have transformed their bodies and achieved their goals.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "Train alongside motivated individuals who inspire and push each other.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-card py-20 md:py-28">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="text-primary">Oxygen Fitness</span>
          </h2>
          <p className="section-subtitle mt-4">
            At Oxygen Fitness Center, we believe that fitness is not just about
            building a better body — it's about building a better life. Our
            state-of-the-art facility, expert trainers, and welcoming community
            create the perfect environment for your transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-secondary/50 p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl font-heading text-foreground">
            <span className="text-primary font-bold">Discipline</span> leads to{" "}
            <span className="text-primary font-bold">Results</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
