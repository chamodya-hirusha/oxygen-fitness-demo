import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const memberships = [
  {
    name: "Monthly",
    price: 49,
    period: "month",
    features: [
      "Full Gym Access",
      "Locker Room Access",
      "Basic Equipment Training",
      "Fitness Assessment",
    ],
    popular: false,
  },
  {
    name: "3-Month",
    price: 129,
    period: "3 months",
    originalPrice: 147,
    features: [
      "Full Gym Access",
      "Locker Room Access",
      "All Equipment Training",
      "2 Personal Training Sessions",
      "Nutrition Consultation",
      "Priority Booking",
    ],
    popular: true,
  },
  {
    name: "Annual",
    price: 399,
    period: "year",
    originalPrice: 588,
    features: [
      "Unlimited Gym Access",
      "Premium Locker Room",
      "All Equipment & Classes",
      "12 Personal Training Sessions",
      "Monthly Nutrition Plans",
      "Priority Booking",
      "Guest Passes (4/month)",
      "Exclusive Member Events",
    ],
    popular: false,
  },
];

const MembershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="membership" className="bg-card py-20 md:py-28">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Membership <span className="text-primary">Plans</span>
          </h2>
          <p className="section-subtitle mt-4">
            Choose the plan that fits your lifestyle and start your fitness journey today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {memberships.map((membership, index) => (
            <motion.div
              key={membership.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl overflow-hidden ${
                membership.popular
                  ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary scale-105 z-10"
                  : "bg-secondary/30 border border-border"
              }`}
            >
              {membership.popular && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    <Star className="w-3 h-3 fill-current" />
                    BEST VALUE
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                <h3 className="font-heading text-2xl font-bold mb-2">
                  {membership.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-heading text-4xl md:text-5xl font-bold">
                    ${membership.price}
                  </span>
                  <span className="text-muted-foreground">/{membership.period}</span>
                </div>

                {membership.originalPrice && (
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="line-through">${membership.originalPrice}</span>
                    <span className="text-primary ml-2">
                      Save ${membership.originalPrice - membership.price}
                    </span>
                  </p>
                )}

                <div className="space-y-3 mb-8">
                  {membership.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        membership.popular ? "bg-primary" : "bg-primary/20"
                      }`}>
                        <Check className={`w-3 h-3 ${
                          membership.popular ? "text-primary-foreground" : "text-primary"
                        }`} />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={membership.popular ? "primary" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Get Membership
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted-foreground text-sm mt-10"
        >
          All plans include a 7-day money-back guarantee. No contracts, cancel anytime.
        </motion.p>
      </div>
    </section>
  );
};

export default MembershipSection;
