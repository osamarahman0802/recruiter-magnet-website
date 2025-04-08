
import { Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Overseas Sales Manager",
      company: "Zhejiang Reci Laser Technology Company Ltd",
      period: "Nov 2023 - Present",
      location: "Zhejiang, China · Hybrid",
      achievements: [
        "Directed a cross-functional team of 5 in 2 locations, overseeing business development, sales, operations, and marketing.",
        "Managed relationships with 50 HNI clients, engaged in lead generation, and negotiated pricing with potential dealers.",
        "Achieved a Rs. 2.6 crores deal with a leading laser machine manufacturer by leveraging a strong distribution network."
      ],
      skills: ["Acquisitions", "Business Development"]
    },
    {
      title: "Regional Sales Manager",
      company: "JOINHANDS AUTO SPARE PARTS CO.,LTD",
      period: "Nov 2022 - Aug 2023",
      location: "China · Remote",
      achievements: [
        "Conducted market research on motor fuel pumps in the Indian market, focusing on Hero Moto Corp., Honda, and TVS to engineer in-house components using reverse engineering.",
        "Pioneered a major pricing restructure by redirecting focus on consumer willingness to pay instead of product cost; devised a three-tiered pricing model that boosted average sale 35% and margin 12%.",
        "Contributed to product development, facilitating the launch of a new model with competitive pricing and quality assurance."
      ],
      skills: ["Sales & Marketing", "International Sales"]
    },
    {
      title: "Sales Representative",
      company: "COMHEIGH IMPEX PVT LTD",
      period: "Jul 2021 - Oct 2022",
      location: "India · On-site",
      achievements: [
        "Managed B2B sales of drilling and boring machines to EPC companies across 3 states in India, ensuring timely delivery and client satisfaction.",
        "Collaborated with overseas suppliers to streamline order delivery via shipping channels like CIF and EXW, optimizing logistics and cost efficiency.",
        "Led quarterly financial review meetings to address client needs and adjust financial plans, resulting in improved client relationships and increased sales revenue."
      ],
      skills: ["Import/Export Operations", "Sales & Marketing"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-softGray">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card bg-white rounded-lg shadow-md overflow-hidden animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
              <Card className="border-0">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-navy">{exp.title}</h3>
                      <p className="text-xl text-gray-700">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 flex flex-wrap gap-2">
                      <span className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </span>
                      <span className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-gold mr-2">•</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    <Award className="h-5 w-5 text-softBlue" />
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
