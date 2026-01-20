import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Beginner Plan",
    icon: Target,
    color: "from-green-500 to-emerald-500",
    days: "3 days/week",
    duration: "4-6 weeks",
    focus: ["Full Body Basics", "Form & Technique", "Cardio Foundation"],
    goal: "Build Foundation",
    description: "Perfect for those new to fitness. Focus on learning proper form and building basic strength.",
  },
  {
    name: "Intermediate Plan",
    icon: TrendingUp,
    color: "from-primary to-orange-400",
    days: "4-5 days/week",
    duration: "8-12 weeks",
    focus: ["Split Training", "Progressive Overload", "HIIT Cardio"],
    goal: "Muscle Growth",
    description: "Take your fitness to the next level with structured workouts and progressive challenges.",
    featured: true,
  },
  {
    name: "Advanced Plan",
    icon: Zap,
    color: "from-red-500 to-rose-500",
    days: "5-6 days/week",
    duration: "12+ weeks",
    focus: ["Advanced Splits", "Periodization", "Peak Performance"],
    goal: "Elite Strength",
    description: "Intensive training for experienced athletes looking to maximize their potential.",
  },
];

const WorkoutPlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="plans" className="bg-background py-20 md:py-28">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Workout <span className="text-primary">Plans</span>
          </h2>
          <p className="section-subtitle mt-4">
            Structured programs designed to match your fitness level and goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-card rounded-2xl border overflow-hidden ${
                plan.featured ? "border-primary" : "border-border"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div
                className={`h-2 bg-gradient-to-r ${plan.color}`}
              />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.goal}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                <div className="flex gap-4 mb-6 text-sm">
                  <div className="flex-1 bg-secondary/50 rounded-lg p-3 text-center">
                    <span className="block font-bold text-foreground">{plan.days}</span>
                    <span className="text-xs text-muted-foreground">Training</span>
                  </div>
                  <div className="flex-1 bg-secondary/50 rounded-lg p-3 text-center">
                    <span className="block font-bold text-foreground">{plan.duration}</span>
                    <span className="text-xs text-muted-foreground">Duration</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {plan.focus.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={plan.featured ? "primary" : "outline"}
                  className="w-full"
                >
                  Start This Plan
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlansSection;
