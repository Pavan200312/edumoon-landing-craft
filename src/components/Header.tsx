
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-brand-black">
              <span>Edu</span>
              <span className="text-brand-yellow">Moon</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-brand-black hover:text-brand-yellow hover:bg-transparent">
            Courses
          </Button>
          <Button variant="outline" className="border-brand-black text-brand-black hover:bg-brand-yellow hover:text-brand-black hover:border-transparent">
            Login
          </Button>
          <Button className="bg-brand-yellow text-brand-black hover:bg-brand-dark-yellow">
            Sign Up
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brand-black"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container-custom flex flex-col space-y-3 pb-3">
            <Button variant="ghost" className="justify-start text-brand-black hover:text-brand-yellow hover:bg-transparent">
              Courses
            </Button>
            <Button variant="outline" className="justify-start border-brand-black text-brand-black hover:bg-brand-yellow hover:text-brand-black hover:border-transparent">
              Login
            </Button>
            <Button className="justify-start bg-brand-yellow text-brand-black hover:bg-brand-dark-yellow">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
