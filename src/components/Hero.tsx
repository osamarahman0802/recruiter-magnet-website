
import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-r from-navy to-softBlue"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-navy via-transparent to-transparent opacity-80"></div>
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-fade-in">
            <div className="mb-4 inline-block bg-white/10 backdrop-blur-lg px-4 py-1 rounded-full text-gold">
              Overseas Sales Professional
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Osama <span className="text-gold">Rahman</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-white/90 font-medium">
              Driving Global Business Growth
            </h2>
            <p className="text-lg mb-8 max-w-lg text-white/80 backdrop-blur-sm bg-navy/30 p-4 rounded-lg border-l-4 border-gold">
              International business professional with expertise in sales management, business development, 
              and cross-cultural negotiations, driving global market expansion and revenue growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-gold hover:bg-amber-500 text-navy hover:text-navy font-bold px-8 py-6 text-lg group transition-all duration-300"
              >
                Contact Me
                <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                onClick={scrollToAbout}
                variant="outline"
                className="border-white text-white hover:text-navy hover:bg-white px-8 py-6 text-lg backdrop-blur-sm bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold to-softBlue opacity-30 blur-xl rounded-full animate-pulse"></div>
              <div className="relative rounded-full w-80 h-80 overflow-hidden border-2 border-white/30 shadow-xl backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/338e74ca-4682-4aa3-b36d-f9351a6605b9.png"
                  alt="Osama Rahman"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -z-10 top-10 right-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-10 left-10 w-40 h-40 bg-softBlue/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-white flex flex-col items-center group"
            aria-label="Scroll down"
          >
            <span className="mb-2 text-sm backdrop-blur-sm bg-white/10 px-4 py-1 rounded-full group-hover:bg-white/20 transition-all">Scroll Down</span>
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
