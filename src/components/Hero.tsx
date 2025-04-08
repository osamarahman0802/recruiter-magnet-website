
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

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
      className="relative min-h-screen flex items-center pt-16 bg-hero-pattern overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-pattern opacity-90"></div>
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Osama Rahman
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gold font-medium">
              Overseas Sales Manager
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              International business professional with expertise in sales management, business development, 
              and cross-cultural negotiations, driving global market expansion and revenue growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-gold hover:bg-amber-500 text-navy hover:text-navy font-bold px-8 py-6 text-lg"
              >
                Contact Me
              </Button>
              <Button 
                onClick={scrollToAbout}
                variant="outline"
                className="border-white text-white hover:text-navy hover:bg-white px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative rounded-full w-80 h-80 overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/lovable-uploads/94df2c31-edad-484c-b2be-40d44fcb865f.png"
                alt="Osama Rahman"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-white flex flex-col items-center"
            aria-label="Scroll down"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
