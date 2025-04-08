
import { Briefcase, Globe, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 gap-12">
          <div className="animate-fade-in">
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Leveraging an MBA from Shanxi University of Finance and Economics (China), I have built a dynamic career as an 
              Overseas Sales Manager at Zhejiang Reci Laser, where my strategic vision, dedication to building strong client 
              relationships, and international business acumen have driven significant market expansion and revenue growth.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              With experience spanning multiple industries and global markets, I specialize in developing and implementing 
              comprehensive sales strategies, managing cross-functional teams, and negotiating complex international deals 
              that deliver exceptional results for all stakeholders.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              My multilingual capabilities and cross-cultural expertise position me as an effective bridge between markets, 
              allowing me to navigate diverse business environments and build lasting partnerships that drive sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card className="border-l-4 border-l-navy transition-transform hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="bg-lightBlue w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="text-navy h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Business Development</h3>
                <p className="text-gray-600">Identifying new market opportunities and developing strategies for sustainable growth</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-navy transition-transform hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="bg-lightBlue w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-navy h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">International Trade</h3>
                <p className="text-gray-600">Navigating global markets with expertise in cross-border transactions and logistics</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-navy transition-transform hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="bg-lightBlue w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-navy h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Team Leadership</h3>
                <p className="text-gray-600">Managing cross-functional teams across different locations and cultural contexts</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-navy transition-transform hover:translate-y-[-5px]">
              <CardContent className="p-6">
                <div className="bg-lightBlue w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-navy h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Revenue Growth</h3>
                <p className="text-gray-600">Driving significant sales and implementing strategic pricing models for maximum profitability</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
