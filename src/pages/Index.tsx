
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import CourseHighlights from "@/components/CourseHighlights";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import LimitedTimeOffer from "@/components/LimitedTimeOffer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhySection />
        <CourseHighlights />
        <SpecialtiesSection />
        <LimitedTimeOffer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
