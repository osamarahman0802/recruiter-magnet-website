
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-gold">Osama Rahman</h3>
            <p className="text-gray-300 mb-4">
              International Sales Professional specializing in business development and global market expansion.
            </p>
          </div>
          
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-gold transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-gold transition-colors">Experience</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-gold transition-colors">Skills</a></li>
              <li><a href="#education" className="text-gray-300 hover:text-gold transition-colors">Education</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-gold">Let's Connect</h3>
            <p className="text-gray-300 mb-4">
              Looking for opportunities in sales management and business development.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/osama-rahman-297197ab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full text-white hover:text-gold transition-all"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
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
