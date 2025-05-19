
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div>
            <div className="text-2xl font-bold text-brand-black mb-4">
              <span>Edu</span>
              <span className="text-brand-yellow">Moon</span>
            </div>
            <p className="text-gray-600 mb-4">
              Helping engineering students master their subjects with interactive online courses.
            </p>
            <p className="text-gray-800">
              EduMoon @ Andhra University Incubation Centre,
              <br />Visakhapatnam, Andhra Pradesh
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold mb-4">Popular Courses</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
                  Electrical Engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
                  Digital Logic Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
                  C Programming
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
                  Network Security
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
                  Signals & Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest course updates and offers.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              />
              <Button className="bg-brand-yellow text-black hover:bg-brand-dark-yellow">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-brand-yellow transition-colors">
            <Facebook size={24} />
          </a>
        </div>

        {/* Final CTA */}
        <div className="text-center mb-10 py-8 border-t border-b border-gray-200">
          <p className="text-gray-600 mb-4 italic">
            Every minute you wait is another student getting ahead. Ready to conquer your exams?
          </p>
          <Button className="btn-primary">
            Start Your Free Trial →
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          <p className="mb-2">
            © 2025 EduMoon  |  
            <a href="#" className="hover:text-brand-yellow ml-1 mr-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-brand-yellow ml-1 mr-1">Terms</a> | 
            <a href="#" className="hover:text-brand-yellow ml-1">Refund Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
