import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, CheckCircle, Dumbbell, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface FitnessClass {
  id: string;
  name: string;
  instructor: string;
  time: string;
  duration: string;
  spots: number;
  maxSpots: number;
  day: string;
  icon: React.ElementType;
  intensity: "Low" | "Medium" | "High";
}

const classes: FitnessClass[] = [
  { id: "1", name: "Morning Cardio Blast", instructor: "Sarah Mitchell", time: "6:00 AM", duration: "45 min", spots: 12, maxSpots: 20, day: "Monday", icon: Heart, intensity: "High" },
  { id: "2", name: "Strength Training", instructor: "James Wilson", time: "7:30 AM", duration: "60 min", spots: 8, maxSpots: 15, day: "Monday", icon: Dumbbell, intensity: "High" },
  { id: "3", name: "HIIT Express", instructor: "Emily Davis", time: "12:00 PM", duration: "30 min", spots: 15, maxSpots: 25, day: "Monday", icon: Zap, intensity: "High" },
  { id: "4", name: "Yoga Flow", instructor: "Sarah Mitchell", time: "6:00 PM", duration: "60 min", spots: 5, maxSpots: 20, day: "Tuesday", icon: Heart, intensity: "Low" },
  { id: "5", name: "Power Lifting", instructor: "James Wilson", time: "7:00 AM", duration: "75 min", spots: 10, maxSpots: 12, day: "Tuesday", icon: Dumbbell, intensity: "High" },
  { id: "6", name: "Spin Class", instructor: "Emily Davis", time: "5:30 PM", duration: "45 min", spots: 18, maxSpots: 30, day: "Wednesday", icon: Zap, intensity: "Medium" },
  { id: "7", name: "Core & Abs", instructor: "Sarah Mitchell", time: "12:00 PM", duration: "30 min", spots: 20, maxSpots: 25, day: "Wednesday", icon: Dumbbell, intensity: "Medium" },
  { id: "8", name: "Boxing Fitness", instructor: "James Wilson", time: "6:30 PM", duration: "60 min", spots: 6, maxSpots: 15, day: "Thursday", icon: Zap, intensity: "High" },
  { id: "9", name: "Stretching & Recovery", instructor: "Emily Davis", time: "8:00 AM", duration: "45 min", spots: 14, maxSpots: 20, day: "Friday", icon: Heart, intensity: "Low" },
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const ClassBookingSection = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedClass, setSelectedClass] = useState<FitnessClass | null>(null);
  const [bookingForm, setBookingForm] = useState({ name: "", email: "", phone: "" });
  const [isBooking, setIsBooking] = useState(false);

  const filteredClasses = classes.filter((c) => c.day === selectedDay);

  const handleBookClass = (fitnessClass: FitnessClass) => {
    setSelectedClass(fitnessClass);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClass) return;

    setIsBooking(true);
    // Simulate booking
    setTimeout(() => {
      toast({
        title: "Class Booked Successfully!",
        description: `You're registered for ${selectedClass.name} on ${selectedClass.day} at ${selectedClass.time}.`,
      });
      setSelectedClass(null);
      setBookingForm({ name: "", email: "", phone: "" });
      setIsBooking(false);
    }, 1500);
  };

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Low":
        return "bg-green-500/20 text-green-400";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400";
      case "High":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-primary/20 text-primary";
    }
  };

  return (
    <section id="book-class" className="section-container bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Book a <span className="text-gradient">Class</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reserve your spot in our group fitness classes. Limited spots available - book now!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Day Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {days.map((day) => (
              <Button
                key={day}
                variant={selectedDay === day ? "primary" : "outline"}
                onClick={() => setSelectedDay(day)}
                className="min-w-[100px]"
              >
                {day}
              </Button>
            ))}
          </motion.div>

          {/* Classes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {filteredClasses.map((fitnessClass, index) => {
              const Icon = fitnessClass.icon;
              const spotsLeft = fitnessClass.maxSpots - fitnessClass.spots;
              const isFull = spotsLeft === 0;

              return (
                <motion.div
                  key={fitnessClass.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-background rounded-xl p-5 border transition-all duration-300 ${
                    isFull
                      ? "border-border opacity-60"
                      : "border-border hover:border-primary/50 cursor-pointer"
                  }`}
                  onClick={() => !isFull && handleBookClass(fitnessClass)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${getIntensityColor(fitnessClass.intensity)}`}>
                      {fitnessClass.intensity}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg mb-1">{fitnessClass.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">with {fitnessClass.instructor}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {fitnessClass.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {fitnessClass.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span className={isFull ? "text-destructive" : "text-primary"}>
                        {isFull ? "Full" : `${spotsLeft} spots left`}
                      </span>
                    </span>
                    {!isFull && (
                      <Button variant="primary" size="sm">
                        Book Now
                      </Button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Booking Modal/Form */}
          {selectedClass && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedClass(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-2xl p-6 max-w-md w-full border border-border"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl">Book Your Spot</h3>
                    <p className="text-muted-foreground text-sm">{selectedClass.name}</p>
                  </div>
                </div>

                <div className="bg-background rounded-xl p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Day</p>
                      <p className="font-medium">{selectedClass.day}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Time</p>
                      <p className="font-medium">{selectedClass.time}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-medium">{selectedClass.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Instructor</p>
                      <p className="font-medium">{selectedClass.instructor}</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setSelectedClass(null)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary" className="flex-1" disabled={isBooking}>
                      {isBooking ? "Booking..." : "Confirm Booking"}
                    </Button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClassBookingSection;
