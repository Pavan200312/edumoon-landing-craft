
import { Button } from "@/components/ui/button";

const CourseHighlights = () => {
  const courses = [
    {
      title: "Elements of Electrical Engg.",
      instructor: "Renuka",
      benefit: "Build circuits from scratch with guided labs",
    },
    {
      title: "Digital Logic Design",
      instructor: "Sohana",
      benefit: "Master gates & truth tables through real‑time simulators",
    },
    {
      title: "C Programming Fundamentals",
      instructor: "EduMoon",
      benefit: "Hands‑on coding challenges you can't fail to understand",
    },
  ];

  return (
    <section className="section-padding bg-gray-50" id="courses">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            First‑Year Course Highlights
          </h2>
          <p className="text-lg text-gray-600 italic">
            All courses free to preview—no credit card required!
          </p>
          <div className="h-1 w-24 bg-brand-yellow mx-auto mt-6"></div>
        </div>

        {/* Mobile view - Cards */}
        <div className="md:hidden space-y-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <div className="flex items-center mb-3">
                <span className="text-sm font-medium text-gray-500 mr-1">Instructor:</span>
                <span className="text-sm font-medium">{course.instructor}</span>
              </div>
              <p className="text-gray-700 mb-4">{course.benefit}</p>
              <Button className="bg-brand-yellow hover:bg-brand-dark-yellow text-black w-full">
                Enroll Free
              </Button>
            </div>
          ))}
        </div>

        {/* Desktop view - Table */}
        <div className="hidden md:block overflow-hidden rounded-lg shadow">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-4 px-6 text-left font-semibold">Course</th>
                <th className="py-4 px-6 text-left font-semibold">Instructor</th>
                <th className="py-4 px-6 text-left font-semibold">Key Benefit</th>
                <th className="py-4 px-6 text-center font-semibold">Enroll Now →</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-medium">{course.title}</td>
                  <td className="py-4 px-6">{course.instructor}</td>
                  <td className="py-4 px-6">{course.benefit}</td>
                  <td className="py-4 px-6 text-center">
                    <Button className="bg-brand-yellow hover:bg-brand-dark-yellow text-black">
                      Enroll Free
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
