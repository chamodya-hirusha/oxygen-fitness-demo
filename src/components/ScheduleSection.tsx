import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Dumbbell, Heart, User } from "lucide-react";

const scheduleData = [
  {
    day: "Monday",
    sessions: [
      { time: "6:00 AM", type: "Cardio Blast", icon: Heart },
      { time: "9:00 AM", type: "Weight Training", icon: Dumbbell },
      { time: "5:00 PM", type: "Personal Training", icon: User },
      { time: "7:00 PM", type: "Strength Class", icon: Dumbbell },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      { time: "6:00 AM", type: "HIIT Training", icon: Heart },
      { time: "10:00 AM", type: "Personal Training", icon: User },
      { time: "4:00 PM", type: "Weight Training", icon: Dumbbell },
      { time: "7:00 PM", type: "Cardio Session", icon: Heart },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "6:00 AM", type: "Strength Class", icon: Dumbbell },
      { time: "9:00 AM", type: "Cardio Blast", icon: Heart },
      { time: "5:00 PM", type: "Weight Training", icon: Dumbbell },
      { time: "7:00 PM", type: "Personal Training", icon: User },
    ],
  },
  {
    day: "Thursday",
    sessions: [
      { time: "6:00 AM", type: "Cardio Session", icon: Heart },
      { time: "10:00 AM", type: "Weight Training", icon: Dumbbell },
      { time: "4:00 PM", type: "Personal Training", icon: User },
      { time: "7:00 PM", type: "HIIT Training", icon: Heart },
    ],
  },
  {
    day: "Friday",
    sessions: [
      { time: "6:00 AM", type: "Weight Training", icon: Dumbbell },
      { time: "9:00 AM", type: "Cardio Blast", icon: Heart },
      { time: "5:00 PM", type: "Strength Class", icon: Dumbbell },
      { time: "7:00 PM", type: "Personal Training", icon: User },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { time: "8:00 AM", type: "Weekend Warrior", icon: Dumbbell },
      { time: "10:00 AM", type: "Cardio Party", icon: Heart },
      { time: "12:00 PM", type: "Personal Training", icon: User },
    ],
  },
  {
    day: "Sunday",
    sessions: [
      { time: "9:00 AM", type: "Recovery Session", icon: Heart },
      { time: "11:00 AM", type: "Light Training", icon: Dumbbell },
    ],
  },
];

const ScheduleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="schedule" className="bg-card py-20 md:py-28">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Weekly <span className="text-primary">Schedule</span>
          </h2>
          <p className="section-subtitle mt-4">
            Find the perfect time for your workout with our flexible schedule.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[900px]">
            {/* Header */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {scheduleData.map((day) => (
                <div
                  key={day.day}
                  className="text-center font-heading font-bold text-lg py-3 bg-primary/10 rounded-lg"
                >
                  {day.day}
                </div>
              ))}
            </div>

            {/* Schedule Grid */}
            <div className="grid grid-cols-7 gap-2">
              {scheduleData.map((day, dayIndex) => (
                <div key={day.day} className="space-y-2">
                  {day.sessions.map((session, sessionIndex) => (
                    <motion.div
                      key={`${day.day}-${session.time}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: dayIndex * 0.05 + sessionIndex * 0.05,
                      }}
                      className="p-3 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-3 h-3 text-primary" />
                        <span className="text-xs text-muted-foreground">
                          {session.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <session.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-medium">{session.type}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-10"
        >
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Cardio</span>
          </div>
          <div className="flex items-center gap-2">
            <Dumbbell className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Weight Training</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Personal Training</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
