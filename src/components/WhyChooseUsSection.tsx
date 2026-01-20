import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Dumbbell, Users } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Certified Trainers",
    description:
      "Our trainers hold nationally recognized certifications and bring years of expertise to every session.",
  },
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description:
      "Train with state-of-the-art machines and free weights, maintained to the highest standards.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description:
      "Open early mornings to late nights, so you can fit your workout into any schedule.",
  },
  {
    icon: Users,
    title: "Friendly Environment",
    description:
      "Join a welcoming community where everyone supports each other's fitness journey.",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-background py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Why Choose <span className="text-primary">Oxygen Fitness?</span>
          </h2>
          <p className="section-subtitle mt-4">
            We're committed to providing the best fitness experience for our members.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: "5000+", label: "Happy Members" },
            { number: "15+", label: "Expert Trainers" },
            { number: "50+", label: "Weekly Classes" },
            { number: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
