
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-brand-gray to-white py-16 md:py-24 overflow-hidden relative">
      <div className="container-custom">
        {/* Yellow circle decoration */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-yellow rounded-full opacity-30 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Master Your Engineering Exams—
            <span className="text-brand-yellow">Fast, Flexible, and Fail‑Safe</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl">
            Interactive video lessons + expert support ensure you ace every subject 
            <span className="font-semibold"> or your money back.</span>
          </p>
          
          <Button className="btn-primary text-lg mb-10 group">
            Start Your Free Trial
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
          
          {/* Trust Bar */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 border-t border-b border-gray-200 py-6 w-full">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-yellow mr-2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span className="text-gray-700 font-medium">100K+ Students</span>
            </div>
            
            <div className="hidden md:block h-6 w-px bg-gray-300"></div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-yellow mr-2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="text-gray-700 font-medium">4.8/5 Average Rating</span>
            </div>
            
            <div className="hidden md:block h-6 w-px bg-gray-300"></div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-yellow mr-2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              </svg>
              <span className="text-gray-700 font-medium">30‑Day Money‑Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
