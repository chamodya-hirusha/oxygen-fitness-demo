import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import transformation1 from "@/assets/transformation-1.jpg";
import transformation2 from "@/assets/transformation-2.jpg";
import transformation3 from "@/assets/transformation-3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Lost 45 lbs in 6 months",
    image: transformation1,
    rating: 5,
    review: "Oxygen Fitness completely transformed my life. The trainers are incredibly supportive and the community keeps you motivated. I've never felt stronger or more confident!",
    beforeWeight: "220 lbs",
    afterWeight: "175 lbs",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Gained lean muscle",
    image: transformation2,
    rating: 5,
    review: "I joined with zero fitness experience and now I'm competing in local fitness competitions. The personalized training plans made all the difference. Best decision I ever made!",
    beforeWeight: "145 lbs",
    afterWeight: "135 lbs",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Lost 60 lbs in 8 months",
    image: transformation3,
    rating: 5,
    review: "The atmosphere at Oxygen Fitness is electric. From day one, everyone made me feel welcome. My transformation journey has been incredible thanks to this amazing team!",
    beforeWeight: "250 lbs",
    afterWeight: "190 lbs",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "fill-primary text-primary" : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-container bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real transformations from real members. See what's possible when you commit to your fitness journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Transformation Image */}
              <div className="relative">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s transformation`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4">
                  <div className="flex justify-between text-sm">
                    <span className="bg-destructive/80 px-3 py-1 rounded-full">
                      Before: {testimonial.beforeWeight}
                    </span>
                    <span className="bg-primary/80 px-3 py-1 rounded-full">
                      After: {testimonial.afterWeight}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-primary text-sm">{testimonial.role}</p>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                    {testimonial.review}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-background rounded-2xl p-8 border border-border"
        >
          <div className="text-center">
            <p className="text-4xl font-heading font-bold text-primary">500+</p>
            <p className="text-muted-foreground text-sm mt-1">Transformations</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-heading font-bold text-primary">4.9</p>
            <p className="text-muted-foreground text-sm mt-1">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-heading font-bold text-primary">15k+</p>
            <p className="text-muted-foreground text-sm mt-1">Lbs Lost</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-heading font-bold text-primary">98%</p>
            <p className="text-muted-foreground text-sm mt-1">Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
