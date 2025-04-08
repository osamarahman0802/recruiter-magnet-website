
import { Heart, Linkedin, Github, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-bold mb-4 text-gold">Osama Rahman</h3>
            <p className="text-gray-300 mb-4">
              International Sales Professional specializing in business development and global market expansion.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/osama-rahman-297197ab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gold p-2 rounded-full text-white hover:text-navy transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/osamarahman0802" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gold p-2 rounded-full text-white hover:text-navy transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:rahman.osama@outlook.com" 
                className="bg-white/10 hover:bg-gold p-2 rounded-full text-white hover:text-navy transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <div 
                className="bg-white/10 hover:bg-gold p-2 rounded-full text-white hover:text-navy transition-all cursor-pointer"
                title="WeChat ID: OsamaRahman0802"
              >
                <MessageCircle className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-bold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-gold transition-colors flex items-center"><span className="mr-2">→</span>Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-gold transition-colors flex items-center"><span className="mr-2">→</span>About</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-gold transition-colors flex items-center"><span className="mr-2">→</span>Experience</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-gold transition-colors flex items-center"><span className="mr-2">→</span>Skills</a></li>
              <li><a href="#education" className="text-gray-300 hover:text-gold transition-colors flex items-center"><span className="mr-2">→</span>Education</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors flex items-center"><span className="mr-2">→</span>Contact</a></li>
            </ul>
          </div>
          
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-bold mb-4 text-gold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold mt-1 mr-2" />
                <span className="text-gray-300">rahman.osama@outlook.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold mt-1 mr-2"><path d="M13 2H3v18h18V11"></path><path d="m22 2-8.4 8.4"></path><path d="M22 8.5V2h-6.5"></path></svg>
                <div>
                  <p className="text-gray-300">India: +91 9886076428</p>
                  <p className="text-gray-300">China: +86 19575057548</p>
                </div>
              </li>
              <li className="flex items-start">
                <MessageCircle className="h-5 w-5 text-gold mt-1 mr-2" />
                <span className="text-gray-300">WeChat ID: OsamaRahman0802</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Osama Rahman. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center">
            Crafted with <Heart className="h-4 w-4 mx-1 text-red-500" /> for excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
