import { ParticleBackground } from './ParticleBackground';
import { GlitchHeading } from './GlitchHeading';
import { SciFiButton } from '@/components/ui/SciFiButton';
import { theme } from '@/lib/theme';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <GlitchHeading text="Next-Gen AI Solutions" />
            
            <p className={cn(
              'text-xl md:text-2xl',
              `text-${theme.colors.neonCoffee}`,
              'font-light tracking-wide'
            )}>
              Quantum-Powered Intelligence for Tomorrow's Challenges
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <SciFiButton variant="primary">
                Launch Interface
              </SciFiButton>
              <SciFiButton variant="secondary">
                Neural Docs
              </SciFiButton>
            </div>
          </div>
          
          <div className="flex-1 relative">
            {/* 3D Model or Advanced Animation Here */}
          </div>
        </div>
      </div>
    </section>
  );
}