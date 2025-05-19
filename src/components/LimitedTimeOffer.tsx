
import { Button } from "@/components/ui/button";

const LimitedTimeOffer = () => {
  return (
    <section className="py-16 bg-brand-black text-white relative overflow-hidden">
      {/* Yellow decoration circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-yellow opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-yellow opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="text-center md:text-left">
            <div className="inline-block text-4xl mb-2">🚀</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              LIMITED‑TIME OFFER
            </h2>
            <p className="text-xl mb-2">
              Enroll by <span className="text-brand-yellow font-bold">May 31</span> and get 
              <span className="text-brand-yellow font-bold"> 20% off</span> all premium tracks!
            </p>
            <p className="text-lg">
              ⏰ Hurry—only <span className="text-brand-yellow font-bold">48 hours</span> left to claim your discount.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <Button className="bg-brand-yellow hover:bg-brand-dark-yellow text-black text-lg px-8 py-6">
              Claim 20% Discount
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedTimeOffer;
