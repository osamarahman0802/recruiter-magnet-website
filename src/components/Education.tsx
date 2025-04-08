
import { Calendar, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      school: "Shanxi University of Finance and Economics",
      degree: "Master of Business Administration - MBA, Business Administration, Management and Operations",
      period: "Sep 2019 - Jun 2021",
      grade: "3.4 GPA (84%)",
      skills: [
        "Market Research", "Marketing Strategy", "Team Management", 
        "Economic Development", "Sales", "Business Administration", 
        "Team Leadership", "Business Analysis", "Management", "International Trade"
      ]
    },
    {
      school: "Shaanxi University of Science and Technology",
      degree: "Diploma of Education, Chinese Language and Literature",
      period: "Mar 2019 - Jul 2019",
      grade: "3.8 GPA (98%)",
      skills: ["Chinese"]
    },
    {
      school: "Monad University",
      degree: "Bachelor of Commerce - BCom, Business/Commerce, General",
      period: "Jun 2015 - Jul 2018",
      grade: "69.18%",
      skills: []
    },
    {
      school: "Firayalal Public School - India",
      degree: "High School, Business/Commerce, General",
      period: "Apr 2013 - Mar 2015",
      grade: "64%",
      skills: []
    },
  ];
  
  const certifications = [
    {
      name: "Salesforce for Admins",
      issuer: "LinkedIn",
      date: "Jan 2025",
      skills: ["Salesforce.com Administration"]
    },
    {
      name: "Salesforce for Sales Managers",
      issuer: "LinkedIn",
      date: "Jan 2025",
      skills: ["Salesforce.com"]
    },
    {
      name: "Learning Zoho CRM",
      issuer: "LinkedIn",
      date: "Jan 2025",
      skills: ["Zoho CRM"]
    }
  ];

  return (
    <section id="education" className="py-24 bg-softGray">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-softBlue mb-6">Academic Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="experience-card animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <div className="flex items-center mb-2">
                          <GraduationCap className="h-5 w-5 text-gold mr-2" />
                          <h4 className="text-xl font-bold text-navy">{edu.school}</h4>
                        </div>
                        <p className="text-gray-700">{edu.degree}</p>
                        {edu.grade && <p className="text-gray-600 mt-1">Grade: {edu.grade}</p>}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 whitespace-nowrap">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    
                    {edu.skills.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-600 mb-2">Skills Gained:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, i) => (
                            <span key={i} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-softBlue mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="animate-fade-in" style={{animationDelay: `${(index + 4) * 150}ms`}}>
                  <CardContent className="p-4">
                    <h4 className="text-lg font-bold text-navy">{cert.name}</h4>
                    <p className="text-gray-600">{cert.issuer}</p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-sm text-gray-600">{cert.date}</p>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-softBlue mb-6">Honors & Awards</h3>
              <Card>
                <CardContent className="p-4">
                  <h4 className="text-lg font-bold text-navy">Second-Class International Student Scholarship</h4>
                  <p className="text-gray-600">Shanxi University of Finance & Economics</p>
                  <p className="text-sm text-gray-600 mt-2">Oct 2019</p>
                  <p className="mt-2 text-gray-700">
                    Awarded admission and a partial scholarship for the MBA program, recognizing academic qualifications and professional promise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
