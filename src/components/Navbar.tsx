
import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg bg-navy/80 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-white text-2xl font-bold flex items-center space-x-2">
          <span>Osama</span>
          <span className="text-gold">Rahman</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection('home')} 
            className={`nav-link text-white ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className={`nav-link text-white ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className={`nav-link text-white ${activeSection === 'experience' ? 'active' : ''}`}
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className={`nav-link text-white ${activeSection === 'skills' ? 'active' : ''}`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('education')} 
            className={`nav-link text-white ${activeSection === 'education' ? 'active' : ''}`}
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`nav-link text-white ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
        </div>

        {/* Social Media Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-2">
          <a 
            href="https://www.linkedin.com/in/osama-rahman-297197ab" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="social-icon"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a 
            href="https://github.com/osamarahman0802" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="social-icon"
          >
            <Github className="h-4 w-4" />
          </a>
          <a 
            href="mailto:rahman.osama@outlook.com"
            aria-label="Email"
            className="social-icon"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="flex flex-col px-4 py-2">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`py-3 text-white border-b border-white/10 ${activeSection === 'home' ? 'text-gold' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`py-3 text-white border-b border-white/10 ${activeSection === 'about' ? 'text-gold' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className={`py-3 text-white border-b border-white/10 ${activeSection === 'experience' ? 'text-gold' : ''}`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className={`py-3 text-white border-b border-white/10 ${activeSection === 'skills' ? 'text-gold' : ''}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('education')} 
              className={`py-3 text-white border-b border-white/10 ${activeSection === 'education' ? 'text-gold' : ''}`}
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`py-3 text-white ${activeSection === 'contact' ? 'text-gold' : ''}`}
            >
              Contact
            </button>
          </div>
          
          {/* Social Media Links (Mobile) */}
          <div className="flex justify-center space-x-6 py-4 border-t border-white/10 mt-2">
            <a 
              href="https://www.linkedin.com/in/osama-rahman-297197ab" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="social-icon"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/osamarahman0802" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="social-icon"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:rahman.osama@outlook.com"
              aria-label="Email"
              className="social-icon"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
