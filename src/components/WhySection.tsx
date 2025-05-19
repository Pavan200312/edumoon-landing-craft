
const WhySection = () => {
  const features = [
    {
      title: "Learn at Your Pace",
      description: "Bite‑sized modules you can tackle anytime, anywhere.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      title: "Expert Instructors",
      description: "Led by industry pros and top university faculty.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Hands‑On Practice",
      description: "Quizzes, downloadable notes, and real‑world problem sets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <path d="M16 13.5V13c0-1-.6-2-2.1-2H9.9C8.6 11 8 12 8 13v.5"></path>
          <path d="M12 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
          <path d="M16 18h.01"></path>
          <path d="M8 18h.01"></path>
          <path d="M12 18h.01"></path>
          <path d="M12 13.5v.5"></path>
          <path d="M12 18v-4"></path>
        </svg>
      ),
    },
    {
      title: "24/7 Doubt Support",
      description: "Instant chat & weekly live Q&A to clear every question.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <path d="M12 11v.01"></path>
          <path d="M8 11v.01"></path>
          <path d="M16 11v.01"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-white" id="why-edumoon">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why EduMoon?</h2>
          <div className="h-1 w-24 bg-brand-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="text-brand-black mb-6 group-hover:text-brand-yellow transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
