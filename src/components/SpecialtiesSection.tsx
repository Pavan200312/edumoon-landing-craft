
import { Button } from "@/components/ui/button";

const SpecialtiesSection = () => {
  const cseSpecialties = [
    {
      title: "DLD",
      description: "Visual logic builder + instant feedback",
    },
    {
      title: "DOS",
      description: "Real‑world system calls & shell scripting",
    },
    {
      title: "Network Security",
      description: "Live firewall labs & pen‑testing demos",
    },
  ];

  const eceSpecialties = [
    {
      title: "Wave Guides",
      description: "3D field simulations & practice worksheets",
    },
    {
      title: "Signals & Systems",
      description: "Audio analysis tools & MATLAB tutorials",
    },
    {
      title: "Magnetostatics",
      description: "Interactive field line visualizer",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            CSE & ECE Specialties
          </h2>
          <div className="h-1 w-24 bg-brand-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* CSE Section */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-3">CSE Courses</h3>
            <p className="text-gray-700 italic mb-8">
              "From algorithms to network security, get job‑ready skills."
            </p>

            <ul className="space-y-6">
              {cseSpecialties.map((specialty, index) => (
                <li key={index} className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light-yellow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-black">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{specialty.title}:</p>
                    <p className="text-gray-600">{specialty.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ECE Section */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-3">ECE Courses</h3>
            <p className="text-gray-700 italic mb-8">
              "Signal processing, magnetostatics, and more—engineer your future."
            </p>

            <ul className="space-y-6">
              {eceSpecialties.map((specialty, index) => (
                <li key={index} className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light-yellow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-black">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{specialty.title}:</p>
                    <p className="text-gray-600">{specialty.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button className="btn-primary">
            Browse All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
