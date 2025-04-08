
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="nav-link text-white">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link text-white">About</button>
          <button onClick={() => scrollToSection('experience')} className="nav-link text-white">Experience</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link text-white">Skills</button>
          <button onClick={() => scrollToSection('education')} className="nav-link text-white">Education</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link text-white">Contact</button>
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
        <div className="md:hidden bg-navy/95 backdrop-blur-md shadow-lg">
          <div className="flex flex-col px-4 py-2">
            <button onClick={() => scrollToSection('home')} className="py-3 text-white border-b border-white/10">Home</button>
            <button onClick={() => scrollToSection('about')} className="py-3 text-white border-b border-white/10">About</button>
            <button onClick={() => scrollToSection('experience')} className="py-3 text-white border-b border-white/10">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="py-3 text-white border-b border-white/10">Skills</button>
            <button onClick={() => scrollToSection('education')} className="py-3 text-white border-b border-white/10">Education</button>
            <button onClick={() => scrollToSection('contact')} className="py-3 text-white">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
