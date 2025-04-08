import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll respond to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-8">
              I'm always open to discussing new opportunities, projects, or partnerships. 
              Feel free to reach out using the form or contact details below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-lightBlue p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-navy">Email</h3>
                  <p className="text-gray-700">rahman.osama@outlook.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-lightBlue p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-navy">Phone</h3>
                  <p className="text-gray-700">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-lightBlue p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-navy">Location</h3>
                  <p className="text-gray-700">Hyderabad, Telangana, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-lightBlue p-3 rounded-full mr-4">
                  <Linkedin className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-navy">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/osama-rahman-297197ab" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-softBlue hover:underline"
                  >
                    linkedin.com/in/osama-rahman-297197ab
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-lightBlue p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-navy">Availability</h3>
                  <p className="text-gray-700">Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-softGray p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full h-32"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-navy hover:bg-softBlue text-white font-medium w-full flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
