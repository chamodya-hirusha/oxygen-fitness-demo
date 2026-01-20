import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  {
    name: "Marcus Johnson",
    specialization: "Strength & Conditioning",
    experience: 8,
    image: trainer1,
    certifications: ["NASM Certified", "CrossFit Level 2"],
  },
  {
    name: "Sarah Mitchell",
    specialization: "Cardio & HIIT",
    experience: 6,
    image: trainer2,
    certifications: ["ACE Certified", "Yoga Instructor"],
  },
  {
    name: "David Chen",
    specialization: "Personal Training",
    experience: 10,
    image: trainer3,
    certifications: ["ISSA Certified", "Sports Nutrition"],
  },
];

const TrainersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trainers" className="bg-background py-20 md:py-28">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Meet Our <span className="text-primary">Expert Trainers</span>
          </h2>
          <p className="section-subtitle mt-4">
            Our certified trainers bring years of experience and passion to help
            you achieve your fitness goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl font-bold mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {trainer.specialization}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{trainer.experience}+ years</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">Certified Pro</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {trainer.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
