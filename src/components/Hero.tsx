import { Bot, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1E1410] text-[#F5EDE4]">
      {/* Particle animation background */}
      <div className="absolute inset-0 opacity-20" id="particles-js"></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#E5D3B3] to-[#F5EDE4]">
              Automate Your Future with AI Solutions
            </h1>
            <p className="font-serif text-xl md:text-2xl text-[#E5D3B3]/80 mb-8">
              Custom AI Chatbots, GPTs, and Automation Services
            </p>
            <Button 
              size="lg"
              className={cn(
                "bg-[#4A3528] hover:bg-[#2C1810] text-[#F5EDE4]",
                "transform transition-all duration-300 hover:scale-105",
                "font-semibold text-lg px-8 py-6"
              )}
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square">
              <Bot className="w-full h-full text-[#E5D3B3] animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}