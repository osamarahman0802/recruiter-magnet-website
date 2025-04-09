
import { BadgeCheck } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Sales & Marketing",
      skills: [
        "Sales Management", 
        "Business Development", 
        "Customer Relationship Management (CRM)", 
        "Marketing Strategy",
        "International Trade",
        "Lead Generation",
        "Negotiation",
        "Pricing Strategy",
        "Market Research",
        "Client Acquisition",
        "Sales Strategies"
      ]
    },
    {
      category: "Management & Analysis",
      skills: [
        "Team Leadership", 
        "Project Management", 
        "Strategic Planning",
        "Cross-functional Team Management",
        "Performance Analysis",
        "Business Strategy",
        "Financial Statement Analysis",
        "Risk Management",
        "Critical Thinking"
      ]
    },
    {
      category: "Technical Skills",
      skills: [
        "Zoho CRM", 
        "Supply Chain Management",
        "Import/Export Operations",
        "Logistics Management",
        "MS Excel",
        "MS Word",
        "MS PowerPoint",
        "AI Agents"
      ]
    },
    {
      category: "Languages & Communication",
      skills: [
        "English (Professional)",
        "Hindi (Native)",
        "Urdu (Professional)",
        "Chinese (Elementary)",
        "Excellent Communication"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
              <h3 className="text-2xl font-bold text-softBlue mb-4">{category.category}</h3>
              <div className="bg-softGray p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center group">
                      <BadgeCheck className="h-5 w-5 text-gold mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 group-hover:text-navy transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-softBlue mb-6">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-lightBlue rounded-lg p-6 text-center hover:shadow-lg transition-all hover:scale-105">
              <div className="text-4xl font-bold text-navy mb-2">Rs 3.058 Cr</div>
              <div className="text-xl text-softBlue">Revenue Generated</div>
              <p className="mt-2 text-gray-700">Through sales of rice mills and sprayers</p>
            </div>
            <div className="bg-lightBlue rounded-lg p-6 text-center hover:shadow-lg transition-all hover:scale-105">
              <div className="text-4xl font-bold text-navy mb-2">26+</div>
              <div className="text-xl text-softBlue">New Clients</div>
              <p className="mt-2 text-gray-700">Including cooperatives and FPOs</p>
            </div>
            <div className="bg-lightBlue rounded-lg p-6 text-center hover:shadow-lg transition-all hover:scale-105">
              <div className="text-4xl font-bold text-navy mb-2">15%</div>
              <div className="text-xl text-softBlue">Increase in Business</div>
              <p className="mt-2 text-gray-700">Through customized solutions and consultative selling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

