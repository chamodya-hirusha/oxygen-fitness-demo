import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrainersSection from "@/components/TrainersSection";
import ScheduleSection from "@/components/ScheduleSection";
import WorkoutPlansSection from "@/components/WorkoutPlansSection";
import MembershipSection from "@/components/MembershipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BMICalculator from "@/components/BMICalculator";
import ClassBookingSection from "@/components/ClassBookingSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <TrainersSection />
      <ScheduleSection />
      <WorkoutPlansSection />
      <MembershipSection />
      <TestimonialsSection />
      <BMICalculator />
      <ClassBookingSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
