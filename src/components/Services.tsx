import { Bot, Brain, Workflow } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'AI Chatbots',
    description: 'Intelligent customer service and support automation solutions',
    icon: Bot,
  },
  {
    title: 'Custom GPTs',
    description: 'Tailored AI models designed for your specific business needs',
    icon: Brain,
  },
  {
    title: 'AI Automation',
    description: 'Streamline and optimize your business workflows',
    icon: Workflow,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-[#F5EDE4]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-sans font-bold text-[#2C1810] text-center mb-16">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white border-[#E5D3B3]"
            >
              <CardHeader>
                <div className="w-16 h-16 mb-4 rounded-full bg-[#4A3528] flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-[#F5EDE4]" />
                </div>
                <CardTitle className="text-2xl font-sans text-[#2C1810]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg font-serif text-[#4A3528]">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}