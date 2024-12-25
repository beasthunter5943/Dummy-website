import { useEffect, useState } from 'react';
import { CheckCircle, TrendingUp, Clock, Shield } from 'lucide-react';

const stats = [
  { value: 99, label: 'Customer Satisfaction' },
  { value: 85, label: 'Cost Reduction' },
  { value: 3, label: 'Hours Saved Daily' },
  { value: 1000, label: 'Active Users' },
];

const benefits = [
  {
    title: 'Enhanced Efficiency',
    description: 'Automate repetitive tasks and streamline workflows',
    icon: TrendingUp,
  },
  {
    title: '24/7 Availability',
    description: 'Round-the-clock customer support and service',
    icon: Clock,
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime',
    icon: Shield,
  },
];

export function Benefits() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('benefits');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && !animated) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  return (
    <section id="benefits" className="py-24 bg-[#2C1810] text-[#F5EDE4]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-sans font-bold">Why Choose Us</h2>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`transform transition-all duration-500 ${
                    animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-4xl font-bold text-[#E5D3B3]">
                    {stat.value}
                    {typeof stat.value === 'number' && '%'}
                  </div>
                  <div className="text-lg font-serif text-[#F5EDE4]/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`flex items-start space-x-4 transform transition-all duration-500 ${
                  animated ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <benefit.icon className="w-8 h-8 text-[#E5D3B3] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-sans font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-serif text-[#F5EDE4]/80">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}